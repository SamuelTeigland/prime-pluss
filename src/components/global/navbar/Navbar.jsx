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
                    <a href='#'>
                        Why Prime Pluss?
                    </a>
                    <a href='/#contact'>
                        Contact Us
                    </a>
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
                <a href='#'>
                    Services
                </a>
                <a href='#'>
                    Why Prime Pluss?
                </a>
                <a href='/#contact'>
                    Contact Us
                </a>
                <a href='#'>
                    Blog
                </a>
            </div>
        </div>
    )
}