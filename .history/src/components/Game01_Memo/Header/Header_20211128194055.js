import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import { Container, Button } from "react-bootstrap";
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';


const Header = ({ moves, bestScore, handleRestart, points }) => {

  const [star, setStar] = useState('')

  const iconGood = useMemo(() => {
    return <img src={icon2} alt="goodIcon" style={{ paddingBottom: "10px" }} />
  }, [])

  const iconBad = useMemo(() => {
    return <img src={icon1} alt="badIcon" style={{ paddingBottom: "10px" }} />
  }, [])

  useEffect(() => {
    if (points === 9) {
      if (moves <= 17) {
        setStar(<span>{iconGood} {iconGood}  {iconGood}</span>)
      } else if (moves <= 22) {
        setStar(<span>{iconGood} {iconGood} {iconBad}</span>)
      } else {
        setStar(<span>{iconGood} {iconBad} {iconBad}</span>)
      }
    } else {
      setStar(<span>{iconBad} {iconBad} {iconBad}</span>)
    }
  }, [points, moves, iconGood, iconBad])

  return (
    <>
      <div>
        <h1>Memory Game &nbsp; {star}</h1>
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