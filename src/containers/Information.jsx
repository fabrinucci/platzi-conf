import { MdOutlinePayment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { InfoBack, InfoPay } from '../buttons';
import '../styles/containers/Information.css';

export const Information = () => {
  return (
    <main className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h2>Contact Info:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <label>Full Name</label>
            <input type="text" name="name" />

            <label>Email</label>
            <input type="email" name="email" />

            <label>Address</label>
            <input type="text" name="address" />

            <label>City</label>
            <input type="text" name="city" />

            <label>Country</label>
            <input type="text" name="country" />

            <label>State</label>
            <input type="text" name="state" />

            <label>Postal Code</label>
            <input type="text" name="cp" />

            <label>Phone</label>
            <input type="tel" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <InfoBack />
          <InfoPay />
        </div>
      </section>
      <aside className="Information-sidebar">
        <h3>My order:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </aside>
    </main>
  )
}
