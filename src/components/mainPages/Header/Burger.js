import React, { useState } from 'react'

import { StyledBurger } from './HeaderStyled'
import RightBar from './RigthBar';

const Burger = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightBar open={open} />
    </>
  )
}

export default Burger
