import React from 'react'

import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './HeaderStyled.css';

const Header = () => {
  return (
    <Nav variant="pills" className="justify-content-center nav" >
      <Nav.Item>
        <NavLink to="/home" className='nav-link'>HOME</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/memo" className='nav-link'>MEMO</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/slider" className='nav-link'>SLIDER</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/hangman" className='nav-link'>HANGMAN</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/tictactoe" className='nav-link'>TIC_TAK_TOE</NavLink>
      </Nav.Item>
    </Nav>
  )
}

export default Header
