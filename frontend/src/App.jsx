import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddMovies from './components/AddMovies'
import ShowMovie from './components/ShowMovie'
import EditMovie from './components/EditMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddMovies/>}/>
        <Route path='/show/:id' element={<ShowMovie/>}/>
        <Route path='/edit/:id' element={<EditMovie/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
