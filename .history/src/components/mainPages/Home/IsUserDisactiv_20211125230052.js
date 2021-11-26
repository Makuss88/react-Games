import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const IsUserDisactiv = () => {

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
      <div>Witaj przyjacielu na mojej stronie z grami!</div>
      <div>Możesz się <Button><Link to="/login" style={{ color: "white" }}>zalogować</Link></Button>
        &nbsp;lub <Button><Link to="/signup" style={{ color: "white" }}>zajerestrować</Link></Button></div>
      <div>lub zbierać punkty bez rejestracji. MIŁEGO!</div>
    </div>
  )
}

export default IsUserDisactiv;
