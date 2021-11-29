import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { GET_USER_INFO, STAR_COMPONENT, UPGRADE_STAR_COMPONENT } from "../../../assets/helper";
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const Header = ({ moves, bestScore, handleRestart, points }) => {

  const gamesRule = [17, 22]
  const [isWin, setIsWin] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  const { currentUser } = useAuth();

  useEffect(() => {
    if (points === 9) {
      setIsWin(true)
    }

    const pointsList = [];
    const userPoints = app.database().ref('points');

    userPoints.on('value', (point) => {
      const pointsAll = point.val();
      for (let id in pointsAll) {
        pointsList.push({ id, ...pointsAll[id] })
      }

      for (let i in pointsList) {
        if (pointsList[i].email === currentUser.email) {
          let array = Object.values(pointsList[i].howMany)
          console.log(pointsList[i])
          let sum = 0;
          for (var a of array) {
            sum += a
          }
        }
      }
    })


  }, [points, isWin])
  return (
    <>
      <div>

        <h1>Memory Game &nbsp; <STAR_COMPONENT isWin={isWin} moves={moves} gamesRule={gamesRule} /></h1>
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