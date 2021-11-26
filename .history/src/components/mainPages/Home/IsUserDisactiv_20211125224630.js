import React from 'react'

import { Link } from 'react-router-dom';


const IsUserDisactiv = () => {
  return (
    <div className='w-100' style={{ maxWidth: '400px' }}>
      Witaj przyjacielu na mojej stronie z grami! Możesz się
      <Button><Link to="/login">zalogować</Link> </Button>,
      <Link to="/signup">zajerestrować</Link>
      lub zbierać punkty bez rejestracji. MIŁEGO!
    </div>
  )
}

export default IsUserDisactiv;
