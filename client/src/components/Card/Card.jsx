import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  console.log(item)
  return (
    <div className='card'>
      <Link to={`/product/${item?.id}`}>
        <div className='image'>
          {item?.is_new && <span>New Season</span>}
          <img
            src={`${import.meta.env.VITE_SUPABASE_URL}/storage` + item?.img?.data?.url}
            alt=''
            className='mainImg'
          />
          {item?.img2?.data?.url && (
            <img
              src={import.meta.env.VITE_PICTURE_URL + item?.img2?.data?.url}
              alt=''
              className='secondImg'
            />
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
