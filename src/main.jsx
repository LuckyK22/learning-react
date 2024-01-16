import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import CurrencyConverter from './Components/CurrencyConverter/CurrencyConverter.jsx'
import Home from './Components/Home/Home.jsx'
import PasswordGen from './Components/PasswordGen/PasswordGen.jsx'
import './index.css'


// const router = createBrowserRouter([
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "currencyConverter",
//         element: <currencyConverter />
//       },
//       {
//         path: "passwordGen",
//         element: <PasswordGen />
//       }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} /> 
      <Route path='currencyConverter' element={<CurrencyConverter />} />
      <Route path='passwordGen' element={<PasswordGen />} />
    </>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
