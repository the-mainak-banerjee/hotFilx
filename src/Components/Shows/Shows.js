import { useAuth } from '../../Store/auth-context'
import { useNavigate } from 'react-router-dom'
import useFirestoreData from '../../Hooks/useFirestoreData'
import React from 'react';

function Shows( {show}) {
  const { user } = useAuth();
  const navigate = useNavigate()

  const {programs, saveShow, deleteShow} = useFirestoreData(user?.email)
  

  function showTrailer() {
      navigate(`/home/${show?.title || show?.original_name}/${show?.id}`)
  }

  console.log('Show')

  return (
    <div 
        className='text-white w-[150px] sm:w-[200px] md:w-[250px] inline-block cursor-pointer relative hover:scale-110 mr-6'
    >
      <img 
        className='w-full h-auto block rounded-md' 
        src={`https://image.tmdb.org/t/p/w500/${show?.poster_path}`} 
        alt={show?.title || show?.name}
      />
      <div 
        className='absolute top-0 left-0 w-full h-full flex items-start justify-center pl-2 flex-col opacity-0 hover:opacity-100 hover:bg-black/80 whitespace-normal'>
          <h2 
            className='font-bold text-xl md:text-2xl pt-20'>
            {show?.title || show?.original_title || show?.original_name}
          </h2>
          <p 
            className='text-gray-100 text-[10px] md:text-xs'>
            {show?.first_air_date ? `First Aired: ${show?.first_air_date}` : `Release Date: ${show?.release_date}`}
          </p>
          <p 
            className='text-[10px]'>
            {show?.overview.slice(0,100) + "..."}
          </p>
          <h4 onClick={programs?.some(e=> e.id===show.id) ? () => deleteShow(show?.id) : () => saveShow(show)}
            className='font-bold text-gray-300 sm:text-[10px] md:text-[15px] self-center hover:bg-slate-500 py-1 px-3 lg:mt-2 rounded-md'>
            {programs?.some(e=> e.id===show.id) ? 'Remove From WatchList' : 'Add To WatchList'}
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



