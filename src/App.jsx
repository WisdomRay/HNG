// import { useState } from 'react'
// import './App.css'
import ProductListing from './Product-Listing'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
         
    <Routes>
      <Route path='/' element={<ProductListing/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>


    </Routes> 
   

    </>
  )
}

export default App
