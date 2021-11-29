import React, { useMemo, useState, useEffect } from 'react';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';

export const STAR_COMPONENT = ({ isWin, moves }) => {

  const [star, setStar] = useState('');

  const iconGood = useMemo(() => {
    return <img src={icon2} alt="goodIcon" style={{ paddingBottom: "10px" }} />
  }, [])

  const iconBad = useMemo(() => {
    return <img src={icon1} alt="badIcon" style={{ paddingBottom: "10px" }} />
  }, [])




  useEffect(() => {

    if (isWin) {
      if (moves <= 17) {
        return setStar(<span>{iconGood} {iconGood}  {iconGood}</span>)
      } else if (moves <= 22) {
        return setStar(<span>{iconGood} {iconGood} {iconBad}</span>)
      } else {
        return setStar(<span>{iconGood} {iconBad} {iconBad}</span>)
      }
    } else {
      setStar(<span>{iconBad} {iconBad} {iconBad}</span>)
    }

  }, []}
}