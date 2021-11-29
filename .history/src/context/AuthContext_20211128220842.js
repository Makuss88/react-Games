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
    const db = app.database().ref("points")
    const user = {
      howMamy: {
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
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => {
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