import { Outlet } from 'react-router-dom';
import { Header, Footer } from './';

import '../styles/components/Layout.css';

export const Layout = () => {
  return (
    <div className='Main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}