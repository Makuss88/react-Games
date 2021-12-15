import React, { useState, useEffect } from 'react'

import { DivComponent } from './FinishStyled'

import useGetDB from '../../../hooks/useGetDB';
import usePostDB from '../../../hooks/usePostDB';

const Finish = ({ moves, isWin, isStarted, GAME_ROLES, handleRestart }) => {
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
        game1: user.game1,
        game2: point,
        game3: user.game3,
        game4: user.game4,
      }
      if (isWin) {
        postDB(how)
      }
    }
  }, [user, point, postDB, isWin])

  return (
    <div >
      {isWin && isStarted ?
        <DivComponent><div>WYGRANA</div><button onClick={handleRestart}>JAHU!</button></DivComponent> :
        null
      }
    </div >
  )
}

export default Finish;
