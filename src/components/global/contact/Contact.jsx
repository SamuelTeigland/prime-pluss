import './contact.css'

export default function Contact() {
    return (
        <div className='contact__container'>
            <div className='contact__header--container'>
                <h2 className='contact__header'>Contact Us!</h2>
                <p className='contact__paragraph'>
                    Fill out the form below OR call us now to schedule a FREE consultation
                </p>
                <h3 className='contact__subheader'>
                    CALL NOW! <span>(302) 275-4692</span>
                </h3>
            </div>

            {/* start of form */}

            <div className='contact__form--container'>
                <form className='contact__form' action="https://formsubmit.co/395c919341c62f325f27afba96e5ab17" method="POST">
                    <input type="hidden" name="_subject" value="SUBMISSION: Contact Form"></input>
                    <input type="hidden" name="_next" value="https://primepluss.com/thanks"></input>

                    {/* Full Name */}
                    <div className='contact__form--wrapper'>
                        <label
                            htmlFor='name'
                            className='contact__label'
                        >
                            Full Name
                        </label>
                        <input
                            id='name'
                            name='name'
                            required
                            type='text'
                            className='contact__input'
                            placeholder='John Doe'
                        />
                    </div>

                    {/* Phone and Email */}
                    <div className='contact__form--subcontainer'>
                        <div className='contact__form--wrapper'>
                            <label
                                htmlFor='email'
                                className='contact__label'
                            >
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                required
                                type='email'
                                className='contact__input'
                                placeholder='example@primepluss.com'
                            />
                        </div>

                        <div className='contact__form--wrapper'>
                            <label
                                htmlFor='phone'
                                className='contact__label'
                            >
                                Phone
                            </label>
                            <input
                                id='phone'
                                name='phone'
                                required
                                type='tel'
                                className='contact__input'
                                placeholder='(123) 456-7891'
                            />
                        </div>
                    </div>

                    {/* Zip Code */}
                    <div className='contact__form--wrapper'>
                        <label
                            htmlFor='zip-code'
                            className='contact__label'
                        >
                            Zip Code
                        </label>
                        <input
                            id='zip-code'
                            name='zip-code'
                            required
                            type='number'
                            className='contact__input'
                            placeholder='21921'
                        />
                    </div>

                    {/* Services */}
                    <div className='contact__form--select'>
                        <label
                            htmlFor='service'
                            className='contact__label'
                        >
                            Service
                        </label>
                        <select
                            id='service'
                            name='service'
                            required
                            className='contact__select'
                        >
                            <option value="insulation">Insulation</option>
                        </select>
                    </div>

                    {/* Notes */}
                    <div className='contact__form--wrapper'>
                        <label
                            htmlFor='note'
                            className='contact__label'
                        >
                            Notes
                        </label>
                        <textarea
                            id='note'
                            name='note'
                            required
                            className='contact__textarea'
                            placeholder='Optional: Additional information or requirements'
                        />
                    </div>

                    {/* Submit */}
                    <div className='contact__form--select'>
                        <button
                            type='submit'
                            className='button__tertiary form__button'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}