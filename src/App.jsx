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
import ShowMovie from './Components/Movie/ShowMovie'
import { LangContextProvider } from './Context/LangContext'

function App() {

  return <>
    
    <LangContextProvider>

      <Navbar />

      <Routes>
        <Route index element={<MovieContextProvider><Home /></MovieContextProvider>} />
        <Route path='/movie' element={<MovieContextProvider><Movie /></MovieContextProvider>} />
        <Route path='show/movie/:id' element={<MovieContextProvider><ShowMovie /></MovieContextProvider>} />
        <Route path='/people' element={<People />} />
        <Route path='/tv' element={<TV />} />
        <Route path='*' element={<>404</>} />
      </Routes>

      <Footer />

    </LangContextProvider>

  </>

}

export default App
