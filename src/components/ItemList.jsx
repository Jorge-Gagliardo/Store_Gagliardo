import React from 'react'
import Item from './Item.jsx'
import '../styles/ItemList.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config.js'

import { CartContext } from '../context/CartContext'

const ItemList = () => {
  const { categoriaId } = useParams()
  const [productos, setProductos] = useState([])
  const { setProds } = useContext(CartContext)
  var productosFiltrados = []

  useEffect(() => {
    const productosRef = collection(db, 'productos')
    getDocs(productosRef).then((res) => {
      const productosData = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setProductos(productosData);
      setProds(productosData);
    });
  }, [categoriaId])


  //*si categoriaId es undefined muestra todos los productos
  if (categoriaId) {
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