import React from 'react'
import { Link } from 'react-router-dom'
import FavouriteShows from '../../Components/FavouriteShows'
import Navbar from '../../Components/Navbar'
import { useAuth } from '../../Store/auth-context'

function Account() {
  const { user } = useAuth()

  return (
    <>
      <Navbar/>
      <section className='w-full h-full'>
          {/* <img 
                className='block absolute w-full h-full object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='netflix-bg'
          />
          <div className='bg-gradient-to-t from-[#0c111b] to-[#0c111ba1] fixed bottom-0 w-full h-full'></div> */}
          <FavouriteShows />
          <div className='text-white px-5 pt-1 md:px-16 md:pt-5 mb-20 h-[40%]'>
            <h2 className='font-bold text-3xl md:mb-5 md:mt-0 md:pl-4 relative mt-20 pl-4 bg-[#1f80e0] py-2'>Account Details</h2>
            <div className='relative flex flex-col md:mb-5 md:mt-0 md:pl-4 mt-5 pl-4'>
                <h4 className='text-xl'>Email Address:-  <span>{user?.email}</span></h4>
                <h4 className='text-xl'>Account Creation Date:-  <time>{user?.metadata?.creationTime}</time></h4>
                <Link to='change_password' className='nav-btn bg-red-800 md:max-w-[30%] lg:max-w-[25%] xl:max-w-[15%] text-center mt-5'><button>Change Password</button></Link>
            </div>
          </div>
      </section>
    </>
  )
}

export default Account



