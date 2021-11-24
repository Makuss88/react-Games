import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()
  return (
    <Route {...rest} render={props => {
      { console.log(currentUser) 
      return currentUser ? <Component {...props} /> : <Redirect to="/signup" />
    }}>

    </Route>
  )
}

export default PrivateRoute
