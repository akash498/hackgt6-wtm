import React from 'react';
import Dashboard from './views/Dashboard'
import LogIn from './components/LogIn'
import InputMove from './components/InputMove'
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div className="text-indigo-500">
      <Dashboard>
      </Dashboard>

      <LogIn>
      </LogIn>

      <InputMove>
      </InputMove>
    </div>
  );
}

export default App;
