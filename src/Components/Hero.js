import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import requests from '../Resources/Requests'

export default function Hero({ apiUrl }) {

    const [movies, setMovies] = useState([]) 
    const [fullOverview, setFullOverview] = useState(false)
    const navigate = useNavigate()   
    
    useEffect(()=>{
        function fetchMovie(){
            axios.get(apiUrl).then((res) => {
                setMovies(res.data.results[Math.floor(Math.random() * res.data.results.length)])
            })
        }
        fetchMovie()
    },[apiUrl])

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
        navigate(`/home/${movies?.original_title || movies?.original_name}/${movies?.id}`)
    }
    
  return (
    <section className='text-white w-full h-[600px] relative'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black p-2'></div>
        <img src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.original_title || movies?.name} className='w-full h-full object-cover rounded-sm border-2'/>
      </div>
      <div className='absolute w-full top-[20%] p-5 md:p-16'>
          <h1 className='font-bold text-2xl'>{movies?.title || movies?.original_title || movies?.original_name}</h1>
          <p className='text-[#a1a1a1]'>Released {movies?.release_date || movies?.first_air_date} : Language {movies?.original_language}</p>
          <div className='my-4'>
                <button onClick={handlePlay} className="mr-2 bg-white px-6 py-1 rounded text-black font-bold hover:bg-[#1f80e0] hover:text-white">
                    Play
                </button>
                <button className=" px-6 py-1 rounded text-white font-bold border-[1px] hover:bg-[#1f80e0] hover:border-black">
                    Watch Later
                </button>
          </div>
          <div className='max-w-[80%] sm:max-w-[60%]'>
              {movies?.overview &&  <p>{fullOverview ? movies?.overview : trunscateString(movies?.overview,150)}<span className='text-gray-300 underline cursor-pointer' onClick={handleFullOverview}>{fullOverview ? '[Hide Extra]' : '[Show More]'}</span></p>}
          </div>
      </div>
    </section>
  )
}
