import { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/components/Products.css';
import { Product } from './';

export const Products = () => {

  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  
  const handleCart = product => {
    addToCart(product);
  }

  return (
    <main className='Products'>
      <section className="Products-content">
        <h2>Our Products</h2>
        <div className='Products-items'>
          {
            products.map( product => (
              <Product 
                key={ product.id } 
                product={ product }
                handleCart={ handleCart }
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}
