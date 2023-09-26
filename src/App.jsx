import { useState } from 'react'
import './App.css'
import profilePic from './assets/profilePic.jpg'
import projectOne from './assets/capture.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar navbar-expand-lg">
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
    <div className="row">
      About Me
      <div className="col">Welcome! I am a Full Stack Web Developer</div>
    </div>
    <div className="row">
    My Work
    <div className="col">
      <div class="card" style={{width: "18rem"}}>
      <img src={projectOne} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
    <div className="col">
      <div class="card" style={{width: "18rem"}}>
      <img src={projectOne} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
      
    <div className="col">
      <div class="card" style={{width: "18rem"}}>
      <img src={projectOne} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
   
    </div>
  </div>
  <div className="row">
    Contact Me
    <div className="col">Email</div>
    <div className="col">Phone</div>
    <div className="col">Github</div>
    </div>
    </div>

   
    </>
  )
}

export default App
