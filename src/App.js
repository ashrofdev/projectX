import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { firestore } from './firebase';
import Dashboard from './routes/Dashboard';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import {Notification} from './Components';
import Fade from 'react-reveal/Fade'

// const NotFound = () => <h1>Page not found</h1>



function App() {
  const [authUser, setAuthUser] = useState({})
  const [notification, setNotification] = useState({on: false})

  

  useEffect(()=> {
    firestore.collection('users').doc('NG783735').get().then(snap=> {
      console.log(snap.data())
    })
    
    const a = ['w','w','e']
    a[100] ='a'
    
   
  },[])

  const setUser = (user) => {
    setAuthUser(user)
  }

  const toggleNotification = (type, message) => {

    setNotification({
      type,
      message,
      on:true
    })

    setTimeout(() => {
      setNotification({on:false})
    }, 5000);
  }
  

  return (
    <div className="App">
      <Fade when={notification.on} top>
        <Notification type={notification.type} message={notification.message} />
      </Fade>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" render={()=> <Signin toggleNotification={toggleNotification} setUser={setUser} /> } />
          <Route path="/signup" render={()=> <Signup toggleNotification={toggleNotification} /> } />
          <Route path="/dashboard" render={()=> <Dashboard toggleNotification={toggleNotification} setUser={setUser} authUser={authUser} />} />
          {/* <Route path="/*" component={NotFound} /> */}
          <Route path="/" render={()=> <Signin toggleNotification={toggleNotification} setUser={setUser} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
