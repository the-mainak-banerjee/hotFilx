import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/auth-context'
import { db } from '../Resources/Firebase'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



function FavouriteShows() {
    const [shows,setShows] = useState([])
    const { user } = useAuth()
    const navigate = useNavigate()

    function slideLeft(){
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 250
    }

    function slideRight(){
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 250
    }
   
    const showId = doc(db, 'users', `${user?.email}`)

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setShows(doc.data()?.savedShows)
        })
    },[user?.email])
    


    async function deleteShow(passesId) {
        try{
            const newShowList = shows.filter(item => item.id !== passesId)
            await updateDoc(showId, {
                savedShows: newShowList
            })
        }catch(error){
            alert(error)
        }
    }

    function showTrailer(item) {
        navigate(`/home/${item?.title}/${item?.id}`)
    }

    const displayShowsCard = shows.map(item=> {
        return (
            <div 
                key={item.id}
                className='text-white w-[150px] sm:w-[200px] md:w-[250px] inline-block cursor-pointer relative mr-6'
            >
                <img 
                    className='w-full h-auto block rounded-md' 
                    src={`https://image.tmdb.org/t/p/w500/${item?.image}`} 
                    alt={item?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white whitespace-normal'>
                    <div className='flex justify-center items-center flex-col h-full'>
                        <p className='white-space-normal text-xs md:text-sm font-bold text-center'>
                        {item?.title}
                        </p>
                        <h4 
                            onClick={() => showTrailer(item)}
                            className='font-bold text-gray-300 sm:text-[10px] md:text-[15px] hover:bg-slate-500 py-1 px-3 lg:mt-2 rounded-md'>
                            Watch Trailer
                        </h4>

                    </div>
                    <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
              </div>
            </div>
        )
    })

    return(
        <section className='text-white p-5 md:px-16 md:pt-16'>
            <h2 className='font-bold text-3xl md:mb-5 md:mt-0 md:pl-4 relative mt-20 pl-4 bg-[#1f80e0] py-2'>My WatchList</h2>
            {shows.length === 0 && <h4 className='relative text-xl md:mb-5 md:mt-0 md:pl-4 mt-20 pl-4'>Your WatchList Is Empty</h4>}
            {shows.length > 0 && <div className='relative flex items-center group'>
                <AiFillLeftCircle 
                    onClick= {slideLeft}
                    className='cursor-pointer z-10 opacity-50 hover:opacity-100 absolute left-0 hidden group-hover:block'
                    size={40}
                />
                <div id={'slider'} className='p-4 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
                    {displayShowsCard}
                </div>
                <AiFillRightCircle
                    onClick={slideRight}
                    className='cursor-pointer z-10 opacity-50 hover:opacity-100 absolute right-0 hidden group-hover:block'
                    size={40}
                />
            </div>}
        </section>
    )
}

export default FavouriteShows