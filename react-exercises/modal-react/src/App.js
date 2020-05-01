import React from 'react';
import Homepage from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import { Router } from "@reach/router";

import './App.css';

const App = () => {
  return (
    <div >
      <div className="app">
        <Router>
          <Homepage path="/" />
          <Dashboard path="dashboard" />
        </Router>
      </div>
    </div>
  );
};

export default App;