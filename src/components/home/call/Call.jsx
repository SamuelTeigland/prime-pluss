import './call.css';
import { Link } from 'react-router-dom';

export default function Call() {
    return (
        <div className='call__container'>
            <div className='call__subcontainer'>
                <div className='call__header--container'>
                    <h2 className='call__header'>Call now for a faster response! <span>(302) 275-4692</span></h2>
                </div>
                <Link to="/contact-us">
                    <button className='call__button button__tertiary'>Contact Us!</button>
                </Link>
            </div>
        </div>
    )
}