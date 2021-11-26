import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {

  const { currentUser } = useAuth()
  const points = [0, 0, 0, 1]
  const 


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
      <div> Masz 0 z 12 punktów! Graj dalej aby zostać świetnym graczen w te gry!</div>
    </div>
  )
}

export default IsUserActive;
