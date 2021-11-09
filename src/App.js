import React from 'react';

import { Container, Row } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from "react-router-dom";


import Header from './components/mainPages/Header/Header';
import Memo from './components/Game01_Memo/Memo'
import Slider from './components/Game02_Slider/Slider'
import HangMan from './components/Game03_HangMan/HangMan'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/memo" component={Memo} />
        <Route path="/slider" component={Slider} />
        <Route path="/hangman" component={HangMan} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;


const Home = () => {
  return (<div>
    HELLO WROLD!
    <div>
      trzeba dopisać możliwość logowania
    </div>
  </div>)
}