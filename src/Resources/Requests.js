const key = 'e62c2d646a32a5ed59c18c5b737aede3'
const requests = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    trendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    popularTVShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    topRatedTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`
}

export default requests