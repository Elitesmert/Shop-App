import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes'
import {persistor, store} from './redux/store'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import '@/assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)
