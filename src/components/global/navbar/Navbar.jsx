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
                        Attic
                    </a>
                    <a href='#'>
                        Crawl Space
                    </a>
                    <a href='#'>
                        Other Services
                    </a>
                    <Link to="/about-us">
                        Our Work
                    </Link>
                    <a href='#'>
                        Financing
                    </a>
                    <Link to='/contact-us'>
                        Contact
                    </Link>
                    <a href='#'>
                        <button className='button__secondary navbar__button'>
                            Get a Quote
                        </button>
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
                    Attic
                </a>
                <a href='#' onClick={ () => { setVisible(!isVisible); } }>
                    Crawl Space
                </a>
                <a href='#' onClick={ () => { setVisible(!isVisible); } }>
                    Other Services
                </a>
                <Link to="/about-us" onClick={ () => { setVisible(!isVisible); } }>
                    Our Work
                </Link>
                <a href='#' onClick={ () => { setVisible(!isVisible); } }>
                    Financing
                </a>
                <Link to='/contact-us' onClick={ () => { setVisible(!isVisible); } }>
                    Contact
                </Link>
                <a id='navbar__special--link' href='#' onClick={ () => { setVisible(!isVisible); } }>
                    Get a Quote
                </a>
            </div>
        </div>
    )
}