import React from 'react';

import { useAuth } from '../../../context/AuthContext';
import Burger from './Burger';

import { NavStyled, User, SelectorStyled, UserFa } from './HeaderStyled';

const Header = () => {
  const { currentUser } = useAuth();
  let name;
  if (currentUser) {
    let tempName = currentUser.email.split("@");
    name = tempName[0]
  }

  return (
    <NavStyled>
      <Burger />
      <User>
        {currentUser ?
          <SelectorStyled>Witaj {name}!</SelectorStyled> :
          <SelectorStyled>Unknow User <UserFa /></SelectorStyled>
        }
      </User>
    </NavStyled >
  )
}

export default Header;