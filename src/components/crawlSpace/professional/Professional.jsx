import { Link } from 'react-router-dom';
import './professional.css';

export default function ProfessionalTwo() {
    return(
        <div className='professional__container'>
            <h2 className="professional__header">Our Top Crawl Space Services</h2>
            <div className='professional__body'>
                <div className='professional__body--container'>
                    <img src="/images/crawl-space-inspection.png" alt="Cleaning out crawl space" className="professional__image" />
                    <h3 className="professional__subheader">Crawl Space Cleaning Service</h3>
                    <p className="professional__paragraph">
                        We remove mold, mildew, and other containments from your crawl space to preserve the quality of your home's air.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/blown-insulation.png" alt="Crawl space insulation removal" className="professional__image" />
                    <h3 className="professional__subheader">Crawl Space Insulation Removal</h3>
                    <p className="professional__paragraph">
                        On top of decontaminating your crawl space we will also remove any old insulation & air seal your crawl space.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/batInsulation.jpg" alt="Crawl space insulation installation" className="professional__image" />
                    <h3 className="professional__subheader">Crawl Space Insulation Installation</h3>
                    <p className="professional__paragraph">
                        Our installers will install your new crawl space insulation on the same day of cleaning & removal of the old insulation.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/crawl-space-vapor-barrier.jpg" alt="Rodent issues" className="professional__image" />
                    <h3 className="professional__subheader">Crawl Space Vapor Barrier</h3>
                    <p className="professional__paragraph">
                        Keep your crawl space free of rot, mildew, & mold with our one day installation service plus you save on energy bills.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/crawl-space-inspection.jpg" alt="Crawl Space Inspection" className="professional__image" />
                    <h3 className="professional__subheader">Crawl Space Sanitation</h3>
                    <p className="professional__paragraph">
                        Decontamination of rodent wastes, mildew, mold, and other undesirable substances within a single treatment.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
                <div className='professional__body--container'>
                    <img src="/images/mouse1.png" alt="Mouse in crawl space" className="professional__image" />
                    <h3 className="professional__subheader">Crawl Space Rodent Proofing</h3>
                    <p className="professional__paragraph">
                        Permanently seal all entry points within your crawl space preventing any rodents leaving wastes in your home.
                    </p>
                    <Link to="/contact-us" className="professional__link">
                        <button className="button__primary professional__button">Book Now!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}