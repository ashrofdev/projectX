import React from 'react';
import eclogo from "../img/ed-logo.png"

const Sidebar = () => {
    return (
        <div className="sidebar">
            sidebar

            <div className="topinfo">
                <div className="propic"></div>

                <div className="driver">
                    <img alt="eclogo" src={eclogo} />
                </div>
            </div>

            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Genealogy</li>
                    <li>Transactions</li>
                    <li>Encashment</li>
                    {/* <li>Dashboard</li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;