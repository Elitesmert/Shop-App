import React, {useEffect} from 'react'
import axios from 'axios'
import Card from '../Card/Card'

import './FeaturedProducts.scss'

const FeaturedProducts = ({title}) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Hat',
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Hat',
      oldPrice: 19,
      price: 12,
    },
  ]

  const [products, setProducts] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_STRAPI_KEY}`,
          },
        })
        setProducts(res.data.data) // update the state with the fetched data
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.log(
            'API endpoint not found. Please check the URL and make sure the server is running.'
          )
        } else {
          console.log(err.response ? err.response.data : err.message)
        }
      }
    }
    fetchData()
  }, [])
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt molestias, optio
          totam numquam corporis ducimus, provident aspernatur, magnam quidem alias architecto.
          Numquam provident exercitationem eum aspernatur similique in animi.
        </p>
      </div>
      <div className='bottom'>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
