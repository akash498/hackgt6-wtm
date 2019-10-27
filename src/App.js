import React from 'react';
import Dashboard from './views/Dashboard'
import LogIn from './components/LogIn'
import InputMove from './components/InputMove'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="text-indigo-500">
      <Router>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/inputmove' exact component={InputMove}/>
          <Route path='/login' exact component={LogIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
