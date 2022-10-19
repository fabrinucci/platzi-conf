import { PaymentButton } from '../buttons';
import '../styles/containers/Payment.css';

export const Payment = () => {
  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Order Summary</h3>
        <PaymentButton />
      </section>
      <aside className='Payment-sidebar'>

      </aside>
    </main>
  )
}
