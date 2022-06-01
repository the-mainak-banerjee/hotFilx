import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Store/auth-context'
import useFirestoreData from '../Hooks/useFirestoreData'


export default function Hero({ apiUrl }) {

    const [movie, setMovie] = useState([]) 
    const [fullOverview, setFullOverview] = useState(false)
    const navigate = useNavigate()   
    const { user } = useAuth()

    const { programs, saveShow, deleteShow } = useFirestoreData(user?.email)
    
    const fetchMovie = useCallback (function(){
        axios.get(apiUrl).then((res) => {
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)])
        })
    }, [apiUrl])

    useEffect(()=>{
        fetchMovie()
    },[fetchMovie])

    const trunscateString = (str,length) => {
        if(str?.length > length){
            return str.slice(0,length) + '...'
        }else{
            return str;
        }
    }

    function handleFullOverview() {
        setFullOverview(prevState => !prevState)
    }

    function handlePlay(){
        navigate(`/home/${movie?.original_title || movie?.original_name}/${movie?.id}`)
    }

    function handleWatchLater(){
        saveShow(movie)
        setTimeout(() => {
            fetchMovie()
        },4000)
    }

    function handleRemoveFromWatchList() {
        deleteShow(movie?.id)
    }
    
  return (
    <section className='text-white w-full h-[600px] relative'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black p-2'></div>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.original_title || movie?.name} className='w-full h-full object-cover rounded-sm border-2'/>
      </div>
      <div className='absolute w-full top-[20%] p-5 md:p-16'>
          <h1 className='font-bold text-2xl'>{movie?.title || movie?.original_title || movie?.original_name}</h1>
          <p className='text-[#a1a1a1]'>Release Date {movie?.release_date || movie?.first_air_date} : Language {movie?.original_language}</p>
          <div className='my-4'>
                <button onClick={handlePlay} className="mr-2 bg-white px-6 py-1 rounded text-black font-bold hover:bg-[#1f80e0] hover:text-white">
                    Play
                </button>
                {programs.some(item => item.id===movie.id) && <button onClick={handleRemoveFromWatchList} className=" px-6 py-1 rounded text-white font-bold border-[1px] hover:bg-[#1f80e0] hover:border-black">
                    Remove From WatchList
                </button>
                }
                {!programs.some(item => item.id===movie.id) && <button onClick={handleWatchLater} className=" px-6 py-1 rounded text-white font-bold border-[1px] hover:bg-[#1f80e0] hover:border-black">
                    Watch Later
                </button>
                }
          </div>
          <div className='max-w-[80%] sm:max-w-[60%]'>
              {movie?.overview &&  <p>{fullOverview ? movie?.overview : trunscateString(movie?.overview,150)}<span className='text-gray-300 underline cursor-pointer' onClick={handleFullOverview}>{fullOverview ? '[Hide Extra]' : '[Show More]'}</span></p>}
          </div>
      </div>
    </section>
  )
}
