const key = 'e62c2d646a32a5ed59c18c5b737aede3'
const requests = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    latestMovies: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`

}

export default requests