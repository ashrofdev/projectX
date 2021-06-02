import React from 'react';
import {Btn} from '../Components';
import Slide from 'react-reveal/Slide';
import { NavLink } from 'react-router-dom';
import { signUp } from '../utils';

const Signup = () => {

    const signup = (e) => {
        e.preventDefault()
        const data = {
            lastname: e.target.lastname.value,
            firstname: e.target.firstname.value,
            middlename: e.target.middlename.value,
            birthdate: e.target.birthdate.value,
            username: e.target.username.value,
            sponsorId: e.target.sponsorId.value,
            uplineId: e.target.uplineId.value,
            password: e.target.password.value,
            userId: e.target.userId.value,
            pin: e.target.pin.value,
            leg: e.target.leg.value,
            downlines: {
                left: '',
                right: ''
            }
        }
        signUp(data)
    }

    return (
        <div className="signup">
            <Slide right>
                <form className="form" onSubmit={(e) => signup(e)}>
                    <header>
                        <h2>Registration Form</h2>
                    </header>
                    <div className="inputs">
                        <div className="inp"><input name="lastname" placeholder="Last Name"/></div>
                        <div className="inp"><input name="firstname" placeholder="First Name"/></div>
                        <div className="inp"><input name="middlename" placeholder="Middle Name"/></div>
                        <div className="inp"><input name="birthdate" placeholder="Birthdate"/></div>
                        <div className="inp"><input name="username" placeholder="Username"/></div>
                        <div className="inp"><input name="sponsorId" placeholder="Sponsor ID"/></div>
                        <div className="inp"><input name="uplineId" placeholder="Upline ID"/></div>
                        <select name="leg">
                            <option value="">Select Position</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                        <div className="inp"><input name="password" placeholder="Password"/></div>
                        <div className="inp"><input name="cpassword" placeholder="Confirm Password"/></div>
                        <h3>Activation Info</h3>
                        <div className="inp"><input name="userId" placeholder="User ID"/></div>
                        <div className="inp"><input name="pin" placeholder="PIN"/></div>
                    </div>
                    <div className="cta">
                        <Btn text={"Register"} color={"white"} bgColor={"#0169D9"} />
                        <Btn text={"Reset"} color={"white"} bgColor={"#727B84"} />
                        <NavLink to="/signin">
                            <Btn text={"Cancel"} color={"white"} bgColor={"#C82332"} />
                        </NavLink>
                    </div>
                </form>
            </Slide>
        </div>
    );
};

export default Signup;