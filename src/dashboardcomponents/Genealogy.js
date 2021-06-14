import React from 'react';
import {Btn} from '../Components'

const Genealogy = () => {
    return (
        <div className="genealogy">
            <div style={{height: '20rem'}} className="tree">
            // tree 
            </div>

            <div className="search">
                <h3>Genealogy</h3>
                <div className="form">
                    <input placeholder="Enter UserID here" />
                    <div><Btn text="Search" bgColor="gray" color="white" /></div>
                    <div><Btn text="Home" bgColor="green" color="white" /></div>
                </div>
            </div>

            <div className="downlines">
                <h3>Downlines</h3>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Left</td>
                                <td>Right</td>
                                <td>Sponsor</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>JOHN DOE (NG000000)</td>
                                <td>10</td>
                                <td>8</td>
                                <td>JOHN SMITH (NG000000)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JOHN DOE (NG000000)</td>
                                <td>6</td>
                                <td>2</td>
                                <td>JOHN SMITH (NG000000)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Genealogy;