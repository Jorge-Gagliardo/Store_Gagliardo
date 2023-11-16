import React from 'react'
import productos from '../productos.js'
import Item from './Item.jsx'
import '../styles/ItemList.css'
import { useParams } from 'react-router-dom'

const ItemList = () => {
  const { categoriaId } = useParams()
  var productosFiltrados = []

  //*si categoriaId es undefined muestra todos los productos
  if(categoriaId) {
    productosFiltrados = productos.filter((producto) => producto.categoria === categoriaId)
  } else {
    productosFiltrados = productos
  }

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
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList