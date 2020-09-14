import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';





const PagesRoot = () => (
  <Router> 
    <Switch>
      <Route path="/login" component={Login} exact path="/login"/>
      <Route path="/home" component={Home} exact path="/home/"/>
      
      
    </Switch>
  </Router>
)


export default PagesRoot;
