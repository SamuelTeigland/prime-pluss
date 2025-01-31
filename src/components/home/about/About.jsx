import './about.css'
import { License, Support, Construction, Energy } from '../../../assets/assets';

export default function About() {
    return (
        <div className='about__container'>
            <div className='about__title--container'>
                <div className='about__title--subcontainer'>
                    <h2 className='about__header'>About the <span>Prime Pluss</span> Experience</h2>
                </div>
                <div className='about__title--subcontainer'>
                    <p className='about__paragraph'>
                        <span>We've been in the insulation and energy business for decades.</span> We install only the industry’s best products and every specialist on our team has the training and expertise to provide you with exceptional service every time.
                    </p>
                    <a href="#" className='about__link'>
                        <button className='button__primary about__button'>Why Prime Pluss?</button>
                    </a>
                </div>
            </div>
            <div className='about__subcontainer--wrapper'>
                <div className='about__subcontainer'>
                    <div className='about__svg--container'>
                        <License />
                    </div>
                    <h3 className='about__subcontainer--header'>Licensed and Insured</h3>
                    <p className='about__subcontainer--paragraph'>
                        Whether you require an on-site evaluation or you’re in need of free, over the phone advice, contact us today and one of our licensed team members will be able to help. Schedule a <a href="#">free consultation</a> today!
                    </p>
                </div>
                <div className='about__subcontainer'>
                    <div className='about__svg--container'>
                        <Support />
                    </div>
                    <h3 className='about__subcontainer--header'>Customer First</h3>
                    <p className='about__subcontainer--paragraph'>
                        Our customers recognize that we focus on what matters the most in a home in order to save money on energy bills, improve the indoor air quality, and raise the property value.
                    </p>
                </div>
                <div className='about__subcontainer'>
                    <div className='about__svg--container'>
                        <Construction />
                    </div>
                    <h3 className='about__subcontainer--header'>Decades of Experience</h3>
                    <p className='about__subcontainer--paragraph'>
                        Our staff has over a decade of experience providing services to homeowners across Maryland, Delaware, and Pennsylvania. No matter the home, we can get the job done!
                    </p>
                </div>
                <div className='about__subcontainer'>
                    <div className='about__svg--container'>
                        <Energy />
                    </div>
                    <h3 className='about__subcontainer--header'>Energy Efficient</h3>
                    <p className='about__subcontainer--paragraph'>
                        Did you know 90% of homes in the US are under-insulated according to the North American Insulation Manufacturers Association? Proper insulation plays an important role in maintaining the health of your home and family as well as being energy-efficient.
                    </p>
                </div>
            </div>
        </div>
    )
}