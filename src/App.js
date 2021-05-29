import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { firestore } from './firebase';
import Dashboard from './routes/Dashboard';
import Signin from './routes/Signin';
import Signup from './routes/Signup';

// const NotFound = () => <h1>Page not found</h1>



function App() {

 

  useEffect(()=> {
    firestore.collection('users').doc('NG783735').get().then(snap=> {
      console.log(snap.data())
    })
    firestore.collection('users').doc('NG783735').set({
      name: 'Ashraf',
      userID: 'NG382234',
      uplineID: 'NG838293',
      downlines: {
        left: 'erkjr',
        right: 'jfnfr'
      },
      balance: 2000
    }).then(e=> {
      console.log(e,'done')
    })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/*" component={NotFound} /> */}
          <Route path="/" component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
