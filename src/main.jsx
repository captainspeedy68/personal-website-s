import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import './index.css'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <ToastContainer autoClose={1000}></ToastContainer> */}
  </React.StrictMode>,
)
