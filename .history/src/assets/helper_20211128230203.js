import React, { useMemo, useState, useEffect } from 'react';

import icon1 from '../components/images/icon1.png';
import icon2 from '../components/images/icon2.png';

export const STAR_COMPONENT = ({ isWin, moves, gamesRule }) => {

  const [star, setStar] = useState('');

  const iconGood = useMemo(() => {
    return <img src={icon2} alt="goodIcon" style={{ paddingBottom: "10px" }} />
  }, [])

  const iconBad = useMemo(() => {
    return <img src={icon1} alt="badIcon" style={{ paddingBottom: "10px" }} />
  }, [])

  useEffect(() => {
    if (isWin) {
      if (moves <= gamesRule[0]) {
        setStar(<span>{iconGood} {iconGood}  {iconGood}</span>)
      } else if (moves <= gamesRule[1]) {
        setStar(<span>{iconGood} {iconGood} {iconBad}</span>)
      } else {
        setStar(<span>{iconGood} {iconBad} {iconBad}</span>)
      }
    } else {
      setStar(<span>{iconBad} {iconBad} {iconBad}</span>)
    }
  }, [isWin, moves, iconGood, iconBad, gamesRule])

  return star;
}

export const UPGRADE_STAR_COMPONENT = ({game, isWin}) => {

  if (isWin) {
    const starRef = firebase.database().ref.
  }

}