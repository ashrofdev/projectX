import React from 'react';
import Content from '../dashboardcomponents/Content';
import Header from '../dashboardcomponents/Header';
import Idpopup from '../dashboardcomponents/Idpopup';
import Sidebar from '../dashboardcomponents/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar/>
            <div>
                <Header/>
                <Content/>
                <Idpopup/>
            </div>

        </div>
    );
};

export default Dashboard;