import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Listing from './pages/Listings';
import Help from './pages/Help';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/listing" components={Listing}/>
        <Route path="/help" component={Help}/>
      </Switch>
    </>
  );
}

export default App;
