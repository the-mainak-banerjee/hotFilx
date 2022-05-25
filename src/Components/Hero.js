import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Resources/Requests'

export default function Hero() {

    const [movies, setMovies] = useState([])
    // const movie = []

    // for (let i=0; i<3; i++){
    //     let randomNumber = Math.floor(Math.random() * movies.length)
    //     movie.push(movies[randomNumber])
    // }

    
    const movie= movies[Math.floor(Math.random() * movies.length)]
    console.log(movies)
    console.log(movie)
    
    useEffect(()=>{
        axios.get(requests.popularMovies).then((res) =>{
            setMovies(res.data.results)
        })
        console.log('Axios')
    },[])
    
    const trunscateString = (str,length) => {
        if(str.length > length){
            return str.slice(0,length) + '...'
        }else{
            return str;
        }
    }
    
  return (
    <section className='text-white w-full h-[550px]'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black p-2'></div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.original_title} className='w-full h-full md:object-cover rounded-sm border-2'/>
      </div>
      <div className='absolute w-full top-[20%] p-5 md:p-16'>
          <h1 className='font-bold text-2xl'>{movie?.title}</h1>
          <p className='text-[#a1a1a1]'>Released {movie?.release_date} : Language {movie?.original_language}</p>
          <div className='my-4'>
              <button className="mr-2 bg-white px-6 py-1 rounded text-black font-bold hover:bg-[#1f80e0] hover:text-white">Play</button>
              <button className=" px-6 py-1 rounded text-white font-bold border-[1px] hover:bg-[#1f80e0] hover:border-black">Watch Later</button>
          </div>
          <div className='md:w-[50%]'>
              <p>{trunscateString(movie?.overview,150)}</p>
          </div>
      </div>
    </section>
  )
}
