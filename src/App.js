import React from 'react';
//import logo from './logo.svg';
import './App.css';
//New imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { SearchResult } from './Search';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

//import Sidebar from './components/Sidebar';

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

//This class requires you to import the code first before you can run it. EX, loginform.
//After that has been done, add it to the switch. This what allows other classes to use the code.
//Small note, this switch code provides the path to a file. you can type localhost:5000/login to get to the login page.
//The default page when an item isnt found is component = {NoMatch}, effectively, 404. Can be triggered by http://localhost:5000/ufhsdkajfhds
//If you want to add the link to the navigationbar you will need to use the path in the switch.
//Reverted to standard naming of main home page. Calling the webpage should now land you at home.
function App() {
    return (
        <React.Fragment>
            <Router>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={SearchResult} />
                    <Route path="/about" component={About} />
                    <Route path="/sign-in" component={SignInForm} />
                    <Route path="/sign-up" component={SignUpForm} />
                    <Route path="/404" component={NoMatch} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
