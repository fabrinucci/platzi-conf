import {RiCloseCircleLine} from 'react-icons/ri';
import { CheckoutButton } from '../buttons';
import '../styles/containers/Checkout.css';

export const Checkout = () => {
  return (
    <main className="Checkout">
      <section className="Checkout-content">
        <h3>Order List:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <RiCloseCircleLine title='delete item' size={20}/>
          </button>
        </div>
      </section>
      <aside className="Checkout-sidebar">
        <h3>Total Price: $10</h3>
        <CheckoutButton />
      </aside>
    </main>
  );
}