import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom';
import { app } from '../../../firebase';
import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const { currentUser } = useAuth()
  const pointsArray = [0, 2, 1, 1]; // będzie przekazywane
  var sum = pointsArray.reduce((prev, curr) => {
    return prev + curr;
  });

  useEffect(() => {
    const dupa = app.database().ref('points');
    dupa.on('value', (point) => {
      const points = 
      
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
      <div> Masz {sum} z 12 Gwiazdek! </div>
      <div>Graj dalej aby zostać świetnym graczem w te gry!</div>
      <div> <NavLink to='/dashboard' >Moje konto</NavLink> </div>
    </div>
  )
}

export default IsUserActive;
