import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom';
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const { currentUser } = useAuth()
  const pointsList = [];
  useEffect(() => {
    const dupa = app.database().ref('points');
    dupa.on('value', (point) => {
      const points = point.val();

      for (let id in points) {
        pointsList.push(points[id])
      }
      console.log(pointsList.l)
      console.log(pointsList[0].howMamy)

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
      <div> Masz {pointsList[0]} z 12 Gwiazdek! </div>
      <div>Graj dalej aby zostać świetnym graczem w te gry!</div>
      <div> <NavLink to='/dashboard' >Moje konto</NavLink> </div>
    </div>
  )
}

export default IsUserActive;
