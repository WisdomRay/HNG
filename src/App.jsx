// import { useState } from 'react'
// import './App.css'
import ProductListing from './Product-Listing'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
// import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  // const router = createBrowserRouter(createRoutesFromElements(
  //   <>
  //     <Route path='/' element={<ProductListing/>}/>
  //     <Route path='/product' element={<Product/>}/>
  //     <Route path='/cart' element={<Cart/>}/>
  //     <Route path='/checkout' element={<Checkout/>}/>
  //   </>
  // ))

  return (
    <>
         
      <Routes>
        <Route path='/' element={<ProductListing stateCart = {stateCart} cart ={cart}/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart cart={cart} />}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes> 
   

    </>
  )
}

export default App
