import React from 'react';
//import logo from './logo.svg';
import './App.css';
//New imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { SearchResult } from './Search';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';

//Deploying a server.
//https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae
//remote access not working?

//Use this to create the website.
//https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93
/*function App() {
  return (
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
  );
}*/
function App() {
    return (
        <React.Fragment>
            <Router>
                <NavigationBar />
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/search" component={SearchResult} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
