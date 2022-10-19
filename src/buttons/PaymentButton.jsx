import { RiPaypalLine } from 'react-icons/ri';
import '../styles/components/Buttons.css';


export const PaymentButton = () => {
  return (
    <button className='Btn-Second Payment-button'>
      <p>Paypal</p> 
      <RiPaypalLine size={20}/>
    </button>
  )
}
