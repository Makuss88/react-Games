import React, { useState, useEffect } from 'react'

import { Div } from './FinishStyled'

const Finish = ({ points }) => {
  const MAX_POINTS = 9
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (points === MA) {
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
