import React from 'react'
import { Route } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {currentUser}
  return (
    <Route {...rest} render={props =>{}}>

    </Route>
  )
}

export default PrivateRoute
