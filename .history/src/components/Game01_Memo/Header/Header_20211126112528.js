import React from "react";
import "./style.css";
import { Container, Button } from "react-bootstrap";

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <Container fluid>
      <div>
        <h1>Memory Game</h1>
      <h1></h1></div>
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