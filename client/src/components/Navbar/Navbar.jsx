import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import {Link} from 'react-router-dom'
import {CircleFlag} from 'react-circle-flags'
import {useSelector} from 'react-redux'
import './Navbar.scss'
import Cart from '../Cart/Cart'

const Navbar = () => {
  const [shoppingCart, setShoppingCart] = useState(false)
  const products = useSelector((state) => state.cart.products)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <CircleFlag countryCode='gb' className='flag' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link to='/products/1'>Women</Link>
          </div>
          <div className='item'>
            <Link to='/products/2'>Men</Link>
          </div>
          <div className='item'>
            <Link to='/products/3'>Children</Link>
          </div>
        </div>
        <div className='center'>
          <Link to='/'>LAMASTORE</Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link to='/'>Homepage</Link>
          </div>
          <div className='item'>
            <Link to='/'>About</Link>
          </div>
          <div className='item'>
            <Link to='/'>Contact</Link>
          </div>
          <div className='item'>
            <Link to='/'>Stores</Link>
          </div>
          <div className='icons'>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon' onClick={() => setShoppingCart(!shoppingCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {shoppingCart && <Cart />}
    </div>
  )
}

export default Navbar
