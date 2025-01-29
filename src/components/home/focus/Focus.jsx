import './focus.css';
import { Check } from '../../.././assets/assets';

export default function Focus() {
    return (
        <div className="focus__container">
            <h2 className='focus__header'>We focus on what <span>matters.</span></h2>
            <div className='focus__subcontainer--wrapper'>
                <div className='focus__subcontainer'>
                    <Check />
                    <h3 className='focus__subheader'>Comfort</h3>
                    <p className='focus__paragraph'>
                        Our mission with every project that we do is to enhance the comfort of our customers. Whether insulating your attic or making sure it is rodent-proof, our products and services are aimed at helping you and your family enjoy the comfort of your home to the fullest extent.
                    </p>
                </div>
                <div className='focus__subcontainer'>
                    <Check />
                    <h3 className='focus__subheader'>Safey and Health</h3>
                    <p className='focus__paragraph'>
                        All of our services are designed to improve the air quality of your home by addressing moisture related issues, potential hazards, VOC's (volatile organic compounds) and more.
                    </p>
                </div>
                <div className='focus__subcontainer'>
                    <Check />
                    <h3 className='focus__subheader'>Energy Efficiency</h3>
                    <p className='focus__paragraph'>
                        We strive to eliminate energy waste in all that we do. All of our projects are tailored to lower your household costs and raise your property value while also protecting the environment by reducing the energy your home requires.
                    </p>
                </div>
            </div>
        </div>
    )
}