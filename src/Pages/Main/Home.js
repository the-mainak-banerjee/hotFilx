import React from 'react'
import Hero from '../../Components/UI/Hero'
import List from '../../Components/UI/List'
import Navbar from '../../Components/UI/Navbar'
import requests from '../../utils/Requests'

function Home() {
  
  return (
    <>
     <Navbar/>
     <Hero 
       apiUrl={requests.popularMovies}
     />
     <List
       rowId='1'
       title={'Trending Movies'}
       apiUrl={requests.trendingMovies}
     />
     <List
       rowId='2'
       title={'Popular Movies'}
       apiUrl={requests.popularMovies}
     />
     <List
       rowId='3'
       title={'Popular TV Shows'}
       apiUrl={requests.popularTVShows}
     />
     <List
       rowId='4'
       title={'Top Rated Movies'}
       apiUrl={requests.topRatedMovies}
     />
     <List
       rowId='5'
       title={'Top Rated TV Shows'}
       apiUrl={requests.topRatedTVShows}
     />
     <List
       rowId='6' 
       title={'Upcoming Movies'}
       apiUrl={requests.upcomingMovies}
     />
    </>
  )
}

export default Home
