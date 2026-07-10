import React from 'react'
import './ListPage.scss'
import { menu } from '../../data'
import cart from '../../img/icon-add-to-cart.svg'

const ListPage = ({ setCountCart, setCart, setTotalPrice }) => {
  const addToCart = (item) => {
    setCart(prev => [...prev, item])
    setCountCart(prev => prev + 1)
    setTotalPrice(prev => prev + Number(item.price))
  }

  return (
    <div className="ListPage-wrapper">
      <div className='ListPage-title'>Desserts</div>
      <div className='ListPage-menuBox'>
        {menu.map(item => (
        <div className='ListPage-menuBox__card'>
          <img src={item.image} className='ListPage-menuBox__card_img'></img>
          <div className='ListPage-menuBox__card_addToCartBox' onClick={() => addToCart(item)}>
            <div className='ListPage-menuBox__card_addToCartBox_button'>
              <img className='ListPage-menuBox__card_addToCartBox_button_img' src={cart}/>
              <div>Add to Cart</div>
            </div>
          </div>
          <div className='ListPage-menuBox__card_textBlock'>
            <div>{item.category}</div>
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default ListPage