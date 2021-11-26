import React from 'react'

import { useAuth } from '../../../context/AuthContext';


const Main = () => {

  const { currentUser } = useAuth();
  
  return (
    <>
     {currentUser ? "ok" : 'nie ma '} 
    </>
  )
}

export default Main
