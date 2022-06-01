import React from 'react'
import Hero from '../Components/Hero'
import List from '../Components/List'
import Navbar from '../Components/Navbar'
import requests from '../utils/Requests'

function TvShows() {
  return (
    <>
        <Navbar/>
        <Hero 
            apiUrl={requests.popularTVShows}
        />
        <List
            rowId='1' 
            title={'Airing Today'}
            apiUrl={requests.airingTodayTv}
        />   
        <List
            rowId='2'
            title={'Popular TV Shows'}
            apiUrl={requests.popularTVShows}
        />   
        <List
            rowId='3'
            title={'Top Rated TV Shows'}
            apiUrl={requests.topRatedTVShows}
        />
    </>
  )
}

export default TvShows
