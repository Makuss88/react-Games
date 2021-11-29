import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom';
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const [points, setPoints] = useState(0)
  const [sumOfPoints, setSumOfPoints] = useState(0)

  const { currentUser } = useAuth()

  useEffect(() => {
    const pointsList = [];
    const userPoints = app.database().ref('points');

    userPoints.on('value', (point) => {
      const pointsAll = point.val();

      for (let id in pointsAll) {
        pointsList.push(pointsAll[id])
      }

      for (let i in pointsList) {
        if (pointsList[i].email === currentUser.email) {
          let sum = 0;

          for (var a of pointsList[i].howMany) {
            sum += a
          }
          (console.log(Object.values(pointsList[i].howMany)))
            (console.log(Object.values(pointsList[i].howMany)))
          return setPoints(0);
        }
      }
    })
  }, [currentUser.email]);

  const styleDiv = {
    background: "white",
    borderRadius: "15px",
    width: '700px',
    padding: "50px",
    textAlign: 'center',
    lineHeight: '2.0',
    fontSize: "26px",
  }

  return (
    <div style={styleDiv}>
      <div>Cześć {currentUser.email}</div>
      <div> Masz {points} z 12 Gwiazdek! </div>
      {console.log(points)}
      <div >Graj dalej aby zostać świetnym graczem w te gry!</div>
      <div> <NavLink to='/dashboard' >Moje konto</NavLink> </div>
    </div>
  )
}

export default IsUserActive;
