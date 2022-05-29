import React from 'react'

function Shows( {shows}) {
  return (
    <div 
        className='text-white w-[150px] sm:w-[200px] md:w-[250px] inline-block cursor-pointer relative hover:scale-110 mr-6'
    >
      <img 
        className='w-full h-auto block rounded-md' 
        src={`https://image.tmdb.org/t/p/w500/${shows?.poster_path}`} 
        alt={shows?.title || shows?.name}
      />
      <div 
        className='absolute top-0 left-0 w-full h-full flex items-start justify-center pl-2 flex-col opacity-0 hover:opacity-100 hover:bg-black/80 whitespace-normal'>
          <h2 
            className='font-bold text-xl md:text-2xl pt-20'>
            {shows?.title || shows?.original_title || shows?.original_name}
          </h2>
          <p 
            className='text-gray-100 text-[10px] md:text-xs'>
            {shows?.first_air_date ? `First Aired: ${shows?.first_air_date}` : `Released: ${shows?.release_date}`}
          </p>
          <p 
            className='text-[10px]'>
            {shows?.overview.slice(0,100) + "..."}
          </p>
          <h4 
            className='font-bold text-gray-300 sm:text-[15px] md:text-xl self-center hover:bg-slate-500 py-1 px-3 lg:mt-2 rounded-md'>
            ADD TO WATCHLIST
         </h4>
      </div>
    </div>
  )
}

export default Shows


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