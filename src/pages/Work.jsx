import projectOne from '../assets/posterCreation.jpg'
import projectTwo from '../assets/travelTracker.jpg'
import weatherApp from '../assets/weatherApp.jpg'
import projectThree from '../assets/project3.jpg'


export default function Work() {
    return (
      <>
      <div className="row"> My Work

      </div>
      <div className="container">
      <div className="row mb-4">
        <div className="col">
          <a href="https://travel-tracker-msc-0fe902780013.herokuapp.com/">
            <div className="card h-100">
              <img src={projectTwo} className="card-img-top" alt="Travel Tracker" />
              <div className="card-body">
                <h5 className="card-title">Travel Tracker</h5>
                <p className="card-text">Virtual push pin map to track your travel on the go!</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://cdziedzic.github.io/Nebula-Narratives/">
            <div className="card h-100">
              <img src={projectOne} className="card-img-top" alt="Poster Creation" />
              <div className="card-body">
                <h5 className="card-title">Poster Creation</h5>
                <p className="card-text">Create an inspirational poster!</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://cyndicodes.github.io/getTheWeather/">
            <div className="card h-100">
              <img src={weatherApp} className="card-img-top" alt="Weather App" />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Get the weather app</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://project-3-app-mck-b96b86dfcabe.herokuapp.com/">
            <div className="card h-100">
              <img src={projectThree} className="card-img-top" alt="Project Three" />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">Description for Project Three</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <a href="https://travel-tracker-msc-0fe902780013.herokuapp.com/">
            <div className="card h-100">
              <img src={projectTwo} className="card-img-top" alt="Travel Tracker" />
              <div className="card-body">
                <h5 className="card-title">Travel Tracker</h5>
                <p className="card-text">Virtual push pin map to track your travel on the go!</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://cdziedzic.github.io/Nebula-Narratives/">
            <div className="card h-100">
              <img src={projectOne} className="card-img-top" alt="Poster Creation" />
              <div className="card-body">
                <h5 className="card-title">Poster Creation</h5>
                <p className="card-text">Create an inspirational poster!</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://cyndicodes.github.io/getTheWeather/">
            <div className="card h-100">
              <img src={weatherApp} className="card-img-top" alt="Weather App" />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Get the weather app</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://project-3-app-mck-b96b86dfcabe.herokuapp.com/">
            <div className="card h-100">
              <img src={projectThree} className="card-img-top" alt="Project Three" />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">Description for Project Three</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
      
      </>

        
    );
  }
  