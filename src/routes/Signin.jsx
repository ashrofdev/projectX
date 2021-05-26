import React from 'react';
import {Btn} from '../Components';
import Slide from 'react-reveal/Slide';
import { NavLink } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="signin">

            <Slide right>
                <div className="form">
                    <header>

                    </header>
                    <div className="inputs">
                        <div className="divider">
                            <div className="icon"></div>
                            <label>Username</label>
                            <input placeholder="Username"/>
                        </div>
                        <div className="divider">
                            <div className="icon"></div>
                            <label>Password</label>
                            <input placeholder="Password"/>
                        </div>
                    </div>
                    <div className="cta">
                        <Btn text={"Sign In"} color={"white"} bgColor={"#933CEA"} />
                        <NavLink to="/signup">
                            <Btn text={"Register"} color={"white"} bgColor={"#933CEA"} />
                        </NavLink>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Signin;