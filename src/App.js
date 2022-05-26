import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TvShows from "./Pages/TvShows";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path="/tv" element={<TvShows />} />
      </Routes>
    </>
  );
}

export default App;
