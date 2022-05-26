import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home'
import Movies from './Pages/Movies'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
