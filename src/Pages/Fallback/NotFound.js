import React from 'react'
import Navbar from '../../Components/UI/Navbar'

function NotFound() {
    const backgroundImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

  return (
    <section className='w-full h-screen'>
        <img
                className='block absolute w-full h-full object-cover'
                src={backgroundImage}
                alt='netflix-bg'
            />
        <div className='bg-gradient-to-t from-[#0c111b] to-[#0c111ba1] fixed bottom-0 w-full h-full'></div>
      <Navbar />
      <section className='absolute text-white w-full h-full'>
          <div className='flex flex-col items-center w-full h-full justify-center p-6'>
              <h2 className='text-red-500 text-4xl font-extrabold text-center'>
                404
              </h2>
              <p className='text-gray-300 text-2xl text-center'>
                Oops!!! You Are At The <span className='text-red-500 font-bold'>Wrong Counter.</span>
              </p>
              <p className='text-gray-400 text-center'>
                Use Any Link Above To Enjoy Movies With <span className='text-[#1f80e0] font-extrabold'>Popcorn</span> & <span className='text-[#1f80e0] font-extrabold'>Coke.</span>
              </p>
          </div>
      </section>
    </section>
  )
}

export default NotFound
