import React from 'react'
import Card from '../../../components/Card/Card'
import useFetch from '../../../hooks/useFetch'

const List = ({subCats, catId, maxPrice, sort}) => {
  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )
  return (
    <div className='flex justify-between flex-wrap'>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
