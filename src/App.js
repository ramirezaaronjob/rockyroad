import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Welcome to Rocky Road
        </p>
        <button>
          Enter
        </button>
      </header>
    </div>
  );
}

export default App;
