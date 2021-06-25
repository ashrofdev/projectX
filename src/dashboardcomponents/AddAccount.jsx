import React, { useState } from 'react';
import { UserContext } from '../Components';
import { addNewAccount } from '../utils';



const AddAccount = ({toggleNotification}) => {
    const user = React.useContext(UserContext)

    const [sponsorId, setSponsorId] = useState('')
    const [uplineId, setUplineId] = useState('')
    const [position, setPosition] = useState('')
    const [userId, setUserId] = useState('')
    const [pin, setPin] = useState('')

    const addAccount = () => {
       
        const accountData = {
            lastname: user.lastname,
            firstname: user.firstname,
            middlename: user.middlename,
            sponsorId,
            uplineId,
            leg: position,
            userId,
            pin,
            downlines: {
                left: '',
                right: ''
            },
            leftPoints: 0,
            rightPoints: 0,
            balance: 0,
            leftCount: 0,
            rightCount: 0,
            totalEarning: 0,
            parentAccount: user.userId
        }

        console.log({sponsorId,uplineId,position,userId,pin})
        addNewAccount(accountData, toggleNotification)
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