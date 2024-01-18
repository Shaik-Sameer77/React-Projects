import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx/Header.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer.jsx/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer />
    </>
  )
}

export default App
