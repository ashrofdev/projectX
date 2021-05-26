import React from 'react';
import {Btn} from '../Components';
import Slide from 'react-reveal/Slide';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="signup">
            <Slide right>
                <div className="form">
                    <header>
                        <h2>Registration Form</h2>
                    </header>
                    <div className="inputs">
                        <div className="inp"><input placeholder="Last Name"/></div>
                        <div className="inp"><input placeholder="First Name"/></div>
                        <div className="inp"><input placeholder="Middle Name"/></div>
                        <div className="inp"><input placeholder="Birthdate"/></div>
                        <div className="inp"><input placeholder="Username"/></div>
                        <div className="inp"><input placeholder="Sponsor ID"/></div>
                        <div className="inp"><input placeholder="Upline ID"/></div>
                        <select>
                            <option value="">Select Position</option>
                            <option>Left</option>
                            <option>Right</option>
                        </select>
                        <div className="inp"><input placeholder="Password"/></div>
                        <div className="inp"><input placeholder="Confirm Password"/></div>
                        <h3>Activation Info</h3>
                        <div className="inp"><input placeholder="User ID"/></div>
                        <div className="inp"><input placeholder="PIN"/></div>
                    </div>
                    <div className="cta">
                        <Btn text={"Register"} color={"white"} bgColor={"#0169D9"} />
                        <Btn text={"Reset"} color={"white"} bgColor={"#727B84"} />
                        <NavLink to="/signin">
                            <Btn text={"Cancel"} color={"white"} bgColor={"#C82332"} />
                        </NavLink>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Signup;