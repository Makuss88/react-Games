import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const { currentUser } = useAuth()
  const pointsArray = [0, 2, 1, 1]; // będzie przekazywane
  var sum = pointsArray.reduce((prev, curr) => {
    return prev + curr;
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

  const styleLink = {
    color: "white",
    fontSize: "26px",
    textDecoration: 'none',
  }

  return (
    <div style={styleDiv}>
      <div>Cześć {currentUser.email}</div>
      <div> Masz {sum} z 12 punktów! Graj dalej aby zostać świetnym graczen w te gry!</div>
      <div> <NavLink DASHBOARD </div>
    </div>
  )
}

export default IsUserActive;
