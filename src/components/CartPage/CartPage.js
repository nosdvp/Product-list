import React, { useState } from 'react'
import './CartPage.scss'
import cake from '../../img/illustration-empty-cart.svg'
import close from '../../img/icon-remove-item.svg'
import carbon from '../../img/icon-carbon-neutral.svg'

const CartPage = ({
  countCart, 
  cart, 
  totalPrice,
  
  setCountCart, 
  setCart,
  setTotalPrice,
  setModal,
  setOrderNumber,
}) => {

  const deleteItem = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id))
    setCountCart(prev => prev - 1)
    setTotalPrice(prev => prev - item.price)
  }

  const activeModal = () => {
    let lengthOrder = 6
    let numbers = '1234567890'
    let getNumberOrder = ''

    for(let i = 0; i < lengthOrder; i++){
      let getRandomNumber = Math.floor(Math.random() * numbers.length)
      getNumberOrder += getRandomNumber
    }

    setModal(true)
    setOrderNumber(getNumberOrder)
  }

  return (
      <div className='CartPage-wrapper'>
        <div className='CartPage-wrapper__box'>
          <div className='CartPage-wrapper__box_title'>Your Cart ({countCart})</div>
            {countCart === 0 ? (
              <div className='CartPage-wrapper__box_imgBlock'>
                <img src={cake}></img>
                <div>Your added items will appear here.</div>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div className='CartPage-wrapper__box_itemMenu'>
                    <div className='CartPage-wrapper__box_itemMenu_box'>
                      <div className='CartPage-wrapper__box_itemMenu_box_title'>{item.name}</div>
                      <div className='CartPage-wrapper__box_itemMenu_box_price'>
                        <div>x{item.count}</div>
                        <div>@{item.price}</div>
                        <div>${item.count * item.price}</div>
                      </div>
                    </div>
                    <div className='CartPage-wrapper__box_itemMenu_close' onClick={() => deleteItem(item)}>
                      <div>
                        <img src={close}/>
                      </div>
                    </div>
                    
                  </div>
                ))}
                <div className='CartPage-wrapper__box_totalPrice'>
                  <div>Order Total:</div>
                  <div>${totalPrice}</div>
                </div>
                <div className='CartPage-wrapper__box_informBlock'>
                  <img src={carbon}/>
                  <div>This is a <span>carbon-nautral</span> delivery</div>
                </div>
                <div className='CartPage-wrapper__box_button' onClick={activeModal}>Confirm Order</div>
              </>
            )}
        </div>
      </div>   
  )
}

export default CartPage