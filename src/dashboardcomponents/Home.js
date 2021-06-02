import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="left">
                <div className="inventory">
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
                    <div className="box">
                        <div className="icon"></div>
                        <div className="content">
                            <h4>Available Balance</h4>
                            <p>0.00</p>
                        </div>
                    </div>

                </div>
                <div className="welcome">
                    <h3>Welcome! JOHN DOE!</h3>
                    <p> Please be reminded that NR000000  is NOT YET qualified for next month's unilevel and stairstep income. 
                        Please maintain your account with any reorder product.</p>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Home;