import React, { useState } from 'react'

import { Div } from './FinishStyled'

const Finish = (props) => {
  const [flag, setFlag] = useState();

  return (
    <div >
      {flag ? <Div>WYGRANA</Div> : ''}
    </div>
  )
}

export default Finish
