import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom';
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const [points, setPoints] = useState(0)

  const { currentUser } = useAuth()

  useEffect(() => {
    const pointsList = [];

    console.log(aa)

    userPoints.on('value', (point) => {
      const pointsAll = point.val();

      for (let id in pointsAll) {
        pointsList.push({ id, ...pointsAll[id] })
      }

      for (let i in pointsList) {
        if (pointsList[i].email === currentUser.email) {
          let array = Object.values(pointsList[i].howMany)
          let sum = 0;
          for (var a of array) {
            sum += a
          }
          return setPoints(sum);
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
      <div >Graj dalej by być MISTRZEM ŚWIATA!!!</div>
      <div> <NavLink to='/dashboard' >Moje konto</NavLink> </div>
    </div>
  )
}

export default IsUserActive;
