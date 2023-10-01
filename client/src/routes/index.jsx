import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Product from '../pages/Product/Product'
import Layout from '../pages/Layout'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
])

export default routes
