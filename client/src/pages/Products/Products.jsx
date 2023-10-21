import React, {useState} from 'react'
import './Products.scss'
import List from './List/List'
import useFetch from '../../hooks/useFetch'
import {useParams} from 'react-router-dom'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [selectedSubCats, setSelectedSubCats] = useState([])
  const [sort, setSort] = useState('desc')
  const [maxPrice, setMaxPrice] = useState(500)

  // const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  const {data, loading, error} = useFetch(
    `/rest/v1/sub_categories_products_links?select=*,sub_category_id(*),product_id(*)`
  )
  console.log(data)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(
      isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value)
    )
  }

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {loading
            ? 'loading'
            : data?.map((item) => (
                <div className='inputItem' key={item.sub_category_id.id}>
                  <input
                    type='checkbox'
                    id={item.sub_category_id.id}
                    value={item.sub_category_id.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.sub_category_id.id} className='capitalize'>
                    {item.sub_category_id.title}
                  </label>
                </div>
              ))}
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={500} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              checked={sort === 'asc'}
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              checked={sort === 'desc'}
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products
