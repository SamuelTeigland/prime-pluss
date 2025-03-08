import './energy.css'

export default function Energy() {
    return (
        <div className='energy__container'>
            <div className="energy__subcontainer">
                <h3 className="energy__header">What does your <span>home energy report card</span> say?</h3>
            </div>
            <div className="energy__subcontainer">
                <img src="/images/energy-efficient.png" alt="Energy Efficient" className="energy__image" />
            </div>
        </div>
    )
}