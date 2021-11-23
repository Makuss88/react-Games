import React, { useContext, useState, useEffect } from "react"
import { fire } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  const singup = (email, password) => {
    return fire.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {

  }, [])

  const value = {
    currentUser,
    singup
  }


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}