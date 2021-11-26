import React, { useEffect, useState } from "react";
import "./style.css";
import { Container, Button } from "react-bootstrap";
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';


const Header = ({ moves, bestScore, handleRestart }) => {


  const [star, setStar] = useState('')

  useEffect (() 

  return (
    <Container fluid>
      <div>
        <h1>Memory Game</h1>
        <h1>gwiazdki <img src={icon1} alt="icon1" /></h1>
      </div>
      <div>
        <div className="sub-header">
          <div>
            Moves:{moves}
          </div>
          <div className="reshuffle">
            <Button variant="warning" onClick={handleRestart}>Again??</Button>
          </div>
          <div className="high-score">
            <span>Best Score:</span>
            {bestScore}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;