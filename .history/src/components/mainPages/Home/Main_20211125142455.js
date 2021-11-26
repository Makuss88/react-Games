import React from 'react'

import { useAuth } from '../../../context/AuthContext';


const Main = () => {

  const { currentUser } = useAuth();




  return (
    <>
      {currentUser ? "ok" : 'Witaj przyjacielu na mojej stronie z grami! Możesz się zalogować, lub zbierać punkt'}
    </>
  )
}

export default Main
