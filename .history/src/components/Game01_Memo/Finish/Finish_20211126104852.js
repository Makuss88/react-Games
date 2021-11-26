import React, { useState } from 'react'



const Finish = (props) => {
  const [flag, setFlag] = useState(false);
  
  return (
    <div >
      {flag ? <div>WYGRANA</div> : ''}
      WYGRANA
    </div>
  )
}

export default Finish
