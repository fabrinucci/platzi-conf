import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components';
import { 
  Checkout, 
  Home, 
  Information, 
  NotFound, 
  Payment, 
  Success 
} from '../containers';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/information' element={<Information />} />
          <Route path='/checkout/payment' element={<Payment />} />
          <Route path='/checkout/success' element={<Success />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
