import React, { useState, useEffect } from 'react'

import { Div } from './FinishStyled'

const Finish = ({ points }) => {

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (points === 9) {
      
    }
  }, [input])

  return (
    <div >
      {flag ? <Div>WYGRANA</Div> : ''}
    </div>
  )
}

export default Finish
