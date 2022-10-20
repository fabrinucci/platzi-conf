// import { useContext } from 'react';
// import { AppContext } from '../context';
import '../styles/components/Buttons.css';

export const ProductButton = ({ product, handleCart }) => {

  // const { addToCart } = useContext(AppContext);

  // const handleCart = item => {
  //   addToCart(item)
  // }

  return (
    <button 
      className="Btn-First Product-item-button"
      onClick={ () => handleCart(product) }
    >
      Shop
    </button>
  )
}
