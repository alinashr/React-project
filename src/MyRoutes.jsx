import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Search from './Pages/Search'
import Register from './Pages/Register'
import Login from './Pages/Login'
import MovieDetails from './Pages/MovieDetails'
import Cart from './Pages/Cart'

const MyRoutes = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/movies/:id' element={<MovieDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default MyRoutes
