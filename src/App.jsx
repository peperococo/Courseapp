// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Bar from '../components/Bar/Bar'
import Landingpage from '../components/Landingpage/Landingpage'
import './App.css'
import Dashboard from '../components/Dashboard/Dashboard'
import About from '../components/About/About'
import Addform from '../components/Form/Addform'


function App() {

  return (
    <>
      <Bar/>
      <Routes>
      <Route path="/" element={<Landingpage/>}> </Route>
      <Route path="/add" element={<Dashboard/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/form" element={<Addform/>}></Route>
      </Routes>
    </>
  )
}

export default App
