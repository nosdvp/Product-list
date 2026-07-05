import React from 'react'
import './CartPage.scss'
import cake from '../../img/illustration-empty-cart.svg'

const CartPage = ({countCart}) => {
  return (
      <div className='CartPage-block'>
        <div className='CartPage-block__title'>Your Cart ({countCart})</div>
        <div className='CartPage-block__blockInfo'>
          <img className='CartPage-block__blockInfo_img' src={cake}/>
          <div className='CartPage-block__blockInfo_text'>Your added items will appear here</div>
        </div> 
      </div>   
  )
}

export default CartPage