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

  const [selectedImg, setSelectedImg] = useState('image')
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const {data, loading, error} = useFetch(
    `/rest/v1/products?select=*,image(*),image2(*)&id=eq.${id}`
  )
  console.log(data)
  return (
    <div className='product'>
      {loading
        ? `loading`
        : data && (
            <>
              <div className='left'>
                <div className='images'>
                  <img
                    src={data[0]?.image?.formats?.small.url}
                    alt=''
                    onClick={(e) => setSelectedImg('image')}
                  />
                  {data[0]?.image2 && (
                    <img
                      src={data[0]?.image2?.formats?.small.url}
                      alt=''
                      onClick={(e) => setSelectedImg('image2')}
                    />
                  )}
                </div>
                <div className='mainImg'>
                  <img src={data[0]?.[selectedImg]?.formats?.medium.url} alt='' />
                </div>
              </div>
              <div className='right'>
                <h1>{data[0]?.title}</h1>
                <span className='price'>${data[0]?.price}</span>
                <p>{data[0]?.desc}</p>
                <div className='quantity'>
                  <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                    -
                  </button>
                  {quantity}
                  <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button
                  className='add'
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data[0]?.id,
                        title: data[0]?.title,
                        price: data[0]?.price,
                        img: data[0]?.[selectedImg]?.formats?.thumbnail.url,
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
