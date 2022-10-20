import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutButton } from '../buttons';
import { CartEmpty, CheckoutProduct } from '../components';
import { AppContext } from '../context';

import '../styles/containers/Checkout.css';

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  }

  const handleSubTotal = () => {
    const reducer = (accumalator, currentValue) => {
      return accumalator + currentValue.price
    }
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  if( cart.length > 0 ) return (
    <main className='Checkout'>
      <section className='Checkout-content'>
        <h3>Order List:</h3>
        { cart.map( product => (
          <CheckoutProduct 
            key={ product.id } 
            product={ product }
            handleRemove={ handleRemove }  
          />
        ))}
      </section>
      <aside className='Checkout-sidebar'>
        <h3>Total Price: $ {handleSubTotal()}</h3>
        <Link to='information'>
          <CheckoutButton />
        </Link>
      </aside>
    </main>
  )

  return <CartEmpty />;
}