import '../styles/ItemListContainer.css'
import ItemCount from './components/ItemCount'

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1 className='centrar'>{greeting}</h1>
      <ItemCount />
    </>
  )
}

export default ItemListContainer