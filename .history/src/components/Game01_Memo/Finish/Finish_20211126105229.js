import React, { useState } from 'react'

import { Div } from './FinishStyled'

const Finish = ({points}) => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (poinst )
    return () => {
      cleanup
    }
  }, [input])

  return (
    <div >
      {flag ? <Div>WYGRANA</Div> : ''}
    </div>
  )
}

export default Finish
