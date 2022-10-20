import { RiCloseCircleLine } from 'react-icons/ri'

export const CheckoutProduct = ({ product, handleRemove }) => {
  return (
    <div key={ product.id } className='Checkout-item'>
      <div className='Checkout-element'>
        <h4>{ product.title }</h4>
        <span>$ { product.price }</span>
      </div>
      <button 
        type='button'
        onClick={ () => handleRemove(product) }
      >
        <RiCloseCircleLine title='delete item' size={20}/>
      </button>
    </div>
  )
}
