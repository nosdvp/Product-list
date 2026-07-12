import './App.css';
import ListPage from '../src/components/ListPage/ListPage.js'
import CartPage from '../src/components/CartPage/CartPage.js'
import Modal from './components/Modal/Modal.js';
import ModalForItem from './components/ModalForItem/ModalForItem.js';
import { useState } from 'react';
import menu from './data.js'
function App() {

  const [countCart, setCountCart] = useState(0)
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [orderNumber, setOrderNumber] = useState()
  const [modal, setModal] = useState(false)
  const [modalForItem, setModalForItem] = useState(false)
  const [countItem, setCountItem] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)

  console.log(cart)

  return (
    <div className="wrapper">
      <div className='blockInfo'>
        <div className='listBlock'>
          <ListPage
            setCountCart = {setCountCart}
            setCart = {setCart}
            setTotalPrice = {setTotalPrice}
            setModalForItem = {setModalForItem}
            setSelectedItem = {setSelectedItem}
          />
        </div>
        <div className='cartBlock'>
          <CartPage
            setCart = {setCart}
            setCountCart = {setCountCart}
            setTotalPrice = {setTotalPrice}
            setModal = {setModal}
            setOrderNumber = {setOrderNumber}

            countCart = {countCart}
            cart = {cart}
            totalPrice = {totalPrice}
          />
        </div>
      </div>
      {modal === true ? (
          <Modal
            cart = {cart}
            orderNumber = {orderNumber}
            countItem = {countItem}

            setModal = {setModal}
            setCart = {setCart}
            setCountCart = {setCountCart}
            setTotalPrice = {setTotalPrice}
          />
        ) : (
          <>
          </>
        )}

        {modalForItem === true ? (
          <ModalForItem
            cart = {cart}
            countItem = {countItem}
            selectedItem = {selectedItem}

            setCountCart = {setCountCart}
            setCart = {setCart}
            setCountItem = {setCountItem}
            setModalForItem = {setModalForItem}
            setTotalPrice = {setTotalPrice}
          />
        ) : (
          <>
          </>
        )}
    </div>
  );
}

export default App;
