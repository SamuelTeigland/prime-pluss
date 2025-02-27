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
                    <Link to='/attic-cleaning-near-me'>
                        Attic
                    </Link>
                    <Link to='/crawl-space-cleaning-near-me'>
                        Crawl Space
                    </Link>
                    <Link to='/other-services'>
                        Other Services
                    </Link>
                    <Link to="/about-us">
                        Our Work
                    </Link>
                    <Link to='/financing'>
                        Financing
                    </Link>
                    <Link to='/contact-us'>
                        Contact
                    </Link>
                    <Link to='/get-a-quote'>
                        <button className='button__secondary navbar__button'>
                            Get a Quote
                        </button>
                    </Link>
                    <div className='navbar__call--container'>
                        <h2 className='navbar__call--header'>Call now!</h2>
                        <p className='navbar__call--paragraph'>DE# (302) 241-0558</p>
                        <p className='navbar__call--paragraph'>MD# (410) 223-2665</p>
                    </div>
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
                <Link to='/attic-cleaning-near-me' onClick={ () => { setVisible(!isVisible); } }>
                    Attic
                </Link>
                <Link to='/crawl-space-cleaning-near-me' onClick={ () => { setVisible(!isVisible); } }>
                    Crawl Space
                </Link>
                <Link to='/other-services' onClick={ () => { setVisible(!isVisible); } }>
                    Other Services
                </Link>
                <Link to="/about-us" onClick={ () => { setVisible(!isVisible); } }>
                    Our Work
                </Link>
                <Link to='/financing' onClick={ () => { setVisible(!isVisible); } }>
                    Financing
                </Link>
                <Link to='/contact-us' onClick={ () => { setVisible(!isVisible); } }>
                    Contact
                </Link>
                <Link id='navbar__special--link' to='/get-a-quote' onClick={ () => { setVisible(!isVisible); } }>
                    Get a Quote
                </Link>
                <div className='hamburger__call--container'>
                    <h2 className='hamburger__call--header'>Call now!</h2>
                    <p className='hamburger__call--paragraph'>DE# (302) 241-0558</p>
                        <p className='hamburger__call--paragraph'>MD# (410) 223-2665</p>
                </div>
            </div>
        </div>
    )
}