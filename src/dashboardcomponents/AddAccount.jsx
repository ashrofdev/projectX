import React, { useState } from 'react';
import { UserContext } from '../Components';



const AddAccount = () => {
    const user = React.useContext(UserContext)

    const [sponsorId, setSponsorId] = useState('')
    const [uplineId, setUplineId] = useState('')
    const [position, setPosition] = useState('')
    const [userId, setUserId] = useState('')
    const [pin, setPin] = useState('')

    const addAccount = () => {
        user.sponsorId=sponsorId
        user.uplineId=uplineId
        user.leg=position
        user.userId=userId
        user.pin=pin
        console.log({sponsorId,uplineId,position,userId,pin})
    }

    return (
        <div>
            <div className="cont">
                <div className="left">
                    <div className="text">Placement Information</div>
                    <div className="hr"><div className="hr1"></div></div>

                    <form>
                        <label >Sponsor ID</label>
                        <input onChange={(e)=> setSponsorId(e.target.value)} type="text" placeholder="Sponsor ID"/>
                        <label >Upline ID</label>
                        <input onChange={(e)=> setUplineId(e.target.value)} type="text" placeholder="Upline ID"/>
                        
                        <select required onChange={(e)=> setPosition(e.target.value)}>
                            <option value="">Select Position</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                    </form>

                </div>

                <div className="right">
                    <div className="text">User Activation</div>
                    <div className="hr"><div className="hr1"></div></div>

                    <form>
                        <label >User ID</label>
                        <input onChange={(e)=> setUserId(e.target.value)} type="text" placeholder="User ID"/>
                        <label >Security Pin</label>
                        <input onChange={(e)=> setPin(e.target.value)} type="text" placeholder="Security Pin"/>
                    </form>
                    
                </div>
                <div id="clearf"></div>
                <input onClick={addAccount} type="submit" value="Register" className="btn"/>
                
            </div>
        </div>
    );
};

export default AddAccount;