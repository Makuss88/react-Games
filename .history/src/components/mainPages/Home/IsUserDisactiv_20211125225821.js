import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const IsUserDisactiv = () => {

  const styleDiv = {
    background: "white",
    borderRadius: "15px",
    width: '500px',
    padding: "50px",
    textAlign: 'center',
  }

  return (
    <div style={styleDiv}>
      <span>Witaj przyjacielu na mojej stronie z grami!</span>
      <spanp>Możesz się <Button><Link to="/login" style={{ color: "white" }}>zalogować</Link></Button>
        &nbsp;lub <Button><Link to="/signup" style={{ color: "white" }}>zajerestrować</Link></Button></spanp>
      <p>lub zbierać punkty bez rejestracji. MIŁEGO!</p>
    </div>
  )
}

export default IsUserDisactiv;
