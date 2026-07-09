import React from 'react'
import './CartPage.scss'
import cake from '../../img/illustration-empty-cart.svg'
import close from '../../img/icon-remove-item.svg'

const CartPage = ({countCart, cart}) => {
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
                      <div>{item.name}</div>
                      <div className='CartPage-wrapper__box_itemMenu_box_price'>
                        <div>счетчик</div>
                        <div>@{item.price}</div>
                        <div>$final</div>
                      </div>
                    </div>
                    <div className='CartPage-wrapper__box_itemMenu_close'>
                      <img src={close}/>
                    </div>
                  </div>
                ))}
              </>
            )}
        </div>
      </div>   
  )
}

export default CartPage