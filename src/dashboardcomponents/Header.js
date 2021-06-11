import React from 'react';
import { Btn } from '../Components';

const Header = ({toggleAccounts}) => {
return (
<div className="dashheader">
    <div className="left"><p>You are browsing user ID : NR000000</p></div>
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