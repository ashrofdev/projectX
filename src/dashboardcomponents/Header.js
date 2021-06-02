import React from 'react';
import { Btn } from '../Components';

const Header = () => {
return (
<div className="dashheader">
    <div className="left"><p>You are browsing user ID : NR000000</p></div>
        <div className="right">
            <Btn bgColor={"gray"} color={"white"} text={"View all User IDs"} />
            <div>Mesg</div>
        <div>Info</div>
    </div>
</div>
);
};

export default Header;