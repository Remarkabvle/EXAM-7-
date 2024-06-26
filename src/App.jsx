import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/header/Navbar'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
