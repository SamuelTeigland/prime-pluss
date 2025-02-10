import './call.css'

export default function Call() {
    return (
        <div className='call__container'>
            <div className='call__subcontainer'>
                <div>
                    <h2 className='call__header'>Call now!</h2>
                    <p className='call__number'>(302) 275-4692</p>
                </div>
                <div>
                    <h2 className='call__servicing--header'>Servicing:</h2>
                    <p className=' call__servicing--number'>All of Delaware, Eastern Maryland, Southeastern Pennsylvania.</p>
                </div>
            </div>
        </div>
    )
}