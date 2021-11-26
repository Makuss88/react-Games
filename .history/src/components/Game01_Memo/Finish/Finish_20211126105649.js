import React, { useState, useEffect } from 'react'

import { Div } from './FinishStyled'
const MAX_POINTS = 9

const Finish = ({ points }) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (points === MAX_POINTS) {
      setFlag(true)
    }
  }, [points])

  return (
    <div >
      {flag ? <Div>WYGRANA</Div> : ''}
    </div>
  )
}

export default Finish
