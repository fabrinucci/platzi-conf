import { Link } from 'react-router-dom';
import { MdOutlinePayment } from 'react-icons/md';
import '../styles/components/Buttons.css';

export const InfoPay = () => {
  return (
    <Link to='/checkout/payment' className='Btn-Second InfoNextButton'>
      <p>Payment</p> 
      <MdOutlinePayment />
    </Link>
  )
}
