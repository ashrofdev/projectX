import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Dashboard from './routes/Dashboard';
import Signin from './routes/Signin';
import Signup from './routes/Signup';

const NotFound = () => <h1>Page not found</h1>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
