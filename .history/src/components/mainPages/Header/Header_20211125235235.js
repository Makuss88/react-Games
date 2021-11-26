import React, { useState } from 'react';
import { FaUserAltSlash } from 'react-icons/fa'

import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';

import './HeaderStyled.css';

const Header = () => {

  const sum = 4;
  const [text, setText] = useState('punktów');
  if (sum === 1) {
    setText('punkt')
  } else if (sum === 2 || sum === 3 || sum === 4) {
    setText('punkty')
  }

  const { currentUser } = useAuth();
  let name;
  if (currentUser) {
    name = currentUser.email.split("@");
  }
  return (
    <div>
      <Nav variant="pills" className="justify-content-center nav" >
        <NavLink to="/" exact className='nav-link'>HOME</NavLink>
        <NavLink to="/memo" className='nav-link'>MEMO</NavLink>
        <NavLink to="/slider" className='nav-link'>SLIDER</NavLink>
        <NavLink to="/hangman" className='nav-link'>HANGMAN</NavLink>
        <NavLink to="/tictactoe" className='nav-link'>TIC_TAK_TOE</NavLink>
        <div className='user'>
          {currentUser ?
            <p>Witaj {name[0]} - masz już {sum} {text}! </p> :
            <p>Unknow User <FaUserAltSlash style={{ marginLeft: '15px', marginBottom: "5px" }} /></p>
          }
        </div>
      </Nav >
    </div >
  )
}

export default Header;