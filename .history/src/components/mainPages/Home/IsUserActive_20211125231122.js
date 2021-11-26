import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

import { useAuth } from '../../../context/AuthContext';

const IsUserActive = () => {


  const { currentUser } = useAuth()



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
      <div>Cześć c</div>
      <div>Możesz się <Button variant="success"><Link to="/login" style={styleLink}>zalogować</Link></Button>
        &nbsp;lub <Button variant="warning"><Link to="/signup" style={styleLink}>zajerestrować</Link></Button></div>
      <div>lub zbierać punkty bez rejestracji. MIŁEGO!</div>
    </div>
  )
}

export default IsUserActive;
