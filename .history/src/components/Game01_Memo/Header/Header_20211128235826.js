import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { GET_USER_INFO, STAR_COMPONENT, UPGRADE_STAR_COMPONENT } from "../../../assets/helper";
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const Header = ({ moves, bestScore, handleRestart, points }) => {

  const gamesRule = [17, 22]
  const [isWin, setIsWin] = useState(false)

  const [userInfo, setUserInfo] = useState({})
  const { currentUser } = useAuth();

  useEffect(() => {
    const allUser = [];
    const userInfo = app.database().ref('points');

    userInfo.on('value', (point) => {
      const user = point.val();
      for (let id in user) {
        allUser.push({ id, ...user[id] })
      }
      for (let i in allUser) {
        if (allUser[i].email === currentUser.email) {
          setUserInfo(allUser[i].howMany)
        }
      }
    })
  }, [currentUser, points])


  return (
    <>
      <div>
        {console.log(userInfo)}
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