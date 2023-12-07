import { useState } from 'react'
import './App.css'


import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      
      <Navbar />
      <Footer />
      <main className="mx-3">
        <Outlet />
        
      </main>
      
    </>
  )
}

export default App
