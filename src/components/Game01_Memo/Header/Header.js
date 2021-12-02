import React from "react";
import { Button } from "react-bootstrap";

import { STAR_COMPONENT } from "../../../assets/helper";

import "./style.css";

const Header = ({ moves, handleRestart, isWin, GAMES_ROLES}) => {

  return (
    <>
      <div>
        <h1>Memory Game &nbsp; <STAR_COMPONENT isWin={isWin} moves={moves} GAMES_ROLES={GAMES_ROLES} /></h1>
      </div>
      <div>
        <div className="sub-header">
          <div className="movie">
            Moves:{moves}
          </div>
          <Button variant="warning" onClick={handleRestart}>Again??</Button>
        </div>
      </div>
    </>
  );
};

export default Header;