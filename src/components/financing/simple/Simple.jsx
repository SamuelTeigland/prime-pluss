import './simple.css'
import { Stock, CreditCard, Calendar } from '../../../assets/assets';

export default function Simple() {
    return (
        <div className='simple__container'>
            <div className='simple__header--container'>
                <h1 className="simple__header">Financing</h1>
                <p className="simple__top--subheader">Home improvement financing the way it should be. <span>Simple.</span></p>
            </div>
            <div className='simple__subcontainer'>
                <div className="simple__wrapper">
                    <div className='simple__svg--container'>
                        <Calendar />
                    </div>
                    <h2 className="simple__subheader">Affordable monthly payments!</h2>
                    <p className="simple__paragraph">We will help you choose the best plan with a positive return on investment.</p>
                </div>
                <div className="simple__wrapper">
                    <div className='simple__svg--container'>
                        <CreditCard />
                    </div>
                    <h2 className="simple__subheader">No credit score programs</h2>
                    <p className="simple__paragraph">We offer energy efficiency programs that are based on your home equity and NOT on your credit score (on approved credit)</p>
                </div>
                <div className="simple__wrapper">
                    <div className='simple__svg--container'>
                        <Stock />
                    </div>
                    <h2 className="simple__subheader">Up to 12 months with 0% interest and no monthly payments*</h2>
                    <p className="simple__paragraph">Same as cash if paid off during the promotional period. Promotional period can vary between 6 months to 12 months depending on project amount (on approved credit).</p>
                </div>
            </div>
        </div>
    )
}