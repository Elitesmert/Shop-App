import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {

  console.log(item)
  return (
    <div className='card'>
      <Link to={`/product/${item?.id}`}>
        <div className='image'>
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={item.attributes?.img?.data?.attributes?.url}
            alt=''
            className='mainImg'
          />
          {item.attributes?.img2?.data?.attributes?.url && (
            <img
              src={item.attributes?.img2?.data?.attributes?.url}
              alt=''
              className='secondImg'
            />
          )}
        </div>
      </Link>
      <h2>{item?.attributes.title}</h2>
      <div className='prices'>
        <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
        <h3>${item?.attributes.price}</h3>
      </div>
    </div>
  )
}

export default Card
