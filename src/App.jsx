import { useState } from 'react'
import './App.css'
import profilePic from './assets/profilePic.jpg'
import projectOne from './assets/capture.png'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
      <>
      <Navbar />
      <main className="mx-3">
        <Outlet />
        
      </main>
    </>
    {/* <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

      <img src={profilePic} className="rounded-5" alt="" width="200" height="200"></img>
      <h1>Cynthia Huertas</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#about_me">About Me</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#my_work">My Work</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#contact_me">Contact Me</a>
      </li>
      </ul>
      </div>
      </div>
    </nav>
    <div className="container">
    <div className="col">
  

  </div>
  
    </div> */}

   
    </>
  )
}

export default App
