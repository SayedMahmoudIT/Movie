import { useState } from 'react'
import './App.css'
import Navbar from './Components/Layouts/Navbar'
import Footer from './Components/Layouts/Footer'
import { Route, Routes } from 'react-router'
import Movie from './Components/Movie/Movie'
import Home from './Components/Landing/Home'
import TV from './Components/TV/TV'
import People from './Components/People/People'
import { MovieContextProvider } from './Context/MovieContext'

function App() {

  return  <>
      <Navbar />

      <Routes>
          <Route index element={<MovieContextProvider><Home /></MovieContextProvider>} />
          <Route path='/movie' element={<MovieContextProvider><Movie /></MovieContextProvider>} />
          <Route path='/people' element={<People />} />
          <Route path='/tv' element={<TV />} />
        
      </Routes>

      <Footer />
    </>
  
}

export default App
