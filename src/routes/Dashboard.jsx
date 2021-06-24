import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../dashboardcomponents/Content';
import Header from '../dashboardcomponents/Header';
import Idpopup from '../dashboardcomponents/Idpopup';
import Sidebar from '../dashboardcomponents/Sidebar';
import Fade from 'react-reveal/Bounce';
import { UserContext } from '../Components';

const Dashboard = ({authUser, toggleNotification}) => {

    const [openAccounts, setOpenAccounts] = useState(false)

    return (
        <UserContext.Provider value={authUser}>
            <div className="dashboard">
                <BrowserRouter>
                    <Sidebar/>
                    <div>
                        <Header toggleAccounts={setOpenAccounts} />
                        <Content toggleNotification={toggleNotification} />
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
        </UserContext.Provider>
    );
};

export default Dashboard;