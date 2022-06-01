import React from 'react'
import Footer from '../../Components/UI/Footer'
import Hero from '../../Components/UI/Hero'
import List from '../../Components/UI/List'
import Navbar from '../../Components/UI/Navbar'
import requests from '../../utils/Requests'

function Movies() {
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
            title={'Top Rated Movies'}
            apiUrl={requests.topRatedMovies}
        />
        <List
            rowId='4' 
            title={'Upcoming Movies'}
            apiUrl={requests.upcomingMovies}
        />
        <Footer />
    </>
  )
}

export default Movies
