import axios from 'axios'

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_STRAPI_KEY}`,
  },
})
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_API_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
// export const supabase = createClient(supabaseUrl, supabaseKey)
