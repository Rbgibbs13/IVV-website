import './style.css';

const Data = () => {
    return (
        <div className="data-blurb">
            <div className="data-element">
                <h2 className="data-title">~100,000 Zambians</h2>
                <p className="data-text">Need eye-care and <span className='data-span'>10,000</span> more go blind annually.</p>
            </div>
            <div className="data-element">
                <h2 className="data-title">700 Patients</h2>
                <p className="data-text">Are treated every trip.</p>
            </div>
            <div className="data-element">
                <h2 className="data-title">1$ per day</h2>
                <p className="data-text">The average income of our patients in Zambia.</p>
            </div>
        </div>
    )
}

export default Data;