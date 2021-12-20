import styled from "styled-components";

import { NavLink } from 'react-router-dom';
import { FaUserAltSlash } from 'react-icons/fa';
import { device } from '../../../assets/device';

export const NavStyled = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(184, 184, 184);
  border-radius: 15px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  } 
`;

export const NavStyledRight = styled.ul`
  padding: 10px 15px 0 15px;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: blue;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;


export const LinkElem = styled(NavLink)`
  margin: 0 20px;
  padding: 10px 20px; 
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  

  &.active {
    background: blue;
    color: white;
    border-radius: 15px;
  }

  &:hover {
    background: blue;
    color: white;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    color: white;
    margin-top: 10px;
   
    &.active {
      background: white;
      color: blue;
      border-radius: 15px;
    }

    &:hover {
      background: white;
      color: blue;
      border-radius: 15px;
    }
  }
`;

export const User = styled.div`
  font-size: 20px;
  padding-right: 200px;
  padding-top: 25px;
`;

export const SelectorStyled = styled.p`
  margin-bottom: 0;
  margin-left: 40px;
`;

export const UserFa = styled(FaUserAltSlash)`
  margin-left: 15px;
  margin-bottom: 5px;
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 120px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media(max-width: 768px){
    display:flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'blue'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
    }
    
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1}
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`;


