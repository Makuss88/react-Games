import React, { useState, useEffect } from 'react'

import { Div } from './FinishStyled'

const Finish = ({ points }) => {

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (points === ) {
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
