import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const IsUserDisactiv = () => {

  const styleDiv = {
    background: "white",
    borderRadius: "15px", maxWidth: '400px'
  }

  return (
    <div className='w-100' style={{ background: "white", borderRadius: "15px", maxWidth: '400px' }}>
      <p>Witaj przyjacielu na mojej stronie z grami!</p>
      <p>Możesz się <Button><Link to="/login" style={{ color: "white" }}>zalogować</Link></Button>
        ,<Button><Link to="/signup" style={{ color: "white" }}>zajerestrować</Link></Button></p>
      <p>lub zbierać punkty bez rejestracji. MIŁEGO!</p>
    </div>
  )
}

export default IsUserDisactiv;
