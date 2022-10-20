import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoBack, InfoPay } from '../buttons';
import { AppContext } from '../context';

import '../styles/containers/Information.css';

export const Information = () => {

  const navigate = useNavigate();

  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);

  const { cart } = state;

  const handlePay = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name':    formData.get('name'),
      'email':   formData.get('email'),
      'address': formData.get('address'),
      'city':    formData.get('city'),
      'country': formData.get('country'),
      'state':   formData.get('state'),
      'cp':      formData.get('cp'),
      'phone':   formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <main className='Information'>
      <section className='Information-content'>
        <div className='Information-head'>
          <h2>Contact Info:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <label>Full Name</label>
            <input type='text' name='name' />

            <label>Email</label>
            <input type='email' name='email' />

            <label>Address</label>
            <input type='text' name='address' />

            <label>City</label>
            <input type='text' name='city' />

            <label>Country</label>
            <input type='text' name='country' />

            <label>State</label>
            <input type='text' name='state' />

            <label>Postal Code</label>
            <input type='text' name='cp' />

            <label>Phone</label>
            <input type='tel' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <InfoBack />
          <InfoPay handlePay={ handlePay }/>
        </div>
      </section>
      <aside className='Information-sidebar'>
        <h3>My order:</h3>
        { cart.map( item => (
          <div key={ item.id } className='Information-item'>
            <div className='Information-element'>
              <h5>{ item.title }</h5>
              <span>$ { item.price }</span>
            </div>
          </div>
        ))}
      </aside>
    </main>
  )
}
