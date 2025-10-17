import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import About from './pages/About'
import './App.css'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Github from './pages/Github'
// import MovieCard from './components/MovieCard'


function App() {

  return (
   <>
   
    
    <Routes >
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='/movies' element={<Movies />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/movies/:id' element={<MovieDetails />}/>
      <Route path="/github" element = {<Github />}/>
      <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
    
   </>
  )
}

export default App
