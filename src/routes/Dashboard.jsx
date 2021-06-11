import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../dashboardcomponents/Content';
import Header from '../dashboardcomponents/Header';
import Idpopup from '../dashboardcomponents/Idpopup';
import Sidebar from '../dashboardcomponents/Sidebar';
import Fade from 'react-reveal/Bounce'

const Dashboard = () => {

    const [openAccounts, setOpenAccounts] = useState(false)

    return (
        <div className="dashboard">
            <BrowserRouter>
                <Sidebar/>
                <div>
                    <Header toggleAccounts={setOpenAccounts} />
                    <Content/>
                </div>
            </BrowserRouter>
            <div>
                <Fade collapse top when={openAccounts} >
                    <div>
                        <Idpopup toggleAccounts={setOpenAccounts} />
                    </div>
                </Fade>
            </div>
            
        </div>
    );
};

export default Dashboard;