import './App.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Products from '../components/Products'
import { Route, Routes } from 'react-router-dom'
import Add from '../components/Add'

function App() {

  return (
    <>
      <Navbar />
      <div className='home'>
      <Filter />
      <Products />
      
      </div>
    </>
  )
}

export default App
