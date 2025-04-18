import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import {Toaster} from "react-hot-toast"
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import Footer from './components/Footer'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller"); 
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {!isSellerPath ?null: <Navbar />} 
      {showUserLogin ? <Login/> : null}
      <Toaster/>

      <div className={`${isSellerPath ? '' : 'px-6 md:px-20 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
