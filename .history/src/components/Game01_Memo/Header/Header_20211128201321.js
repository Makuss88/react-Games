import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import { STAR_COMPONENT } from "../../../assets/helper";


const Header = ({ moves, bestScore, handleRestart, points }) => {



  const dupa = [17, 22]



  return (
    <>
      <div>
        <h1>Memory Game &nbsp; <STAR_COMPONENT isWin={true} moves={18} gamesRule={dupa} /></h1>
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