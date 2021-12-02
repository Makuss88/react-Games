import React, { useState, useEffect } from 'react'

import { DivComponent } from './FinishStyled'

import { auth, database } from 'firebase';

const Finish = ({ moves, isWin, GAMES_ROLES, handleRestart }) => {
  const [flag, setFlag] = useState(false);


  const upgradePoints = (point) => {
    var userId = auth().currentUser.email;

    database().ref('/points').once('value').then((snapshot) => {
      const username = (snapshot.val()) || 'Anonymous';
      const allUser = []
      for (const key in username) {
        allUser.push({ key, ...username[key] })
      }

      for (let i in allUser) {
        if (allUser[i].email === userId) {
          database().ref('points/' + allUser[i].key).set({
            email: userId,
            howMany: {
              game1: point,
              game2: allUser[i].howMany.game2,
              game3: allUser[i].howMany.game3,
              game4: allUser[i].howMany.game4,
            }
          }, (error) => {
            if (error) {
              console.log("dupa")
            } else {
              console.log("udało sie")
            }
          });
        }
        setFlag(false)
      }
    });
  }


  const update = async () => {
    let point = 0;

    if (moves <= GAMES_ROLES[0]) {
      point = 3
    } else if (moves <= GAMES_ROLES[1]) {
      point = 2
    } else {
      point = 1
    }

    return upgradePoints(point);
  }

  useEffect(() => {

    if (isWin) {
      setFlag(true)
    }
    else {
      setFlag(false)
    }
  }, [isWin, moves])

  return (
    <div >
      {flag ? <DivComponent><div>WYGRANA</div><button onClick={update}> JAHU! </button></DivComponent> : ''}
    </div>
  )
}

export default Finish;
