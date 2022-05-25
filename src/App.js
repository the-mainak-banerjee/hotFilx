import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
