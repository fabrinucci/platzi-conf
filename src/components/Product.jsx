import { ProductButton } from '../buttons';

export const Product = ({ product, handleCart }) => {
  
  return (
    <article className='Products-item'>
      <div className='Products-item-info'>
        <h3>{ product.title }
          <span>$ { product.price }</span>
        </h3>
        <p>{ product.description }</p>
      </div>
      <figure>
        <img src={ product.image } alt={ product.title } />
      </figure>
      <ProductButton 
        product={ product }
        handleCart={ handleCart }
      />
    </article>
  )
}
