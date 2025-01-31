import './quote.css'

export default function Quote() {
    return (
        <div className='quote__container'>
           <div className='quote__container--wrapper'>
                <div className='quote__subcontainer'>
                        <h2 className='quote__header'>Have a quote from a competitor?</h2>
                        <p className='quote__paragraph'>Get a better price, experience, service, and value with <span>Prime Pluss</span>.</p>
                </div>
                <div className='quote__subcontainer'>
                        <a href='/#' className='quote__link'>
                            <button className='button__tertiary quote__button'>Get a FREE quote!</button>
                        </a>
                </div>
           </div>
        </div>
    )
}