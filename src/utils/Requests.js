const key = process.env.REACT_APP_TMDB_API_KEY


const requests = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    trendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    popularTVShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    topRatedTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    airingTodayTv: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
    moviesDetails: function (movieId){
        return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
    }
}


export default requests;