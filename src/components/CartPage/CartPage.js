import React from 'react'
import './CartPage.scss'
import cake from '../../img/illustration-empty-cart.svg'

const CartPage = ({countCart}) => {
  return (
      <div className='CartPage-wrapper'>
        {countCart === 0 ? (
          <>
            <div className='CartPage-wrapper__box'>
              <div className='CartPage-wrapper__box_title'>Your Cart ({countCart})</div>
              <div className='CartPage-wrapper__box_imgBlock'>
                <img src={cake}></img>
                <div>Your added items will appear here</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              Тут что-то есть
            </div>
          </>
        )}
      </div>   
  )
}

export default CartPage