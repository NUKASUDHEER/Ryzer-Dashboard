import React, {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Login from './pages/Login';
import Sidebar from './components/layout/Sidebar';
import ProductsList from './pages/ProductsList';
import Home from './pages/Home'

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);
  return (
    <>
      <BrowserRouter>
        {<Navbar setSearchQuery={setSearchQuery}/>}
        <Routes>
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/' element={isAuth?<Home/>:<Navigate to="/login" />} />
          <Route path='/dashboard/*' element={isAuth?<Sidebar/>:<Navigate to="/login" />}>
            <Route path='' element={<ProductsList searchQuery={searchQuery}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
