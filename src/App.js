import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Pages/Account/Account";
import ChangePassword from "./Pages/Account/ChangePassword";
import Home from './Pages/Home'
import LogIn from "./Pages/User/LogIn";
import SignUp from "./Pages/User/SignUp";
import ForgotPassword from "./Pages/User/ForgotPassword";
import Movies from './Pages/Movies'
import Trailer from "./Pages/Trailer";
import TvShows from "./Pages/TvShows";
import { useAuth } from "./Store/auth-context";
import DeleteAccount from "./Pages/Account/DeleteAccount";

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
          <Route path='/signup' element={user?.email ? <Navigate replace to='home'/> : <SignUp/>}/>
          <Route path='/login' element={user?.email ? <Navigate replace to='/home'/> : <LogIn/>}/>
          <Route path='/forgot_password' element={user?.email ? <Navigate replace to='/home'/> : <ForgotPassword/>}/>
          <Route path='/account' element={user?.email ? <Account /> : <Navigate replace to='/login'/>}/>
          <Route path='/account/change_password' element={user?.email ? <ChangePassword /> : <Navigate replace to='/login'/>}/>
          <Route path='/account/delete_account' element={user?.email ? <DeleteAccount /> : <Navigate replace to='/login'/>}/>
        </Routes>
    </>
  );
}

export default App;
