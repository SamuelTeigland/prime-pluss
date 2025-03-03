import './whyPrimePluss.css'
import { Link } from 'react-router-dom';

export default function WhyPrimePluss() {
    return (
        <div className='whyPrimePluss__container'>
            <h1 className='whyPrimePluss__header'>Why Work With Prime Pluss?</h1>
            <p className='whyPrimePluss__paragraph'>
                Protecting your family is our top priority while working on your home. We’ve recently stepped up our sanitation measures and now ensure each Prime Pluss team member wears full-body protective gear and equipment while inside your residence. We also safeguard your space with plastic containment curtains throughout all the parts of your home we cross in order to access your attic. 
            </p>
            <p className='whyPrimePluss__paragraph'>
                To receive a free quote and inspection for attic and crawl spaces services, call us at <span>DE# (302) 241-0558</span> or <span>MD# (410) 223-2665</span> or <Link to='/contact-us'>contact us</Link> online to schedule an at-home evaluation today.
            </p>
        </div>
    )
}