import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './components/mainPages/Header/Header';
import Memo from './components/Game01_Memo/Memo';
import Slider from './components/Game02_Slider/Slider';
import HangMan from './components/Game03_HangMan/HangMan';
import TicTacToe from './components/Game04_TicTacToe/TicTacToe';

import Dashboard from './components/mainPages/Home/Dashboard';
import Login from './components/mainPages/Home/Login';
import PrivateRoute from './components/mainPages/Home/PrivateRoute';
import SignUp from './components/mainPages/Home/SignUp';
import ForgotPass from './components/mainPages/Home/ForgotPass';
import UpdateProfile from './components/mainPages/Home/UpdateProfile';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/memo" component={Memo} />
        <Route path="/slider" component={Slider} />
        <Route path="/hangman" component={HangMan} />
        <Route path="/tictactoe" component={TicTacToe} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/forgot-password' component={ForgotPass} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;