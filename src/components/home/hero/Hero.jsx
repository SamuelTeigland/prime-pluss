import './hero.css'
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className='hero__container'>
            <h2 className='hero__header'>
                The insulation and energy experts.
            </h2>
            <p className='hero__paragraph'>Proudly serving Delaware, Maryland, and Pennsylvania.</p>
            <div className='hero__button--container'>
                <Link className='hero__link'
                to='/get-a-quote'>
                    <button className='button__secondary hero__button'>Get a quote!</button>
                </Link>
            </div>
        </div>
    )
}