import React, {useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import './Product.scss'
import {useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/cartReducer'

const Product = () => {
  const id = useParams().id

  const [selectedImg, setSelectedImg] = useState('img')
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const {data, loading, error} = useFetch(`/products/${id}?populate=*`)

  return (
    <div className='product'>
      {loading ? (
        'loading'
      ) : (
        <>
          {' '}
          <div className='left'>
            <div className='images'>
              <img
                src={data?.attributes?.img?.data?.attributes?.url}
                alt=''
                onClick={(e) => setSelectedImg('img')}
              />
              {data?.attributes?.img2?.data?.attributes?.url && (
                <img
                  src={data?.attributes?.img2?.data?.attributes?.url}
                  alt=''
                  onClick={(e) => setSelectedImg('img2')}
                />
              )}
            </div>
            <div className='mainImg'>
              <img src={data?.attributes[selectedImg]?.data?.attributes?.url} alt='' />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className='add'
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    price: data?.attributes?.price,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    quantity: quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className='links'>
              <div className='item'>
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className='item'>
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className='info border-b-[3px] border-[#eeeded] pb-[15px]'>
              <h6>Vendor: Polo</h6>
              <h6>Product Type: T-Shirt</h6>
              <h6>Tag: T-Shirt, Women, Top</h6>
            </div>
            <div className='info'>
              <span>DESCRIPTION</span>
              <span className='border-y-[3px] border-[#eeeded]'>ADDITIONAL INFORMATION</span>
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
