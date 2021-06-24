import React from 'react';
import { Route, Switch } from 'react-router';
import AddAccount from './AddAccount';
import ChangePassword from './ChangePassword';
import Encashment from './Encashment';
import Genealogy from './Genealogy';
import Home from './Home';
import Profile from './Profile';


const Content = ({toggleNotification}) => {
    return (
        <div className="dashcontent">
            {/* <Home/> */}
            {/* <AddAccount/> */}
            <Switch>

                <Route path="/changepassword" component={ChangePassword} />
                <Route path="/profile" component={Profile} />
                <Route path="/addaccount" render={()=> <AddAccount toggleNotification={toggleNotification} /> }  />
                <Route path="/encashments" component={Encashment} />
                <Route path="/genealogy" component={Genealogy} />
                <Route path="/" component={Home} />

            </Switch>
        </div>
    );
};

export default Content;