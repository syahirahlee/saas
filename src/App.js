import React from 'react';
import logo from './logo.svg';
import './App.css';

//Deploying a server.
//https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae
//remote access not working?
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World~ This is a test on whether I can get the heroku server running properly again.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
