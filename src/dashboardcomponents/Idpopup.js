import React, { useEffect, useState } from 'react';
import { UserContext } from '../Components';
import { firestore } from '../firebase';

const Idpopup = ({toggleAccounts, setUser}) => {
    const user = React.useContext(UserContext)
    const [oneAcc, setOneAcc] = useState(true)
    const [accounts, setAccounts] = useState([])

    useEffect(()=>{
        const accounts = []
        firestore.collection('users').doc(user.userId).collection('accounts').get().then(snap=>{
            if(!snap.empty){
                setOneAcc(false)
                snap.forEach(e=>{
                    accounts.push(e.data())
                })
            }
            setAccounts(accounts)
        })


    },[user])

    const switchAccount = () => {
        
    }

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
                    <div className="accounts">
                        <div className="account">
                            <p>{user.userId}</p>
                            <p>NGN{user.balance}</p>
                        </div>
                        {
                            !oneAcc?
                            <div>
                                {
                                    accounts.map(account=> {
                                        return <div className="account">
                                                    <p>{account.userId}</p>
                                                    <p>NGN{account.balance}</p>
                                                </div>
                                    })
                                }
                            </div>:null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Idpopup;