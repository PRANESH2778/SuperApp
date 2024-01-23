import { Routes,Route } from 'react-router-dom'
import ResgisterPage from './pages/ResgisterPage'
import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Genre from './pages/Genre'
import Browse from './pages/Browse'
import Movies from './pages/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<ResgisterPage/>}/>
        <Route path='/genre' element={<Genre/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/browse' element={<Browse/>}/>
      </Routes>
    </>
  )
}

export default App
