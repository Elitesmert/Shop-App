import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/product/${item?.id}`}>
        <div className='image'>
          {item?.is_new && <span>New Season</span>}
          <img src={item?.image?.formats?.small.url} alt='' className='mainImg' />
          {item?.image2 && (
            <img src={item?.image2?.formats?.small.url} alt='' className='secondImg' />
          )}
        </div>
      </Link>
      <h2>{item?.title}</h2>
      <div className='prices'>
        <h3>${item?.oldPrice || item?.price + 20}</h3>
        <h3>${item?.price}</h3>
      </div>
    </div>
  )
}

export default Card
