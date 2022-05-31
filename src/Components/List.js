import React, { useEffect, useState } from 'react'
import Shows from './Shows'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import axios from 'axios'
// import requests from '../Resources/Requests'

function List( {title,apiUrl, rowId}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        function fetchMovie(){
            axios.get(apiUrl).then((res) => {
                setMovies(res.data.results)
            })
        }
        fetchMovie()
    },[apiUrl])

    function slideLeft(){
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 250
    }

    function slideRight(){
        let slider = document.getElementById('slider'+rowId)
        slider.scrollLeft = slider.scrollLeft + 250
    }

    let displayShowsCard = movies.map(item=>{
        return(
            <Shows 
                key={item.id}
                shows={item}
            />
        )
    })

  return (
    <section className='text-white py-5 md:px-16 md:pt-16'>
        <h2 className='font-bold text-2xl mb-5 pl-4'>{title}</h2>
        <div className='relative flex items-center group'>
        <AiFillLeftCircle 
            onClick= {slideLeft}
            className='cursor-pointer z-10 opacity-50 hover:opacity-100 absolute left-0 hidden group-hover:block'
            size={40}
        />
        <div id={'slider' + rowId} className='p-4 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
            {displayShowsCard}
        </div>
        <AiFillRightCircle
            onClick={slideRight}
            className='cursor-pointer z-10 opacity-50 hover:opacity-100 absolute right-0 hidden group-hover:block'
            size={40}
        />
        </div>
    </section>
  )
}

export default List
