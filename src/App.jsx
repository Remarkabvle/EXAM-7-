import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/header/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
    </>
  )
}

export default App
