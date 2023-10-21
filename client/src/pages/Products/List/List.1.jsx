import React from 'react'
import Card from '../../../components/Card/Card'
import useFetch from '../../../hooks/useFetch'

export const List = ({subCats, catId, maxPrice}) => {
  // const {data, loading, error} = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // )
  let query = 'select=*,sub_category_id(*),product_id(*,image(*),image2(*))'

  if (subCats.length > 0) {
    query += `&sub_category_id=in.(${subCats.join(',')})` // Tüm sub_category_id'lerle eşleştir
  }

  const {data, loading, error} = useFetch(
    `/rest/v1/sub_categories_products_links?${query}&product_id.price=lt.${maxPrice}`
  )

  console.log(data)
  return (
    <div className='flex justify-between flex-wrap'>
      {data?.map(
        (item) => item.product_id && <Card item={item.product_id} key={item.id} />
        // <Card item={item.product_id} key={item.id} />
      )}
    </div>
  )
}
