import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../dashboardcomponents/Content';
import Header from '../dashboardcomponents/Header';
import Idpopup from '../dashboardcomponents/Idpopup';
import Sidebar from '../dashboardcomponents/Sidebar';

const Dashboard = () => {



    return (
        <div className="dashboard">
            <BrowserRouter>
                <Sidebar/>
                <div>
                    <Header/>
                    <Content/>
                    <Idpopup/>
                </div>
            </BrowserRouter>

        </div>
    );
};

export default Dashboard;