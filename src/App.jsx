import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profilePic from './assets/profilePic.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

      <img src={profilePic} alt="" width="200" height="200"></img>

      <h1>Cynthia Huertas</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">About Me</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">My Work</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Contact Me</a>
      </li>
      </ul>
      </div>
      </div>
    </nav>
    
    <main className="main-content">

    <section className = "captions about-me">About Me</section>
            <section className="description1 amb2">Welcome! I am a Full Stack Web Developer </section>
    
            <section className="captions my-work">My Work</section>
            
            <a href="https://github.com/cdziedzic/Project-1" className="image-links1 mw1">
                    <h2>Nebula Narrative - a quirky poster generator</h2>
                    <img src="./assets/Capture.PNG" alt="poster with quote"></img>
            </a>

            <a href="https://github.com/CyndiCodes/HorisoenSemanticHMTLupdate" className="image-links2 mw2">
                    <h2>second application</h2>
                    <img src="./assets/githubphoto.PNG" alt="placeholder image"></img>
            </a>

            <a href="https://github.com/CyndiCodes/cyndis_portfolio"className="image-links2 mw3">
                    <h2>third application</h2>
                    <img src="assets/images/githubphoto.PNG" alt="placeholder image"></img>
            </a>

            <section className="captions contact-me">Contact Me</section>
            <section className="description2 cm1">
                <h2>phone</h2>
                <h2>email</h2>
                <h2>website</h2>
            </section>

    </main>
    </>
  )
}

export default App
