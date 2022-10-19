import '../styles/components/Products.css';
import { Product } from './';

export const Products = ({ products }) => {
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
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}
