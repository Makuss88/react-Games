import React, { useContext, useState, useEffect } from "react";
import { auth, app } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    localStorage.setItem('email', email);
    const cat = localStorage.getItem('email');
    console.log(cat)
    const db = app.database().ref("points")
    const user = {
      howMany: {
        game1: 0,
        game2: 0,
        game3: 0,
        game4: 0,
      },
      email: email,
    }
    db.push(user)

    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) => {
    localStorage.setItem('email', email);
    const cat = localStorage.getItem('email');
    console.log(cat)
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => {
    localStorage.clear();
    return auth.signOut();
  }

  const resetPass = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  }

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
      setCurrentUser(user);
    })
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPass,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};