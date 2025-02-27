import './call.css';
import { Link } from 'react-router-dom';

export default function Call() {
    return (
        <div className='call__container'>
            <div className='call__subcontainer'>
                <div className='call__header--container'>
                    <h2 className='call__header'>Call now for a faster response!</h2>
                </div>
                <div className='call__paragraph--container'>
                    <p className='call__paragraph'><span>DE#</span> (302) 241-0558</p>
                    <p className='call__paragraph'><span>MD#</span> (410) 223-2665</p>
                </div>
                <Link to="/contact-us" className='call__link'>
                    <button className='call__button button__tertiary'>Contact Us!</button>
                </Link>
            </div>
        </div>
    )
}