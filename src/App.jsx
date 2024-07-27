
import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forum from './components/Forum';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Forum />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )

}

export default App;
