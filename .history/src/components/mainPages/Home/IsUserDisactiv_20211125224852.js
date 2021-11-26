import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const IsUserDisactiv = () => {
  return (
    <div className='w-100' style={{ maxWidth: '400px' }}>
      <p>Witaj przyjacielu na mojej stronie z grami!</p>
      Możesz się <Button><Link to="/login" style={{ color: "white" }}>zalogować</Link></Button>
      ,<Button><Link to="/signup" style={{ color: "white" }}>zajerestrować</Link></Button>
      lub zbierać punkty bez rejestracji. MIŁEGO!
    </div>
  )
}

export default IsUserDisactiv;
