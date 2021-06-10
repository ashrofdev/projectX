import React from 'react';

const AddAccount = () => {
    return (
        <div>
            <div className="cont">
                <div className="left">
                    <div className="text">Placement Information</div>
                    <div className="hr"><div className="hr1"></div></div>

                    <form>
                        <label >Sponsor ID</label>
                        <input type="text" placeholder="Sponsor ID"/>
                        <label >Upline ID</label>
                        <input type="text" placeholder="Upline ID"/>
                        
                        <select>
                            <option value="">Select Position</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                        </select>
                    </form>

                </div>

                <div className="right">
                    <div className="text">User Activation</div>
                    <div className="hr"><div className="hr1"></div></div>

                    <form>
                        <label >User ID</label>
                        <input type="text" placeholder="User ID"/>
                        <label >Security Pin</label>
                        <input type="text" placeholder="Security Pin"/>
                    </form>
                    
                </div>
                <div id="clearf"></div>
                <input type="submit" value="Register" className="btn"/>
                
            </div>
        </div>
    );
};

export default AddAccount;