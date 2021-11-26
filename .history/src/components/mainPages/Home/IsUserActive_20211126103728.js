import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom';
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const [point, setPoint] = useState(-1)

  const { currentUser } = useAuth()
  const pointsList = [];
  useEffect(() => {
    const dupa = app.database().ref('points');

    dupa.on('value', (point) => {
      const points = point.val();

      for (let id in points) {
        pointsList.push(points[id])
      }

      for (let i in pointsList) {
        if (pointsList[i].email === currentUser.email) {
          console.log('mamy to', i)
          return setPoint(pointsList[i].howMamy);
        }
      }
    })
  });

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
      <div> Masz {point} z 12 Gwiazdek! </div>
      <div>Graj dalej aby zostać świetnym graczem w te gry!</div>
      <div> <NavLink to='/dashboard' >Moje konto</NavLink> </div>
    </div>
  )
}

export default IsUserActive;
