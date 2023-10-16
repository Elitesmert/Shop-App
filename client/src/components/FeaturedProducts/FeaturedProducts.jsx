import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

import './FeaturedProducts.scss'

const FeaturedProducts = ({title}) => {
  const {data, loading, error} = useFetch('/products')

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{title} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt molestias, optio
          totam numquam corporis ducimus, provident aspernatur, magnam quidem alias architecto.
          Numquam provident exercitationem eum aspernatur similique in animi.
        </p>
      </div>
      <div className='bottom'>
        {error
          ? 'Something went wrong! or Server not live!'
          : loading
          ? 'loading'
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts
