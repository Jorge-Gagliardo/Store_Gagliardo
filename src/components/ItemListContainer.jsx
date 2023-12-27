import '../styles/ItemListContainer.css'
import ItemList from './ItemList.jsx'

import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config.js'

import { CartContext } from '../context/CartContext'


const ItemListContainer = () => {

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
    <>
      <ItemList
        productosFiltrados = {productosFiltrados}
      />
    </>
  )
}

export default ItemListContainer