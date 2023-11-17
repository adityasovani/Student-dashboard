import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className='header-container row w-100'>
            <div className="inputWrapper col">
                <input type="text" className='form-control search-field' placeholder='Search' />
            </div>
            <div className="profile-container col align-self-end">
                <img src={require('../../Assets/Images/profile.png')} alt="DPX" className="profile-img" />
            </div>
        </div>
    )
}

export default Header