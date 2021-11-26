import React, { useState, useEffect } from 'react'

import { DivComponent } from './FinishStyled'

const MAX_POINTS = 9;

const Finish = ({ points }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (points === MAX_POINTS) {
      setFlag(true)
    }
    else {
      setFlag(false)
    }
  }, [points])

  return (
    <div >
      {flag ? <DivComponent>WYGRANA</DivComponent> : ''}
    </div>
  )
}

export default Finish;
