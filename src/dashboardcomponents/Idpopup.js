import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { UserContext } from '../Components';
import { firestore } from '../firebase';
import { getUser } from '../utils';

const Idpopup = ({toggleAccounts, setUser}) => {
    const user = React.useContext(UserContext)
    const [oneAcc, setOneAcc] = useState(true)
    const [accounts, setAccounts] = useState([])
    // const history = useHistory()

    useEffect(()=>{
        const accounts = []
        if(user.parentAccount){
            firestore.collection('users').doc(user.parentAccount).collection('accounts').get().then(snap=>{
                if(!snap.empty){
                    setOneAcc(false)
                    snap.forEach(e=>{
                        accounts.push(e.data())
                    })
                }
                setAccounts(accounts)
            })
            getUser(user.parentAccount).then(user=>{
                accounts.push(user)
            })
        }else {
            firestore.collection('users').doc(user.userId).collection('accounts').get().then(snap=>{
                if(!snap.empty){
                    setOneAcc(false)
                    snap.forEach(e=>{
                        accounts.push(e.data())
                    })
                }
                setAccounts(accounts)
            })
        }


    },[user])

    const switchAccount = (userId) => {
        // history.push("/dashboard")
        toggleAccounts(false)
        getUser(userId).then(user=>{
            setUser(user)
        })
        
    }

    return (
        <div className="idpopup">
            <div className="container">
                <div className="box">
                    <header>
                        <h4>User IDs</h4>

                        <div className="close" onClick={()=> toggleAccounts(false)}>
                            &times;
                        </div>
                    </header>
                    <div className="accounts">
                        {
                            !user.parentAccount?
                            <div onClick={()=> switchAccount(user.userId)} className="account">
                                <p>{user.userId}</p>
                                <p>NGN{user.balance}</p>
                            </div>:null
                        }
                        {
                            !oneAcc?
                            <div>
                                {
                                    accounts.map(account=> {
                                        return <div onClick={()=> switchAccount(account.userId)} className="account">
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