import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
