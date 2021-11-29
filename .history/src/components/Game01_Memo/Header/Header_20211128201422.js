import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { STAR_COMPONENT } from "../../../assets/helper";


const Header = ({ moves, bestScore, handleRestart, points }) => {

  const gamesRule = [17, 22]

  return (
    <>
      <div>
        <h1>Memory Game &nbsp; <STAR_COMPONENT isWin={true} moves={points} gamesRule={gamesRule} /></h1>
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
    </>
  );
};

export default Header;