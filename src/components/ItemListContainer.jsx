import '../styles/ItemListContainer.css'
import ItemCount from '../components/ItemCount'
import ItemList from './ItemList.jsx'

const ItemListContainer = () => {
  return (
    <>
      <ItemList/>
      <ItemCount />
    </>
  )
}

export default ItemListContainer