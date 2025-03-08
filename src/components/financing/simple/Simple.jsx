import './simple.css'
import { CreditCard } from '../../../assets/assets';

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
                        <CreditCard />
                    </div>
                    <h2 className="simple__subheader">Energize Delaware Program!</h2>
                    <p className="simple__paragraph">With a 5.9% rate available!</p>
                </div>
            </div>
        </div>
    )
}