import React from 'react'
import productos from '../productos.js'
import Item from './Item.jsx'
import '../styles/ItemList.css'

const ItemList = () => {
  return (
    <div className='container-itemList'>
      {
        productos.map((p) => {
          return (
            <div key={p.id}>
              <Item titulo={p.titulo} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList