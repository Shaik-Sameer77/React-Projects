import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
