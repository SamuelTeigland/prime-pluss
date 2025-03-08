import './services.css'

export default function Services() {
    return (
        <div className='services__container'>
            <div className='services__header--container'>
                <h1>Other Services</h1>
            </div>
            <div className='services__subcontainer'>

                <div className='services__subcontainer--wrapper'>
                    <div className='services__image--subcontainer'>
                        <img src="/images/Commercial-Disinfecting.jpg" alt="" className="services__images" />
                    </div>
                    <div className='services__text--subcontainer'>
                        <h2 className='services__subheader'>
                            Residential Disinfecting
                        </h2>
                        <p className='services__paragraph'>
                            Prime Pluss specializes in disinfection and sanitation for commercial and residential properties. Our mission is to make sure your home or facility is free of bacteria, mold, viruses, mildew and odor. Our certified team of expert cleaners works strictly with the most state-of-the-art electrostatic foggers and automizers, making the process the most effective at sterilizing, cleaning, and disinfecting surfaces and equipment. All of the products we use are EPA-approved and are recommended by the center for disease control (CDC) to ensure both the health of your loved ones and the environment are a top priority.
                        </p>
                    </div>
                </div>

                <div className='services__subcontainer--wrapper'>
                    <div className='services__image--subcontainer'>
                        <img src="/images/gutters.png" alt="" className="services__images" />
                    </div>
                    <div className='services__text--subcontainer'>
                        <h2 className='services__subheader'>
                            Gutter Cleaning
                        </h2>
                        <p className='services__paragraph'>
                            When it comes to your list of home improvement projects, a cleaning your gutter can be one of the most challenging tasks to complete yourself. A professionally cleaned gutter can protect your home from water damge. You can’t put it off for long, and no homeowner wants to deal with water damage. Prime Pluss offers residential gutter cleaning that will get rid of any build-up, and protect your house.
                        </p>
                    </div>
                </div>

                <div className='services__subcontainer--wrapper'>
                    <div className='services__image--subcontainer'>
                        <img src="/images/Window-Replacement.jpg" alt="" className="services__images" />
                    </div>
                    <div className='services__text--subcontainer'>
                        <h2 className='services__subheader'>
                            Window Replacement
                        </h2>
                        <p className='services__paragraph'>
                            The Prime Pluss team can help you get the best possible performance out of your windows. We professionally install windows so they last longer than a DIY job and your home is more energy-efficient. If your windows are old or were not properly installed, they are probably allowing precious heat or cool air to escape. Call the certified energy experts at Prime Pluss to explore whether our window replacement services are a wise choice for your residence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}