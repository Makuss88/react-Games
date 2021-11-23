import React, { useContext, useState, useEffect } from "react"
import { auto } from "../autobase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return auto.createUserWithEmailAndPassword(email, password)
  }

  const app = firebase.initializeApp({

  const value = {
    currentUser,
    signup,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}