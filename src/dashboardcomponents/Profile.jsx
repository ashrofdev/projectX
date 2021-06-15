import React from 'react';
import { UserContext } from '../Components';

const Profile = () => {

    const user = React.useContext(UserContext)

    return (
        <div className="profile">
            <div className="text">Profile Settings</div>
            <div className="hr"><div className="hr1"></div></div>
            <div className="">
                <div className="left">
                    <div className="text">Personal Information</div>
                    <div className="hr"><div className="hr1"></div></div>

                    <form>
                        <div className="inputcont">
                            <label >First Name</label>
                            <input disabled value={user.firstname} id="ss" type="text" />
                        </div>
                        <div className="inputcont">
                            <label >Last Name</label>
                            <input disabled value={user.lastname} id="ss" type="text" />
                        </div>
                        <div className="inputcont">
                            <label >Middle Name</label>
                            <input disabled value={user.middlename} id="ss" type="text" />
                        </div>
                        
                        <div className="inputcont">
                            <label >Gender</label>
                            <select id="ss">
                                <option value="">Other Information</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                        </div>
                        <div id="clearf"></div>
                        <label >Date of Birth</label>
                        <input id="ss" type="text" />
                        <label >Tax identification Number</label>
                        <input id="ss" type="text" />

                        <label>Address</label>
                        <textarea></textarea>

                        <label >Country</label>
                            <select id="ss">
                                <option value="">Nigeria</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                            <label >Region/State</label>
                            <select id="ss">
                                <option value="">Other Information</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                    </form>

                </div>

                <div className="right">
                    <div className="text">User Activation</div>
                    <div className="hr"><div className="hr1"></div></div>

                    <form>
                        <label >Mobile Number</label>
                        <input type="text" placeholder="2348012345678"/>
                        <label >Email Address</label>
                        <input type="text"/>
                        <label >Facebook</label>
                        <input type="text" />
                        <label >Twitter</label>
                        <input type="text" />
                        <label >Previous/Current Job</label>
                        <input type="text" />
                        <label >Employer</label>
                        <input type="text" />
                        <label>About Me</label>
                        <textarea></textarea>
                    </form>
                    
                </div>
                <div id="clearf"></div>
                <input type="submit" value="Submit" className="btn"/>
            </div>
            <div className="down">
            <div className="text">User Activation</div>
            <div className="hr"><div className="hr1"></div></div>

            <input type="checkbox"/> Hide Network Activity

            </div>
        </div>
    );
};

export default Profile;