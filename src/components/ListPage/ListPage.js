import React from 'react'
import './ListPage.scss'
import { menu } from '../../data'

const ListPage = () => {
  return (
    <div className="ListPage-wrapper">
      <div className='ListPage-title'>Desserts</div>
      <div className='ListPage-menuBox'>
        {menu.map(item => (
        <div className='ListPage-menuBox__card'>
          <img src={item.image} className='ListPage-menuBox__card_img'></img>
          <div className='ListPage-menuBox__card_textBlock'>
            <div>{item.category}</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default ListPage