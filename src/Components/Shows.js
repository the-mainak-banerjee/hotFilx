import React, { useState, useEffect } from 'react'
import { useAuth } from '../Store/auth-context'
import { db } from '../Resources/Firebase'
import { doc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Shows( {shows}) {
  const [movies,setMovies] = useState([])
  const { user } = useAuth();
  const navigate = useNavigate()

  const showId = doc(db, 'users', `${user?.email}`)

  async function saveShow (){
    if(user?.email){
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
  }

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows)
    })
  },[user?.email])


  async function deleteShow(passesId) {
      try{
          const newShowList = movies.filter(item => item.id !== passesId)
          await updateDoc(showId, {
              savedShows: newShowList
          })
      }catch(error){
          alert(error)
      }
  }
  

  function showTrailer() {
      navigate(`/home/${shows?.title || shows?.original_name}/${shows?.id}`)
  }

  return (
    <div 
        className='text-white w-[150px] sm:w-[200px] md:w-[250px] inline-block cursor-pointer relative hover:scale-110 mr-6'
    >
      <img 
        className='w-full h-auto block rounded-md' 
        src={`https://image.tmdb.org/t/p/w500/${shows?.poster_path}`} 
        alt={shows?.title || shows?.name}
      />
      <div 
        className='absolute top-0 left-0 w-full h-full flex items-start justify-center pl-2 flex-col opacity-0 hover:opacity-100 hover:bg-black/80 whitespace-normal'>
          <h2 
            className='font-bold text-xl md:text-2xl pt-20'>
            {shows?.title || shows?.original_title || shows?.original_name}
          </h2>
          <p 
            className='text-gray-100 text-[10px] md:text-xs'>
            {shows?.first_air_date ? `First Aired: ${shows?.first_air_date}` : `Release Date: ${shows?.release_date}`}
          </p>
          <p 
            className='text-[10px]'>
            {shows?.overview.slice(0,100) + "..."}
          </p>
          <h4 onClick={movies?.some(e=> e.id===shows.id) ? () => deleteShow(shows?.id) : saveShow}
            className='font-bold text-gray-300 sm:text-[10px] md:text-[15px] self-center hover:bg-slate-500 py-1 px-3 lg:mt-2 rounded-md'>
            {movies?.some(e=> e.id===shows.id) ? 'Remove From WatchList' : 'Add To WatchList'}
         </h4>
          <h4 
            onClick={showTrailer}
            className='font-bold text-gray-300 sm:text-[10px] md:text-[15px] self-center hover:bg-slate-500 py-1 px-3 lg:mt-2 rounded-md'>
            Watch Trailer
         </h4>
      </div>
    </div>
  )
}

export default Shows


