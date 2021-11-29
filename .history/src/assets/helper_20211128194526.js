import React, { useMemo } from 'react';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';

const iconGood = useMemo(() => {
  return <img src={icon2} alt="goodIcon" style={{ paddingBottom: "10px" }} />
}, [])

const iconBad = useMemo(() => {
  return <img src={icon1} alt="badIcon" style={{ paddingBottom: "10px" }} />
}, [])