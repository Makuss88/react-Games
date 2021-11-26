import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import { Container, Button } from "react-bootstrap";
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';


const Header = ({ moves, bestScore, handleRestart, points }) => {


  const [star, setStar] = useState('')

  const iconGood = useMemo(() => {
    return <img src={icon2} alt="goodIcon" />
  }, [])

  const iconBad = useMemo(() => {
    return <img src={icon1} alt="dabIcon" />
  }, [])

  useEffect(() => {
    if (points === 9) {
      if (moves <= 16) {
        setStar(<div>{iconGood} {iconGood}  {iconGood}</div>)
      } else if (moves <= 20) {
        setStar(<span>{iconGood} {iconGood} {iconBad})
      } else {
        setStar(<span>{iconGood} <img src={icon1} alt="badIcon" /> <img src={icon1} alt="badIcon" /></span>)
      }
    } else {
      setStar(<span><img src={icon1} alt="badIcon" /> <img src={icon1} alt="badIcon" /> <img src={icon1} alt="badIcon" /></span>)
    }


  }, [points, moves, iconGood])

  return (
    <Container fluid>
      <div>
        <h1>Memory Game &nbsp; {star}</h1>
        {/* <h1>gwiazdki <img src={icon1} alt="icon1" /></h1> */}
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