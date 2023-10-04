import {useEffect, useState} from 'react'
import {makeRequest} from '../makeRequest'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await makeRequest.get(url,)
        setData(res.data.data) // update the state with the fetched data
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.log(
            'API endpoint not found. Please check the URL and make sure the server is running.'
          )
        } else {
          setError(true)
        }
      }
      setLoading(false)
    }
    fetchData()
  }, [url])
  return {data, loading, error}
}
export default useFetch
