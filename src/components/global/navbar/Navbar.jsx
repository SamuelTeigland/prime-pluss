import './navbar.css'
import { MainLogo, Hamburger } from '../../.././assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [ isVisible, setVisible ] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <a href='/' className='navbar__logo--container'>
                    <MainLogo />
                </a>
                <div className='navbar__link--container'>
                    <a href='#'>
                        Services
                    </a>
                    <Link to="/about-us">
                        Why Prime Pluss?
                    </Link>
                    <Link to='/contact-us'>
                        Contact Us
                    </Link>
                    <a href="#">
                        Blog
                    </a>
                    <div className='hamburger__container' onClick={
                        () => {
                            setVisible(!isVisible);
                        }
                    }>
                        <Hamburger />
                    </div>
                </div>
            </div>
            <div className={ isVisible === true ? 'hamburger__link--container shown__menu' : 'hamburger__link--container hidden__menu' }>
                <a href='#' onClick={ () => { setVisible(!isVisible); } }>
                    Services
                </a>
                <Link to="/about-us" onClick={ () => { setVisible(!isVisible); } }>
                    Why Prime Pluss?
                </Link>
                <Link to='/contact-us' onClick={ () => { setVisible(!isVisible); } }>
                    Contact Us
                </Link>
                <a href='#' onClick={ () => { setVisible(!isVisible); } }>
                    Blog
                </a>
            </div>
        </div>
    )
}