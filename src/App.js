import React from 'react';
import Dashboard from './views/Dashboard'
import LogIn from './components/LogIn'
import InputMove from './components/InputMove'
import Moves from './views/Moves'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
firebase.initializeApp(firebaseConfig)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

function App() {
  return (
    <div className="bg-blue-200 text-indigo-500 h-full">
      <Dashboard>
      </Dashboard>
      <Router>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/inputmove' exact component={InputMove}/>
          <Route path='/' exact component={LogIn}/>
          <Route path='/moves' exact component={Moves}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
