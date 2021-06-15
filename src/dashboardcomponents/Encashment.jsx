import React, { useState } from 'react';
import {Btn, UserContext} from '../Components';
import Fade from 'react-reveal/Fade';
import userEvent from '@testing-library/user-event';

const Encashment = () => {
    const [openCta, setOpenCta] = useState(false)
    const user = React.useContext(UserContext)
    return (
        <div className="encashment">
            <div className="container">
                <h3>Encashment</h3>

                <div className="content">
                    <div className="balance">
                        <div className="icon">
                            icon
                        </div>
                        <div className="text">
                            <h4>Available Balance</h4>
                            <p>{user.balance}.00</p>
                        </div>
                    </div>
                    <div>
                        <input placeholder="Enter Amount Here"/>
                        <select>
                            <option>Bank (ACCESS)</option>
                            <option>Cheque</option>
                        </select>
                    </div>
                    <Fade when={!openCta}>
                    <div className="cta">
                        <div onClick={()=> setOpenCta(true)}><Btn text="Encash" bgColor="green" color="white" /> </div>
                        <Btn text="Cancel" bgColor="red" color="white" /> 
                    </div>
                    </Fade>
                </div>
                <Fade collapse duration={500} when={openCta}>
                    <div className="ctainfo">
                        <p>This encashement will use the details below</p>
                        <p>Bank: ACCESS-NG</p>
                        <p>AccountNumber: 1482642665</p>
                        <p>Click proceed if the details are correct</p>
                        <div className="cta">
                            <div onClick={()=> setOpenCta(true)}><Btn text="Encash" bgColor="green" color="white" /> </div>
                            <div onClick={()=> setOpenCta(false)}><Btn text="Cancel" bgColor="red" color="white" /> </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="container">
                <h3>ENCASHMENT HISTORY</h3>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <td>Reference#</td>
                                <td>Date</td>
                                <td>Fullname</td>
                                <td>Destination</td>
                                <td>Account number</td>
                                <td>Gross</td>
                                <td>Net</td>
                                <td>Currency</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>73482748247</td>
                                <td>24 Feb, 2021</td>
                                <td>JOHN DOE</td>
                                <td>Bank</td>
                                <td>1498573652</td>
                                <td>21,200</td>
                                <td>20,000</td>
                                <td>NGN</td>
                            </tr>
                            <tr>
                                <td>73482748247</td>
                                <td>24 Feb, 2021</td>
                                <td>JOHN DOE</td>
                                <td>Bank</td>
                                <td>1498573652</td>
                                <td>7,000</td>
                                <td>6,270</td>
                                <td>NGN</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Encashment;