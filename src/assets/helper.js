import React, { useMemo, useState, useEffect } from 'react';

import styled from 'styled-components'

import icon1 from '../components/images/icon1.png';
import icon2 from '../components/images/icon2.png';

const Img = styled.img`
  width: 40px;
  padding-bottom: 10px;
`;


export const STAR_COMPONENT = ({ isWin, moves, GAME_ROLES, isStarted }) => {
  const [star, setStar] = useState('');
  const iconGood = useMemo(() => {
    return <Img src={icon2} alt="goodIcon" />
  }, [])
  const iconBad = useMemo(() => {
    return <Img src={icon1} alt="badIcon" />
  }, [])


  useEffect(() => {
    if (isWin && isStarted) {
      if (moves <= GAME_ROLES[0]) {
        setStar(<span>{iconGood} {iconGood}  {iconGood}</span>)
      } else if (moves <= GAME_ROLES[1]) {
        setStar(<span>{iconGood} {iconGood} {iconBad}</span>)
      } else if (moves <= 999) {
        setStar(<span>{iconGood} {iconBad} {iconBad}</span>)
      }
    } else {
      return setStar(<span>{iconBad} {iconBad} {iconBad}</span>)
    }
  }, [isWin, moves, GAME_ROLES, iconBad, iconGood, isStarted])

  return star;
}
