import React , { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from './Pages/Main/Home'
import Movies from './Pages/Main/Movies'
import TvShows from "./Pages/Main/TvShows";
import LogIn from "./Pages/User/LogIn";
import SignUp from "./Pages/User/SignUp";
// import Trailer from "./Pages/Main/Trailer";
// import Account from "./Pages/Account/Account";
// import ChangePassword from "./Pages/Account/ChangePassword";
// import DeleteAccount from "./Pages/Account/DeleteAccount";
// import ForgotPassword from "./Pages/User/ForgotPassword";

import { useAuth } from "./Store/auth-context";
import Loading from './Components/UI/Loading'

const Trailer = React.lazy(() => import('./Pages/Main/Trailer'))
const Account = React.lazy(() => import('./Pages/Account/Account'))
const ChangePassword = React.lazy (() => import('./Pages/Account/ChangePassword'))
const ForgotPassword = React.lazy(() => import('./Pages/Account/ForgotPassword'))
const DeleteAccount = React.lazy(() => import('./Pages/Account/DeleteAccount'))
const NotFound = React.lazy(() => import('./Pages/Fallback/NotFound'))

function App() {

  const { user } = useAuth()

  return (
    <>
        <Suspense 
          fallback={
            <Loading/>
          }  
        >
          <Routes>
            <Route path='/' element={<Navigate replace to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path="/tv" element={<TvShows />} />
            <Route path='home/:showTitle/:showId' element={<Trailer />}/>
            <Route path='/signup' element={user?.email ? <Navigate replace to='/home'/> : <SignUp/>}/>
            <Route path='/login' element={user?.email ? <Navigate replace to='/home'/> : <LogIn/>}/>
            <Route path='/forgot_password' element={user?.email ? <Navigate replace to='/account/change_password'/> : <ForgotPassword/>}/>
            <Route path='/account' element={user?.email ? <Account /> : <Navigate replace to='/login'/>}/>
            <Route path='/account/change_password' element={user?.email ? <ChangePassword /> : <Navigate replace to='/login'/>}/>
            <Route path='/account/delete_account' element={user?.email ? <DeleteAccount /> : <Navigate replace to='/login'/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
