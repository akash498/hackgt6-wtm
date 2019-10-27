import React from 'react';
import Dashboard from './views/Dashboard'
import LogIn from './components/LogIn'
import logo from './logo.svg';
import axios from 'axios';

function App() {
  return (
    <div className="bg-blue-200 text-indigo-500 h-full">
      <Dashboard>
      </Dashboard>

      <LogIn>
      </LogIn>
    </div>
  );
}

export default App;
