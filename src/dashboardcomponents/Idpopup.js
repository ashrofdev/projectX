import React from 'react';

const Idpopup = ({toggleAccounts}) => {
    return (
        <div className="idpopup">
            <div className="container">
                <div className="box">
                    <header>
                        <h4>User IDs</h4>

                        <div className="close" onClick={()=> toggleAccounts(false)}>
                            X
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default Idpopup;