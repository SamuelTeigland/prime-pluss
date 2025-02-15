import './energy.css'

export default function Energy() {
    return (
        <div className='energy__container'>
            <div className="energy__subcontainer">
                <h3 className="energy__header">We focus on what matters - making your home <span>healthier, comfortable & energy-efficient</span></h3>
            </div>
            <div className="energy__subcontainer">
                <img src="/images/energy-efficency.png" alt="Energy Efficient" className="energy__image" />
            </div>
        </div>
    )
}