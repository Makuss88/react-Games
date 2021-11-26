import React from 'react'



const IsUserNotInMyApp = () => {
  return (
    <div className='w-100' style={{ maxWidth: '400px' }}>Witaj przyjacielu na mojej stronie z grami! Możesz się <Link to="/login">zalogować</Link>, <Link to="/signup">zajerestrować</Link> lub zbierać punkty bez rejestracji. MIŁEGO</div>
  )
}

export default IsUserNotInMyApp;
