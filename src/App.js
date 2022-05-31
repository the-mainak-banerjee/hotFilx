import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Home from './Pages/Home'
import LogIn from "./Pages/LogIn";
import Movies from './Pages/Movies'
import SignUp from "./Pages/SignUp";
import Trailer from "./Pages/Trailer";
import TvShows from "./Pages/TvShows";
import { useAuth } from "./Store/auth-context";

function App() {

  const { user } = useAuth()

  return (
    <>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path="/tv" element={<TvShows />} />
          <Route path='home/:showTitle/:showId' element={<Trailer />}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={user?.email ? <Navigate replace to='/home'/> : <LogIn/>}/>
          <Route path='/account' element={user?.email ? <Account /> : <Navigate replace to='/login'/>}/>
        </Routes>
    </>
  );
}

export default App;
