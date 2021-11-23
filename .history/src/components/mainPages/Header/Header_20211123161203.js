import React from 'react'

import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext'

import './HeaderStyled.css';



const Header = () => {

  const { currentUser } = useAuth()
  return (
    <Nav variant="pills" className="justify-content-center nav" >
      <NavLink to="/" exact className='nav-link'>HOME</NavLink>
      <NavLink to="/memo" className='nav-link'>MEMO</NavLink>
      <NavLink to="/slider" className='nav-link'>SLIDER</NavLink>
      <NavLink to="/hangman" className='nav-link'>HANGMAN</NavLink>
      <NavLink to="/tictactoe" className='nav-link'>TIC_TAK_TOE</NavLink>
      <div>{currentUser.email}</div>
    </Nav>
  )
}

export default Header
