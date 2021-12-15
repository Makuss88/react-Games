import { database, auth } from 'firebase';
import { useCallback } from 'react'

const usePostDB = () => {

  const postDB = useCallback(async (howMany) => {
    try {
      let userId = auth().currentUser.email;
      await database().ref('/points').once('value').then((snapshot) => {
        const username = (snapshot.val()) || 'Anonymous';
        const allUser = []
        for (const key in username) {
          allUser.push({ key, ...username[key] })
        }
        for (let i in allUser) {
          if (allUser[i].email === userId) {
            database().ref('points/' + allUser[i].key).set({
              email: userId,
              howMany: howMany
            }, (error) => {
              if (error) {
                console.log("dupa  post")
              } else {
                console.log("udało sie")
              }
            });
          }
          
        }
      });
    } catch (err) {
      console.log(err)
    }
  }, [])

  return {
    postDB: postDB
  }
}

export default usePostDB




