import React from 'react'
import Hero from '../Components/Hero'
import List from '../Components/List'
import requests from '../Resources/Requests'

function Movies() {
  return (
    <>
        <Hero />
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
            title={'Top Rated Movies'}
            apiUrl={requests.topRatedMovies}
        />
        <List
            rowId='4' 
            title={'Upcoming Movies'}
            apiUrl={requests.upcomingMovies}
        />
    </>
  )
}

export default Movies
