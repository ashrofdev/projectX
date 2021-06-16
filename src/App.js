import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { firestore } from './firebase';
import Dashboard from './routes/Dashboard';
import Signin from './routes/Signin';
import Signup from './routes/Signup';

// const NotFound = () => <h1>Page not found</h1>



function App() {
  const [authUser, setAuthUser] = useState({})

  

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

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" render={()=> <Signin setUser={setUser} /> } />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" render={()=> <Dashboard authUser={authUser} />} />
          {/* <Route path="/*" component={NotFound} /> */}
          <Route path="/" render={()=> <Signin setUser={setUser} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
