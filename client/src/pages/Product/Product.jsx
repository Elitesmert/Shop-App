import React, {useState} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import './Product.scss'

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://images.pexels.com/photos/12274320/pexels-photo-12274320.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt='' onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Long Sleeve Graphic T-shirt</h1>
        <span className='price'>$99</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aut fuga, suscipit
          commodi mollitia soluta tempora sed sit vitae deserunt consectetur hic reiciendis iste
          debitis enim nulla esse recusandae repellendus!
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
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
    </div>
  )
}

export default Product
