import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
// import List from '../Components/List'
import Navbar from '../../Components/UI/Navbar'
import requests from '../../utils/Requests'
import movieTrailer from 'movie-trailer'

function Trailer() {
    const [showDetails, setShowDetails] = useState()
    const [trailerId,setTrailerId] = useState("")
    const [showOverview, setShowOverview] = useState(false)
    const params = useParams()
    const apiUrl = requests.moviesDetails(params.showId)
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };

    let showTitle 
    
    useEffect(() => {
        function fetchMovie(){
            axios.get(apiUrl).then((res) => {
                setShowDetails(res.data)
            }).catch((error) => {
                console.log(error)
            })            
        }
        fetchMovie()
    },[apiUrl])
    
    
    movieTrailer(params.showTitle || '').then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerId(urlParams.get('v'))
    }).catch(() => console.log("Temporary Unavailable"))


    function handleOverview(){
        setShowOverview(prevState => !prevState)
    }

    if(showDetails?.title === showDetails?.original_title){
        showTitle = showDetails?.title || showDetails?.original_title
    }else{
        showTitle = `${showDetails?.title} (${showDetails?.original_title})`
    }

  return (
    <>
      <Navbar />
      <section className='text-white w-full h-[400px] mb-10'>
            <div className='w-full h-full'>
                <YouTube videoId={trailerId} opts={opts} />
                 <div className='w-[90%] h-full md:px-16'>
                    <h2 className='font-bold text-2xl pl-4 pt-4 '>{showDetails?.original_title === params.showTitle ? showTitle : params.showTitle}</h2>
                    {showDetails?.original_title === params.showTitle && <p className='pl-4 pt-0 text-gray-500'>Release Date: {showDetails?.release_date}</p>}
                    {showDetails?.original_title === params.showTitle && <p className='mb-5 md:mb-10 pl-4 py-2'>{showOverview ? showDetails?.overview +'   ' : showDetails?.overview.slice(0,125) + "...   "}<span onClick={handleOverview} className='text-[#0c549c] underline cursor-pointer hover:font-bold hover:text-[#1f80e0]'>{showOverview ? '[Hide More]' : '[Show More]'}</span></p>}
                </div>
                <hr />
            </div>
      </section>    
    </>
  )
}

export default Trailer
