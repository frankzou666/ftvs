import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'


import globalRouters from '@/route'

//import App from '@/pages/login/'
//import App from './App.jsx'
//import App from '@/pages/home/'
//import App from '@/pages/account/'

import '@/commons/styles/frame.styl';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={globalRouters}></RouterProvider>
  </React.StrictMode>,
)
