import './hero.css'

export default function Hero() {
    return (
        <div className='hero__container'>
            <h2 className='hero__header'>
                The insulation and energy experts.
            </h2>
            <p className='hero__paragraph'>Proudly serving Maryland, Delaware, and Pennsylvania.</p>
            <div className='hero__button--container'>
                <a className='hero__link'
                target="_blank" rel="noopener noreferrer" href='mailto:Info@PrimePluss.com'>
                    <button className='button__secondary hero__button'>Get a quote!</button>
                </a>
            </div>
        </div>
    )
}