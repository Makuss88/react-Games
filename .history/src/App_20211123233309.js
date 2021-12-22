import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './components/mainPages/Header/Header';
import Home from './components/mainPages/Home/Home';
import Memo from './components/Game01_Memo/Memo';
import Slider from './components/Game02_Slider/Slider';
import HangMan from './components/Game03_HangMan/HangMan';
import TicTacToe from './components/Game04_TicTacToe/TicTacToe';
import Dashboard from './components/mainPages/Home/Dashboard';
import Login from './components/mainPages/Home/Login';


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
        <Route path='/signup' component={Home} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;