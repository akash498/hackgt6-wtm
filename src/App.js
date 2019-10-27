import React from 'react';
import Dashboard from './views/Dashboard'
import LogIn from './components/LogIn'
import InputMove from './components/InputMove'
import Moves from './views/Moves'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
firebase.initializeApp(firebaseConfig)

function App() {
  return (
<<<<<<< HEAD
    <div className="bg-blue-200 text-indigo-500 h-full">
      <Dashboard>
      </Dashboard>

      <LogIn>
      </LogIn>
=======
    <div className="text-indigo-500">
      <Router>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/inputmove' exact component={InputMove}/>
          <Route path='/' exact component={LogIn}/>
          <Route path='/moves' exact component={Moves}/>
        </Switch>
      </Router>
>>>>>>> 838d61c71174a5f4824a993016bc37415a5b65f9
    </div>
  );
}

export default App;
