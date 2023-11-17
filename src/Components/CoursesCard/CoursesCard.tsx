import React from 'react';
import './CoursesCard.css';

type Props = {
    courseName: string;
    icon: any;
    selected?: boolean;
};

const CoursesCard: React.FC<Props> = ({ courseName, icon, selected }) => {
    return (
        <div className={`course-card ${selected ? 'selected' : ""}`}>
            <div className="row">
                <div className="col-7 flex-column d-flex mt-2 align-items-center text-center">
                    <span className='course-name'>
                        {courseName}
                    </span>
                    <button className='btn mt-1 view-course'>View</button>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                    <img src={icon} alt={courseName ?? 'course-image'} />
                </div>
            </div>
        </div>
    )
}

export default CoursesCard