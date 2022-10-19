import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

export const Header = () => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h1 className='Header-title'>PlatziConf Merch</h1>
      </Link>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <BiShoppingBag title='Checkout' size='30px'/>
        </Link>
      </div>
    </header>
  );
}