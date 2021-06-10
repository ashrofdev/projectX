import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import eclogo from "../img/ed-logo.png";
import Fade from 'react-reveal/Fade'

const Sidebar = () => {

    const [openSettings, setOpenSettings] = useState(false)

    return (
        <div className="sidebar">

            <div className="topinfo">
                <div className="propic"></div>

                <div className="driver">
                    <img alt="eclogo" src={eclogo} />
                </div>
            </div>

            <nav>
                <div className="settings">
                    <div className="head" onClick={()=> setOpenSettings(!openSettings)}>
                        <p>Settings</p>
                        <p>*</p>
                    </div>
                    <div>
                        <Fade collapse when={openSettings} duration={400} top>
                            <ul>
                                <NavLink to="/profile">
                                    <li>My Profile</li>
                                </NavLink>
                                <NavLink to="/changepassword">
                                    <li>Change Password</li>
                                </NavLink>
                                <NavLink to="/addaccount">
                                    <li>Add Account</li>
                                </NavLink>
                                <li>Logout</li>
                            </ul>
                        </Fade>
                    </div>
                </div>
                <ul>
                    <NavLink to="/">
                        <li>Dashboard</li>
                    </NavLink>
                    <NavLink to="/genealogy">
                        <li>Genealogy</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Transactions</li>
                    </NavLink>
                    <NavLink to="/encashments">
                        <li>Encashment</li>
                    </NavLink>
                    {/* <li>Dashboard</li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;