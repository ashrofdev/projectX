import React from 'react';
import { UserContext } from '../Components';

const Home = () => {
    const user = React.useContext(UserContext)
    console.log(user, 'from APi.....')
    return (
        <div className="home">
            <div className="left">
                <div className="inventory">
                    <div className="box">
                        <div className="icon"></div>
                        <div className="content">
                            <h4>Available Balance</h4>
                            <p>{user.balance}.00</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"></div>
                        <div className="content">
                            <h4>Available Balance</h4>
                            <p>0.00</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"></div>
                        <div className="content">
                            <h4>Available Balance</h4>
                            <p>0.00</p>
                        </div>
                    </div>

                </div>
                <div className="welcome">
                    <h3>Welcome! {user.firstname} {user.lastname}!</h3>
                    <p> Please be reminded that {user.userId}  is NOT YET qualified for next month's unilevel and stairstep income. 
                        Please maintain your account with any reorder product.</p>
                </div>
            </div>


            <div className="right">
                <div className="box">
                    <div className="icon"></div>
                    <div className="content">
                        <h4>{user.userId} - NIGERIA</h4>
                        <p>New Global Package</p>
                    </div>
                </div>
                <div className="rankbox">
                    <h4>Rank Info - {user.userId} - DI</h4>
                    <p>You are 10.0000 pts away to become SE! Upgrade rank by buying more products
                         and encouraging your group to do the same to develop more customers.
                        Happy Networking!!!</p>
                </div>

                <div className="detailbox">
                    <h3>Accoint Info - {user.userId}</h3>
                    <div className="details">
                        <div className="detail">
                            <h4>Country</h4>
                            <p>Nigeria</p>
                        </div>
                        <div className="detail">
                            <h4>Package Type</h4>
                            <p>New Global Package</p>
                        </div>
                        <div className="detail">
                            <h4>Available Points (LEFT)</h4>
                            <p>{user.leftPoints}</p>
                        </div>
                        <div className="detail">
                            <h4>Available Points (RIGHT)</h4>
                            <p>{user.rightPoints}</p>
                        </div>
                        <div className="detail">
                            <h4>Available Product GC (in pcs)</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total Direct Ref. Earnings</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total Pair Earnings</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total Uni-level Earnings</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total Stair step Earnings</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total UPP Earnings</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Current Total Earnings</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Current Available Balance</h4>
                            <p>{user.balance}</p>
                        </div>
                        <div className="detail">
                            <h4>Available Travel GC</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Pairs This Cycle</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total Earnings of all Accounts</h4>
                            <p>0</p>
                        </div>
                        <div className="detail">
                            <h4>Total Balance of all Accounts</h4>
                            <p>0</p>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;