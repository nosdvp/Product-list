import './App.css';
import ListPage from '../src/components/ListPage/ListPage.js'
import CartPage from '../src/components/CartPage/CartPage.js'
import { useState } from 'react';
import menu from './data.js'
function App() {

  const [countCart, setCountCart] = useState(0)

  return (
    <div className="wrapper">
      <div className='blockInfo'>
        <div className='listBlock'>
          <ListPage/>
        </div>
        <div className='cartBlock'>
          <CartPage
            countCart={countCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
