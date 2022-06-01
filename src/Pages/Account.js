import React from 'react'
import FavouriteShows from '../Components/FavouriteShows'
import Navbar from '../Components/Navbar'
import { useAuth } from '../Store/auth-context'

function Account() {
  const { user } = useAuth()

  return (
    <>
      <Navbar/>
      <section className='w-full h-screen'>
          <img 
                className='block absolute w-full h-full object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='netflix-bg'
          />
          <div className='bg-gradient-to-t from-[#0c111b] to-[#0c111ba1] fixed bottom-0 w-full h-full'></div>
          <FavouriteShows />
          <section className='text-white p-5 md:px-16 md:pt-16'>
            <h2 className='font-bold text-3xl md:mb-5 md:mt-0 md:pl-4 relative mt-20 pl-4 bg-red-500 py-2'>Account Details</h2>
            <div className='relative flex flex-col md:mb-5 md:mt-0 md:pl-4 mt-5 pl-4'>
                <h4 className='text-xl'>Email Address: <email>{user?.email}</email></h4>
                <h4 className='text-xl'>Account Creation Date: <time>{user?.metadata?.creationTime}</time></h4>
            </div>
          </section>
      </section>
    </>
  )
}

export default Account



// backdrop_path: "/figlwUsXXFehX3IebdjqNLV6vWk.jpg"
// genre_ids: (2) [28, 53]
// id: 628900
// original_language: "en"
// original_title: "The Contractor"
// overview: "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home."
// popularity: 2891.922
// poster_path: "/rJPGPZ5soaG27MK90oKpioSiJE2.jpg"
// release_date: "2022-03-10"
// title: "The Contractor"