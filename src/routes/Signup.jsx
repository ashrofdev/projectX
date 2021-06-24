import React, { useState } from 'react';
import {Btn} from '../Components';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import { signUp, getUser, placeReg, creditSponsor } from '../utils';
import { useHistory } from "react-router-dom";

const Signup = ({toggleNotification}) => {
    const history = useHistory()

    const [permission, setPermission] = useState(false)
    const [upline, setNewUpline] = useState("")
    const [uplineDetails, setUplineDetails] = useState({})
    const [data, setData] = useState({})

    const requestPermission = () => {
        setPermission(!permission)
    }

    const proceed = () => {

        placeReg(data, upline)
        creditSponsor(data.sponsorId, 4500)
        setTimeout(() => {
            history.push('/signin')
        }, 2000);
    }
    
    const setUpline = (userId) => {
        const user = getUser(userId)
        user.then(e=> {
            setNewUpline(userId)
            setUplineDetails(e)
        })
    }

    const signup = (e) => {
        e.preventDefault()
        const dataa = {
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
            },
            leftPoints: 0,
            rightPoints: 0,
            balance: 0,
            totalEarning: 0,
            leftCount: 0,
            rightCount: 0
        }
        setData(dataa)
        signUp(dataa, toggleNotification, requestPermission, setUpline)
    }

    const resetForm = () => {
        document.querySelector('form').reset()
    }
    return (
        <div className="signup">
            <Slide right>
                <form className="form" onSubmit={(e) => signup(e)}>
                    <Slide duration={300} collapse when={!permission}>
                        <header>
                            <h2>Registration Form</h2>
                        </header>
                        <div className="inputs">
                            <div className="inp"><input required name="lastname" placeholder="Last Name"/></div>
                            <div className="inp"><input required name="firstname" placeholder="First Name"/></div>
                            <div className="inp"><input required name="middlename" placeholder="Middle Name"/></div>
                            <div className="inp"><input required name="birthdate" placeholder="Birthdate"/></div>
                            <div className="inp"><input required name="username" placeholder="Username"/></div>
                            <div className="inp"><input required name="sponsorId" placeholder="Sponsor ID"/></div>
                            <div className="inp"><input required name="uplineId" placeholder="Upline ID"/></div>
                            <select name="leg">
                                <option value="">Select Position</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                            <div className="inp"><input type="password" required name="password" placeholder="Password"/></div>
                            <div className="inp"><input type="password" required name="cpassword" placeholder="Confirm Password"/></div>
                            <h3>Activation Info</h3>
                            <div className="inp"><input required name="userId" placeholder="User ID"/></div>
                            <div className="inp"><input required name="pin" placeholder="PIN"/></div>
                        </div>
                        <div className="cta">
                            <Btn text={"Register"} color={"white"} bgColor={"#0169D9"} />
                            <div onClick={resetForm}>
                                <Btn text={"Reset"} color={"white"} bgColor={"#727B84"} />
                            </div>
                            <NavLink to="/signin">
                                <Btn text={"Cancel"} color={"white"} bgColor={"#C82332"} />
                            </NavLink>
                        </div>
                    </Slide>

                    <Fade duration={500} delay={700} right when={permission} collapse>
                        <div className="permissioninfo">
                            <p>The provied upline ID is not available you will now be placed under <span>({upline}) {uplineDetails.firstname} {uplineDetails.lastname} </span> </p>
                            <div className="cta">
                                <div onClick={proceed} >
                                    <Btn text={"Proceed"} color={"white"} bgColor={"#0169D9"} />
                                </div>
                                
                                <div onClick={()=> requestPermission()}>
                                    <Btn type="button" text={"Cancel"} color={"white"} bgColor={"#C82332"} />
                                </div>
                            </div>
                        </div>
                    </Fade>
                </form>
            </Slide>
        </div>
    );
};

export default Signup;