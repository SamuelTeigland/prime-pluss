import './faq.css'

export default function Faq() {
    return (
        <div className='faq__container'>
            <div className='faq__header--container'>

            </div>
            <div className='faq__subcontainer'>
                <div className="faq__wrapper">
                    <h2 className="faq__subheader">Affordable monthly payments!</h2>
                    <p className="faq__paragraph">We will help you choose the best plan with a positive return on investment.</p>
                </div>
                <div className="faq__wrapper">
                    <h2 className="faq__subheader">No credit score programs</h2>
                    <p className="faq__paragraph">We offer energy efficiency programs that are based on your home equity and NOT on your credit score (on approved credit)</p>
                </div>
                <div className="faq__wrapper">
                    <h2 className="faq__subheader">Up to 12 months with 0% interest and no monthly payments*</h2>
                    <p className="faq__paragraph">Same as cash if paid off during the promotional period. Promotional period can vary between 6 months to 12 months depending on project amount (on approved credit).</p>
                </div>
            </div>
        </div>
    )
}