import './hero.css'

export default function Hero() {
    return (
        <div className='hero__container'>
            <h2 className='hero__header'>
                Prime Pluss Services Inc.
            </h2>
            <p className='hero__paragraph'>More information coming soon...</p>
            <div className='hero__button--container'>
                <a className='hero__link'
                target="_blank" rel="noopener noreferrer" href='mailto:Info@PrimePluss.com'>
                    <button className='button__primary hero__button'>Contact Us</button>
                </a>
            </div>
        </div>
    )
}