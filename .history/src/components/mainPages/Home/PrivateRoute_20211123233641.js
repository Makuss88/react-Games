import React from 'react'
import { Route } from 'react-router-dom';
import {use}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props =>{}}>

    </Route>
  )
}

export default PrivateRoute
