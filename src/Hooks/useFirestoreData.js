import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../utils/Firebase';


const useFirestoreData = (userEmail) => {
    const [programs, setPrograms] = useState([])
    const showId = doc(db, "users", `${userEmail}`)

    async function saveShow (shows){
          try{
            if(userEmail){
              await updateDoc(showId, {
                savedShows: arrayUnion({
                  id: shows.id,
                  title: shows?.title || shows?.name,
                  image: shows?.poster_path
                })
              })
            }
            else {
              alert("Please Login To Save Shows")
            }
          }catch(error){
            alert(error.message) 

          }
        }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${userEmail}`), (doc) => {
            setPrograms(doc.data()?.savedShows)
        })
      },[userEmail])
    
    
      async function deleteShow(passesId) {
          try{
              const newShowList = programs.filter(item => item.id !== passesId)
              await updateDoc(showId, {
                  savedShows: newShowList
              })
          }catch(error){
              alert(error.message)
          }
      }



    return {
        programs,
        saveShow,
        deleteShow
    }
} 

export default useFirestoreData