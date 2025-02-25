import './quote.css'
import { Link } from 'react-router-dom';

export default function Quote() {
    return (
        <div className='quote__container'>
           <div className='quote__container--wrapper'>
                <div className='quote__subcontainer'>
                        <h2 className='quote__header'>Have a quote from a competitor?</h2>
                        <p className='quote__paragraph'>Get a better price, experience, service, and value with <span>Prime Pluss</span>.</p>
                </div>
                <div className='quote__subcontainer'>
                        <Link to='/get-a-quote' className='quote__link'>
                            <button className='button__tertiary quote__button'>Get a FREE quote!</button>
                        </Link>
                </div>
           </div>
        </div>
    )
}