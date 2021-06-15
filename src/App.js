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
    
    const a = ['w','w','e']
    a[100] ='a'
    console.log(typeof(42))

   
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
