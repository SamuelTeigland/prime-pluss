import './atticServices.css'
import { Link } from 'react-router-dom';

export default function AtticServices() {
    return (
        <div className='atticServices__container'>
            <div className='atticServices__subcontainer'>
                <h2 className='atticServices__header'>Professional <span>Attic Insulation</span> Services</h2>
                <div className='atticServices__subcontainer--paragraph'>
                    <p className="atticServices__paragraph">✓ Save money on energy bills</p>
                    <p className="atticServices__paragraph">✓ Keep rodents out for good</p>
                    <p className="atticServices__paragraph">✓ Improve your homes air quality</p>
                    <p className="atticServices__paragraph">✓ Become energy-efficient</p>
                </div>
            </div>
            <div className='atticServices__subcontainer'>
                <div className='atticServices__subcontainer--buttons'>
                    <img src="/images/blown-insulation.png" alt="" className="atticServices__image" />
                    <Link to='/contact-us'>
                        <button className='atticServices__button button__secondary'>Get a Quote!</button>
                    </Link>
                    <Link to='/about-us'>
                        <button className='atticServices__button button__primary'>Our Work</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}