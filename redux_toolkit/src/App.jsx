import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './component/Cart'
import products from './products.json';
import Product from './component/Product'

function App() {
 

  return (
    <>
     <div className='App'>
     <Cart/>
     <div className='products'>
     {
      products.map((products)=>(<Product {...products} />))
     }

     </div>
     </div>
    </>
  )
}

export default App
