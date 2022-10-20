import { useContext } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import '../styles/components/Header.css';

export const Header = () => {
  const { state: { cart } } = useContext(AppContext);

  return (
    <header className='Header'>
      <Link to='/'>
        <h1 className='Header-title'>PlatziConf Merch</h1>
      </Link>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <BiShoppingBag title='Checkout' size='30px'/>
        </Link>
        { 
          cart.length > 0 && (
            <div className='Header-alert'>
              {cart.length}
            </div>
          )}
      </div>
    </header>
  );
}