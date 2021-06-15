import React from 'react';
import { Btn, UserContext } from '../Components';

const Header = ({toggleAccounts}) => {
    const user = React.useContext(UserContext)

    return (
        <div className="dashheader">
            <div className="left"><p>You are browsing user ID : {user.userId}</p></div>
                <div className="right">
                    <div onClick={()=> toggleAccounts(true)}>
                        <Btn bgColor={"gray"} color={"white"} text={"View all User IDs"} />
                    </div>
                    <div>Mesg</div>
                <div>Info</div>
            </div>
        </div>
    );
};

export default Header;