import React from 'react'

import { useAuth } from '../../../context/AuthContext';


const Main = () => {

  const { currentUser } = useAuth();


  return (
    <>
      {currentUser ? "ok" : <div></div>'Witaj przyjacielu na mojej stronie z grami! Możesz się zalogować, lub zbierać punkty bez rejestracji. MIŁEGO'}
    </>
  )
}

export default Main
