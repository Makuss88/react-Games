import React, { useState } from 'react'

import { } from './FinishStyled'

const Finish = (props) => {
  const [flag, setFlag] = useState(false);

  return (
    <div >
      {flag ? <div>WYGRANA</div> : ''}
    </div>
  )
}

export default Finish
