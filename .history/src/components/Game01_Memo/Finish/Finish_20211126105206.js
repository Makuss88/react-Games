import React, { useState } from 'react'

import { Div } from './FinishStyled'

const Finish = ({point}) => {
  const [flag, setFlag] = useState(false);

  return (
    <div >
      {flag ? <Div>WYGRANA</Div> : ''}
    </div>
  )
}

export default Finish
