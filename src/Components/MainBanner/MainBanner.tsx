import React from 'react';
import './MainBanner.css';

const MainBanner: React.FC = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    return (
        <div className="main-banner col-md-12 col-sm-3">
            <div className="row container" style={{ marginLeft: 25 }}>
                <div className="col-md-6 flex-column d-flex">
                    <span className="date">{formattedDate}</span>
                    <span className='welcome-msg'>Welcome back, John!</span>
                    <span className="welcome-caption">Always stay updated in your student portal</span>
                </div>
                <div className="col-md-6">
                    <img src={require('../../Assets/Images/student.png')} alt="bag" className='d-flex banner-img' />
                </div>
            </div>
        </div>
    )
}

export default MainBanner