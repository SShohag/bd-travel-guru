import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './Notfound/Notfound';
import Place from './components/Place/Place';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Room from './components/Room/Room';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <PrivateRoute path="/booking">
          <Booking></Booking>
        </PrivateRoute>
        
        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/room">
          <Room></Room>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
