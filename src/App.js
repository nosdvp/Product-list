import './App.css';
import ListPage from '../src/components/ListPage/ListPage.js'
import CartPage from '../src/components/CartPage/CartPage.js'
import { useState } from 'react';
import menu from './data.js'
function App() {

  const [countCart, setCountCart] = useState(0)
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className="wrapper">
      <div className='blockInfo'>
        <div className='listBlock'>
          <ListPage
            setCountCart = {setCountCart}
            setCart = {setCart}
            setTotalPrice = {setTotalPrice}
          />
        </div>
        <div className='cartBlock'>
          <CartPage
            setCart = {setCart}
            setCountCart = {setCountCart}
            setTotalPrice = {setTotalPrice}

            countCart = {countCart}
            cart = {cart}
            totalPrice = {totalPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
