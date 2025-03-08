import './crawlSpaceServices.css'
import { Link } from 'react-router-dom';

export default function CrawlSpaceServices() {
    return (
        <div className='crawlSpaceServices__container'>
        <div className='crawlSpaceServices__subcontainer'>
            <h2 className='crawlSpaceServices__header'>Professional <span>Crawl Space Cleaning</span> Services</h2>
            <div className='crawlSpaceServices__subcontainer--paragraph'>
                <p className="crawlSpaceServices__paragraph">✓ Prevents Odors, Mold, and More</p>
                <p className="crawlSpaceServices__paragraph">✓ Protect Your Property Value</p>
                <p className="crawlSpaceServices__paragraph">✓ Keeps Rodents and Critters Out</p>
                <p className="crawlSpaceServices__paragraph">✓ Reduces Health Risks</p>
            </div>
        </div>
        <div className='crawlSpaceServices__subcontainer'>
            <div className='crawlSpaceServices__subcontainer--buttons'>
                <img src="/images/crawl-space-2.png" alt="" className="crawlSpaceServices__image" />
                <Link to='/contact-us'>
                    <button className='crawlSpaceServices__button button__secondary'>Get a Quote!</button>
                </Link>
                <Link to='/about-us'>
                    <button className='crawlSpaceServices__button button__primary'>Our Work</button>
                </Link>
            </div>
        </div>
    </div>
    )
}