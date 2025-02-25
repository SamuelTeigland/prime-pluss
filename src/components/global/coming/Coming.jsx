import './coming.css'
import { Link } from 'react-router-dom';

export default function Coming() {
    return (
        <div className='coming__container'>
            <h2 className='coming__subheader'>Sorry!</h2>
            <h1 className='coming__header'>This page has not been completed!</h1>
            <p className='coming__paragraph'>Check back again soon...</p>
            <Link to="/" className='coming__link'>
                <button className='coming__button button__secondary'>Return Home</button>
            </Link>
        </div>
    )
}