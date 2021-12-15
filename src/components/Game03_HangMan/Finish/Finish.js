import React, { useState, useEffect } from 'react'

import { DivComponent } from './FinishStyled'

import useGetDB from '../../../hooks/useGetDB';
import usePostDB from '../../../hooks/usePostDB';

const Finish = ({ moves, isWin, GAME_ROLES, handleRestart, isStarted }) => {
  const [point, setPoint] = useState(0);
  const { user, getUser } = useGetDB();
  const { postDB } = usePostDB();

  useEffect(() => {
    if (isStarted) {
      if (isWin) {
        getUser()
      }
    }
    if (moves <= GAME_ROLES[0]) {
      setPoint(3)
    } else if (moves <= GAME_ROLES[1]) {
      setPoint(2)
    } else {
      setPoint(1)
    }
  }, [GAME_ROLES, isWin, moves, point, getUser, isStarted])

  useEffect(() => {
    if (user) {
      let how = {
        game1: user.game2,
        game2: user.game2,
        game3: point,
        game4: user.game4,
      }
      if (isWin) {
        postDB(how)
      }
    }
  }, [user, point, postDB, isWin])

  return (
    <div >
      {isWin ?
        <DivComponent><div>WYGRANA</div><button onClick={handleRestart}>JAHU!</button></DivComponent> :
        null
      }
    </div >
  )
}

export default Finish;
