import './professional.css';
import { Link } from 'react-router-dom';

export default function Professional() {
    return (
        <div className='professional__container'>
            <h2 className="professional__header">Our Top Attic Services</h2>
            <div className='professional__body'>
                <div className='professional__body--container'>
                    <img src="/images/attic-cleaning.png" alt="Cleaning out attic" className="professional__image" />
                    <h3 className="professional__subheader">Attic Cleaning Service</h3>
                    <p className="professional__paragraph">
                        Get rid of rodent waste and bad germs, along with any odors or contaminants while properly sanitizing your attic space.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/attic-removal.png" alt="Attic insulation removal" className="professional__image" />
                    <h3 className="professional__subheader">Attic Insulation Removal</h3>
                    <p className="professional__paragraph">
                        Properly decontaminate your attic space while removing rodent waste & bad germs in your attic space.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/batInsulation.jpg" alt="Attic insulation installation" className="professional__image" />
                    <h3 className="professional__subheader">Attic Insulation Installation</h3>
                    <p className="professional__paragraph">
                        Improve your indoor air quality, & increase your property value
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/mouse2.jpg" alt="Rodent issues" className="professional__image" />
                    <h3 className="professional__subheader">Attic Rodent Proofing</h3>
                    <p className="professional__paragraph">
                        Protect your home from health risks, bad odors, germs, & improved your air quality by sealing all entry points in your attic space.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/air-sealing-services.jpg" alt="Air sealing" className="professional__image" />
                    <h3 className="professional__subheader">Attic Air Sealing</h3>
                    <p className="professional__paragraph">
                        Stop significant air leaks that cost you larger than necessary energy bills & help maintain air temperature throughout your home.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/quietcool-fan.jpg" alt="Quiet cool fan" className="professional__image" />
                    <h3 className="professional__subheader">QuietCool House Fan Installation</h3>
                    <p className="professional__paragraph">
                        Recycle your home's air quality with the quietest house fan on the market while saving 50% or more on energy bills.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}