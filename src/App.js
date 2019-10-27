import React from 'react';
import Dashboard from './views/Dashboard'
import LogIn from './components/LogIn'
import logo from './logo.svg';
import axios from 'axios';
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
    </div>
  );
}

export default App;
