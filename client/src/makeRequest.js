import axios from 'axios'

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_STRAPI_KEY}`,
  },
})

export const makeRequestSupabase = axios.create({
  baseURL: `${import.meta.env.VITE_SUPABASE_URL}`,
  headers: {
    apiKey: import.meta.env.VITE_SUPABASE_KEY,
    Authorization: `bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
  },
})
export const makeRequestSupabasePicture = axios.create({
  baseURL: `${import.meta.env.VITE_SUPABASE_URL}`,
  headers: {
    apiKey: import.meta.env.VITE_SUPABASE_KEY,
    Authorization: `bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
    AcceptProfile: 'storage',
  },
})
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_API_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
// export const supabase = createClient(supabaseUrl, supabaseKey)
