import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import '../styles/components/Buttons.css';

export const InfoBack = () => {
  return (
    <Link to='/checkout' className='Btn-Second InfoBackButton'>
      <BiArrowBack /> 
      <p>Go back</p>
    </Link>
  )
}
