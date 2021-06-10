import React from 'react';

const ChangePassword = () => {
    return (
        <div>
            <div className="card">
            <div className="text">Change Password</div>
            <div className="hr"><div className="hr1"></div></div>

            <div className="inputs">
                <input placeholder="Old Password"/>
                <input placeholder="New Password"/>
                <input placeholder="Confirm Password"/>
                <input type="submit" value="Save Changes" className="btn"/>
            </div>
        </div>
        </div>
    );
};

export default ChangePassword;