import React from 'react';
import './Sidebar.css';
import MenuItem from './Menu-item/MenuItem';

// import icons
import GradIcon from '../../Assets/Images/GraduationCap.svg';
import DashboardIcon from '../../Assets/Icons/DashboardSide.svg';
import PaymentIcon from '../../Assets/Icons/Payment.svg';
import RegistrationIcon from '../../Assets/Icons/Pencil.svg';
import CoursesIcon from '../../Assets/Icons/Courses.svg';
import DropSemIcon from '../../Assets/Icons/DropSemester.svg';
import ResultIcon from '../../Assets/Icons/Result.svg';
import NoticeIcon from '../../Assets/Icons/Notice.svg';
import ScheduleIcon from '../../Assets/Icons/Schedule.svg';

const Sidebar: React.FC = () => {

    const menuItems = [
        { icon: DashboardIcon, name: 'Dashboard' },
        { icon: PaymentIcon, name: 'Payment Info' },
        { icon: RegistrationIcon, name: 'Registration' },
        { icon: CoursesIcon, name: 'Courses' },
        { icon: DropSemIcon, name: 'Drop Semester' },
        { icon: ResultIcon, name: 'Results' },
        { icon: NoticeIcon, name: 'Notice' },
        { icon: ScheduleIcon, name: 'Schedule' },
    ];

    return (
        <div className='sidemenu-container align-items-center d-flex' style={{ flexDirection: 'column', position: 'fixed' }}>
            {/* Grad Icon */}
            <div className="icon-box justify-content-center d-flex align-items-center">
                <img src={GradIcon} alt="grad icon" className='gradIcon' />
            </div>
            <div className='menuItems'>
                {/* menu items */}
                {
                    menuItems.map((item, idx) => (
                        <MenuItem icon={item.icon} name={item.name} key={idx} selected={idx === 0} />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar