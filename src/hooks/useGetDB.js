import { database, auth } from 'firebase';
import { useCallback, useState } from 'react'

const useGetDB = () => {
  const [user, setUser] = useState();

  const getUser = useCallback(async () => {
    try {
      const userId = auth().currentUser.email;
      await database().ref('/points').once('value').then((snapshot) => {
        const username = (snapshot.val()) || 'Anonymous';
        const allUser = []
        for (const key in username) {
          allUser.push({ key, ...username[key] })
        }

        for (let i in allUser) {
          if (allUser[i].email === userId) {
            setUser(allUser[i].howMany)
          }
        }
      });
    } catch (err) {
      console.log(err)
    }
  }, [])

  return {
    user: user,
    getUser: getUser,
  }
}
export default useGetDB;