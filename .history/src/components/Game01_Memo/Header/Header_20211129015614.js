import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { STAR_COMPONENT } from "../../../assets/helper";
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const Header = ({ moves, bestScore, handleRestart, points }) => {



  const gamesRule = useMemo

  const [isWin, setIsWin] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const { currentUser } = useAuth();

  useEffect(() => {
    const allUser = [];
    const userRef = app.database().ref('points');

    userRef.on('value', (point) => {
      const user = point.val();
      for (let id in user) {
        allUser.push({ id, ...user[id] })
      }
      for (let i in allUser) {
        if (allUser[i].email === currentUser.email) {
          setUserInfo(allUser[i])
        }
      }
    })

    if (points === 4) {
      setIsWin(true)
    }
  }, [currentUser, points, moves])


  useEffect(() => {
    if (isWin) {
      const starRef = app.database().ref('points').child(userInfo.id)
      let points = 0;
      if (moves <= gamesRule[0]) { points = 3 }
      else if (moves <= gamesRule[1]) { points = 2 }
      else { points = 1 }

      let updateHowMany = {
        game1: points,
        game2: 2,
        game3: 3,
        game4: 3,
      }
      starRef.update({ howMany: updateHowMany })
      setIsWin(false)
      console.log("zrobione", points);
    }
  }, [isWin, userInfo, moves, gamesRule])


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