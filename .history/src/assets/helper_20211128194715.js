import React, { useMemo, useState, useEffect } from 'react';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';

export const STAR_COMPONENT = ({ isWin, moves }) => {
  
  
  const iconGood = useMemo(() => {
    return <img src={icon2} alt="goodIcon" style={{ paddingBottom: "10px" }} />
  }, [])

  const iconBad = useMemo(() => {
    return <img src={icon1} alt="badIcon" style={{ paddingBottom: "10px" }} />
  }, [])


  const [star, setStar] = useState('');


  useEffect(() => {

    if (isWin) {
      if (moves <= 17) {
        setStar(<span>{iconGood} {iconGood}  {iconGood}</span>)
      } else if (moves <= 22) {
        setStar(<span>{iconGood} {iconGood} {iconBad}</span>)
      } else {
        setStar(<span>{iconGood} {iconBad} {iconBad}</span>)
      }
    } else {
      setStar(<span>{iconBad} {iconBad} {iconBad}</span>)
    }

  }

}