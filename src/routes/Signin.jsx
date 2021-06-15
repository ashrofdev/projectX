import React, { useState } from 'react';
import {Btn} from '../Components';
import Slide from 'react-reveal/Slide';
import { NavLink, useHistory } from 'react-router-dom';
import { firestore } from "../firebase"


const Signin = ({setUser}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const checkUser = async (username) => {
        let result = {}
        await firestore.collection('users').where("username", "==", username).get().then(user=>{
            if(user.empty){
                alert(`User (${username}) does not exist!`)
                result = false
            }else {
                user.forEach(e=> {
                    console.log(e.data())
                    result = e.data()
                })
            }

            
        })
        return result
    }

    const signin = async (username, password) => {

        const user = await checkUser(username)
        if(user){
            
            if(user.password===password){
                
                setUser(user)
                
                history.push("/dashboard")
            }else {
                alert("Auth failed")
            }
        }else {
            console.log(checkUser(username), 'hghghghghgh')
        }
        
    }
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
                            <input onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
                        </div>
                        <div className="divider">
                            <div className="icon"></div>
                            <label>Password</label>
                            <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="cta">
                        <div onClick={()=> signin(username, password)}>
                            <Btn text={"Sign In"} color={"white"} bgColor={"#933CEA"} />
                        </div>
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