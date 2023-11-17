import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import DashboardContent from '../DashboardContent/DashboardContent';

const Dashboard: React.FC = () => {
    return (
        <div className='container-fluid'>
            <div className="row" style={{ marginTop: '2.5vh' }}>
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col" style={{ overflowY: 'auto' }}>
                    <DashboardContent />
                </div>
            </div>
        </div>
    )
}

export default Dashboard