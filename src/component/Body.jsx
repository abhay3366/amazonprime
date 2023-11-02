import React from 'react'
import Header from './Header'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'

const Body = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element:<Login/>
      },
    ]);
  return (
    <div>
        <Header/>
        <Browse/>
    </div>
  )
}

export default Body