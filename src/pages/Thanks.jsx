import { Link } from 'react-router-dom';
import './styles/thanks.css';

function Thanks() {

  return (
    <div className='thanks__container'>
      <h1 className='thanks__header'>Thank you for reaching out!</h1>
      <p className='thanks__paragraph'>We will be in touch shortly.</p>
      <Link to="/">
        <button className='button__primary thanks__button'>Return home ↩</button>
      </ Link>
    </div>
  )
}

export default Thanks