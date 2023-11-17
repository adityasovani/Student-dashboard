import React from 'react';
import "./DashboardContent.css";
import Header from '../Header/Header';
import MainBanner from '../MainBanner/MainBanner';
import FinanceCard from '../FinanceCard/FinanceCard';
import CoursesCard from '../CoursesCard/CoursesCard';

// icons
import Fileandpen from '../../Assets/Icons/Fileandpen.svg';
import Noteandcoin from '../../Assets/Icons/Noteandcoin.svg';
import Barchart from '../../Assets/Icons/Barchart.svg';
import PC from '../../Assets/Icons/PC.svg';
import Charts from '../../Assets/Icons/Charts.svg';

const DashboardContent: React.FC = () => {
    return (
        <div className='content-container' style={{ width: '90%' }}>
            <div className='col-md-12'>
                <Header />
            </div>
            <div className='col-md-12 mt-2 w-100'>
                <MainBanner />
            </div>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-8" style={{ flexDirection: 'column' }}>
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <span className="section-heading">
                                    Finance
                                </span>
                                <div className='d-flex flex-row' style={{ marginTop: '1.2rem', gap: '12px', }}>
                                    <FinanceCard imagePath={Fileandpen}
                                        amount='$ 10,000' caption='Total Payable' selected={false} />
                                    <FinanceCard imagePath={Noteandcoin}
                                        amount='$ 5,000' caption='Total Paid' selected={true} />
                                    <FinanceCard imagePath={Barchart}
                                        amount='$ 300' caption='Others' selected={false} />
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className="d-flex justify-content-between">
                                    <span className="section-heading">
                                        Enrolled Courses
                                    </span>
                                    <span className='see-all' style={{ marginRight: 15 }}>see all</span>
                                </div>
                                <div className='d-flex flex-row' style={{ marginTop: '1.2rem', gap: '15px', }}>
                                    <CoursesCard selected={true} courseName='Object oriented programming' icon={PC} />
                                    <CoursesCard courseName='Fundamentals of database systems' icon={Charts} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ paddingLeft: '3.5rem' }}>
                        <div className="row">
                            {/* Course intructors */}
                            <div className="col-12">
                                <span className="section-heading">
                                    Course intructors
                                </span>
                                <div className="col-12 flex-row d-flex mt-3" style={{ gap: '0.6rem' }}>
                                    <img src={require('../../Assets/Images/DP1.png')} alt="" className='profile-circle' />
                                    <img src={require('../../Assets/Images/DP2.png')} alt="" className='profile-circle' />
                                    <img src={require('../../Assets/Images/DP3.png')} alt="" className='profile-circle' />
                                </div>
                            </div>
                            {/* Daily notice */}
                            <div className="col-11 mt-3">
                                <div className="justify-content-between d-flex">
                                    <span className="section-heading">
                                        Daily notice
                                    </span>
                                    <span className='see-all'>See all</span>
                                </div>
                                <div className="col-10">
                                    <div className="notice-card mt-1">
                                        <div>
                                            <div className="notice-title">Prelim payment due</div>
                                            <div className="notice-caption" style={{ width: '100%' }}>
                                                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </div>
                                            <div className="notice-see-all">See more</div>
                                        </div>
                                        <div >
                                            <div className="notice-title">Exam schedule</div>
                                            <div className="notice-caption" style={{ width: '100%' }}>
                                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                            </div>
                                            <div className="notice-see-all">See more</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent