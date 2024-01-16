
import './App.css'
import { CardOne } from './card.jsx'
import { ExampleNavbarThree } from './Navbar.jsx'


function App() {
 
  'use client'


  return (
    <>
      <ExampleNavbarThree/>
      <div className='flex flex-col justify-center items-center'>
      <h1 className='bg-green-400 rounded-xl p-4 text-white mb-4 '>Tailwind Practice</h1>
      <CardOne user="Sameer"/>
      <CardOne user="Shammu"/>
      </div>
    </>
  )
}

export default App
