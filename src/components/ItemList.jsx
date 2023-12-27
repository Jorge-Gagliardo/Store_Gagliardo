import React from 'react'
import Item from './Item.jsx'
import '../styles/ItemList.css'


const ItemList = ({ productosFiltrados }) => {


  return (
    <div className='container-itemList'>
      {
        productosFiltrados.map((p) => {
          return (
            <div key={p.id}>
              <Item
                titulo={p.titulo}
                id={p.id}
                desc={p.desc}
                precio={p.precio}
                categoria={p.categoria}
                stock={p.stock}
                imagen={p.imagen}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList