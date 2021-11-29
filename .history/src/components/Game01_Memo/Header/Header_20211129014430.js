import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { STAR_COMPONENT } from "../../../assets/helper";
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const Header = ({ moves, bestScore, handleRestart, points }) => {

  // const gamesRule0 = 17
  // const gamesRule1 = 22;

  const [isWin, setIsWin] = useState(false)
  const [suma, setSuma] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const { currentUser } = useAuth();

  useEffect(() => {
    let array;
    const allUser = [];
    const userRef = app.database().ref('points');

    userRef.on('value', (point) => {
      const user = point.val();
      for (let id in user) {
        allUser.push({ id, ...user[id] })
      }
      for (let i in allUser) {
        if (allUser[i].email === currentUser.email) {
          array = Object.values(allUser[i].howMany)
          setUserInfo(allUser[i])
        }
      }
    })

    if (points === 1) {
      setIsWin(true)
    }
  }, [currentUser, points, moves])


  useEffect(() => {
    if (isWin) {
      const starRef = app.database().ref('points').child(userInfo.id)
      console.log(starRef);
    }
  }, [isWin, userInfo])
  const klik = () => {
    const starRef = app.database().ref('points').child(userInfo.id)
    console.log(starRef);
    let sss = {
      game1: 2,
      game2: 2,
      game3: 0,
      game4: 0,
    }
    starRef.update({ howMany: sss })
  }

  return (
    <>
      <div>
        <h1>Memory Game &nbsp; <STAR_COMPONENT isWin={isWin} moves={moves} gamesRule={[17, 22]} /></h1>
      </div>
      <button onClick={klik}>klik</button>
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