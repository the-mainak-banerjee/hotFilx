import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
// import List from '../Components/List'
import Navbar from '../Components/Navbar'
import requests from '../Resources/Requests'
import movieTrailer from 'movie-trailer'

function Trailer() {
    const [showDetails, setShowDetails] = useState()
    const [trailerUrl,setTrailerUrl] = useState("")
    const [showOverview, setShowOverview] = useState(false)
    const params = useParams()
    const apiUrl = requests.moviesDetails(params.showId)
    

    useEffect(() => {
        function fetchMovie(){
            axios.get(apiUrl).then((res) => {
                setShowDetails(res.data)
            })
        }
        fetchMovie()
    },[apiUrl])

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };

    movieTrailer(showDetails?.original_title || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
    }).catch(() => console.log("Temporary Unavailable"))


    function handleOverview(){
        setShowOverview(prevState => !prevState)
    }

  return (
    <>
      <Navbar />
      <section className='text-white w-full h-[600px] mb-10'>
            <div className='w-full h-full'>
                <YouTube videoId={trailerUrl} opts={opts} />
                 <div className='w-[90%] md:px-16'>
                    <h2 className='font-bold text-2xl pl-4 pt-4 '>{showDetails?.title || showDetails?.original_title || params.showTitle}</h2>
                    {showDetails && <p className='pl-4 pt-0 text-gray-500'>Released: {showDetails?.release_date}</p>}
                    {showDetails && <p className='mb-5 md:mb-10 pl-4 py-2'>{showOverview ? showDetails?.overview : showDetails?.overview.slice(0,125) + "..."}<span onClick={handleOverview} className='text-red-500 underline cursor-pointer'>{showOverview ? '[Hide More]' : '[Show More]'}</span></p>}
                </div>
                <hr />
            </div>
      </section>
      
      {/* <div className='mt-[350px] pt-10 md:mt-20 md:pt-10'>
        <List
            rowId='1'
            title={'Trending Movies'}
            apiUrl={requests.trendingMovies}
        />
          
      </div> */}
    
    </>
  )
}

export default Trailer
