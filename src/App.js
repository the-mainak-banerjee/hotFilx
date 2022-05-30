import { Navigate, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import LogIn from "./Pages/LogIn";
import Movies from './Pages/Movies'
import SignUp from "./Pages/SignUp";
import TvShows from "./Pages/TvShows";
import { AuthContextProvider } from "./Store/auth-context";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Navigate  to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path="/tv" element={<TvShows />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
