import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('')
  const [loading, setLoading] = useState(true)


  function signup(email, password) {
    // console.log('signup')
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (ema) => {

  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      // console.log('effect')
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}