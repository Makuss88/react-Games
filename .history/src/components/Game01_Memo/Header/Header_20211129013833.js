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
          let dupa = Object.values(allUser[i])
          setUserInfo(allUser[i])
          console.log("aha", allUser[i])
          console.log(dupa)
        }
      }
    })


    // let sss = {
    //   game1: points,
    //   game2: array[1],
    //   game3: array[2],
    //   game4: array[3],
    // }
    // console.log("przed", sss)
    // sss.game1 = 3
    // console.log("po", sss)
    const starRef = app.database().ref('points').child(userInfo.id)
    console.log(starRef);
    if (points === 9) {
      setIsWin(true)


      let points = 0;
      if (moves <= 17) {
        points = 3;
      } else if (moves <= 22) {
        points = 2;
      } else {
        points = 1
      }


      // setSuma(sss)
      // starRef.update({ howMany: sss })
    }
  }, [currentUser, points, moves])


  return (
    <>
      <div>
        {console.log(suma)}
        {console.log(userInfo)}
        <h1>Memory Game &nbsp; <STAR_COMPONENT isWin={isWin} moves={moves} gamesRule={[17, 22]} /></h1>
      </div>
      <button>klik</button>
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