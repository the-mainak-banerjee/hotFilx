import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import LogIn from "./Pages/LogIn";
import Movies from './Pages/Movies'
import SignUp from "./Pages/SignUp";
import TvShows from "./Pages/TvShows";

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path="/tv" element={<TvShows />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </>
  );
}

export default App;
