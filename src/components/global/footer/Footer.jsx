import './footer.css'
import { SecondaryLogo } from '../../../assets/assets'

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer__logo--container'>
                <img src="/images/PrimePlussLogo.png" alt="Prime Plus Logo" className="footer__image" />
                <div className='footer__info--container'>
                    <div className='footer__address--container'>
                        <h2>
                            Address
                        </h2>
                        <p>
                            674 Montgomery Woods Hockessin, DE. 19707
                        </p>
                    </div>
                    <div className='footer__phone--container'>
                        <h2>
                            Phone Number
                        </h2>
                        <p><span>DE#</span> (302) 241-0558</p>
                        <p><span>MD#</span> (410) 223-2665</p>
                    </div>
                    <div className='footer__licenses--container'>
                        <h2>
                            Licensure
                        </h2>
                        <p><span>Delaware General Contractor</span> Lic# 2024712887</p>
                        <p><span>New Castle CO. - Permit Endorsed GC</span> Lic# GC6533</p>
                        <p><span>City of Wilmington</span> Lic# 114221</p>
                        <p><span>BPI Inspector</span> Lic# 5070894</p>
                    </div>
                    <div className='footer__service--container'>
                        <h2>
                            Service Locations
                        </h2>
                        <p>
                            All of Delaware, Eastern Maryland, Southeastern Pennsylvania.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer__bottom--container'>
                <h2 className='footer__subheader'>Created with passion by <a target="_blank" rel="noopener noreferrer" href='https://websiteartificers.com'>Website Artificers</a> © 2025</h2>
            </div>
        </div>
    )
}