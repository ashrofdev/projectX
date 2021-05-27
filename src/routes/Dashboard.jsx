import React from 'react';
import Content from '../dashboardcomponents/Content';
import Sidebar from '../dashboardcomponents/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Dashboard;