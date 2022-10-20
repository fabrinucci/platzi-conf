import { MdOutlinePayment } from 'react-icons/md';
import '../styles/components/Buttons.css';

export const InfoPay = ({ handlePay }) => {

  return (
    <button 
      className='Btn-Second InfoNextButton'
      onClick={ handlePay }  
    >
      <p>Payment</p> 
      <MdOutlinePayment size={20}/>
    </button>
  )
}
