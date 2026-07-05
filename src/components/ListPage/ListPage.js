import React from 'react'
import './ListPage.scss'
import { menu } from '../../data'

const ListPage = () => {
  return (
    <div className="ListPage-test">
      {menu.map(item => (
        <div className="ListPage-card" key={item.id}>
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  )
}

export default ListPage