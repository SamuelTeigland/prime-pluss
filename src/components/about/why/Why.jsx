import './why.css'

export default function Why() {
    return (
        <div className='why__container'>
            <div className="why__subcontainer">
                <h2 className="why__header">
                    Prime Pluss is the <span>industry leader</span> in insulation.
                </h2>
                <p className="why__paragraph">
                    At Prime Pluss, we believe the foundation of a successful home improvement project is choosing the right partner. With decades of home service experience, we’ve built strong, lasting relationships with our clients, ensuring their insulation projects are smooth and stress-free.
                </p>

                <p className="why__paragraph">
                    Our commitment to excellence in project management, combined with our dedication to integrity and top-notch customer service, sets us apart.
                </p>

                <p className="why__paragraph">
                    We treat every home we work on with the utmost care—offering the expertise of a nationwide company, but with the personal touch and attention to detail you'd expect from a family-owned business.
                </p>
            </div>
            <div className="why__subcontainer" id='why__image--container'>
                <img src="/images/blown-insulation.png" alt="Blown Insulation" className="why__image" />
                <img src="/images/houseDiagram.jpg" alt="House Diagram" className="why__image" />
                <img src="/images/batInsulation.jpg" alt="Bat Insulation" className="why__image" />
                <img src="/images/mouse1.png" alt="Mouse Infestation" className="why__image" />
            </div>
        </div>

    )
}