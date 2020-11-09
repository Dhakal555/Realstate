import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Listing from './pages/Listings.jsx';
import Help from './pages/Help.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/listing" component={Listing}/>
        <Route exact path="/help" component={Help}/>

        // redirect to home if the url is messed up 
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
