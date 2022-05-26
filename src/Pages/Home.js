import React from 'react'
import Hero from '../Components/Hero'
import List from '../Components/List'
import requests from '../Resources/Requests'

function Home() {
  return (
    <>
     <Hero />
     <List
       rowId='1'
       title={'Trending Movie'}
       apiUrl={requests.trendingMovies}
     />
     <List
       rowId='2'
       title={'Popular Movie'}
       apiUrl={requests.popularMovies}
     />
     <List
       rowId='3'
       title={'Popular TV Shows'}
       apiUrl={requests.popularTVShows}
     />
     <List
       rowId='4'
       title={'Top Rated Movie'}
       apiUrl={requests.topRatedMovies}
     />
     <List
       rowId='5'
       title={'Top Rated TV Shows'}
       apiUrl={requests.topRatedTVShows}
     />
     <List
       rowId='6' 
       title={'Upcoming Movie'}
       apiUrl={requests.upcomingMovies}
     />

    </>
  )
}

export default Home
