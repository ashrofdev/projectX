import React from 'react';
import Content from '../dashboardcomponents/Content';
import Header from '../dashboardcomponents/Header';
import Sidebar from '../dashboardcomponents/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar/>
            <div>
                <Header/>
                <Content/>
            </div>
        </div>
    );
};

export default Dashboard;