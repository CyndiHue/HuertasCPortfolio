import projectOne from '../assets/posterCreation.jpg'
import projectTwo from '../assets/travelTracker.jpg'
import weatherApp from '../assets/weatherApp.jpg'
import projectThree from '../assets/project3.jpg'


export default function Work() {
    return (
      <>
      <div className="row">

      </div>
      <div className="container">
      <div className="row mb-4">
        <div className="col">
          <a href="https://travel-tracker-msc-0fe902780013.herokuapp.com/">
            <div className="card h-100">
              <img src={projectTwo} className="card-img-top" alt="Travel Tracker" />
              <div className="card-body">
                <h5 className="card-title">Travel Tracker</h5>
                <p className="card-text">Just like the push pin maps you can hang on the wall, this virtual push pin travel tracker will help you showcase your travel destinations on the go</p>
              </div>
            </div>
          </a>
        </div>


      </div>
    </div>
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <a href="https://project-3-app-mck-b96b86dfcabe.herokuapp.com/">
            <div className="card h-100">
              <img src={projectThree} className="card-img-top" alt="Project Three" />
              <div className="card-body">
                <h5 className="card-title">Recipe Search Engine</h5>
                <p className="card-text">The unique part of this search engine is that it focuses on the macros of any dish to assist the user with their health/nutritional goals</p>
              </div>
            </div>
          </a>
        </div>


      </div>
    </div>
      <div className="container">
      <div className="row mb-4">
      <div className="col">
          <a href="">
            <div className="card h-100">
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://travel-tracker-msc-0fe902780013.herokuapp.com/">
            <div className="card h-100">
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
              </div>
            </div>
          </a>
        </div>

        <div className="col">
          <a href="https://cdziedzic.github.io/Nebula-Narratives/">
            <div className="card h-100">
              <img src={projectOne} className="card-img-top" alt="Poster Creation" />
              <div className="card-body">
                <h5 className="card-title">Inspirational Images</h5>
                <p className="card-text">This  application will allow the user to randomly generate one quote and pair it with a randomly generated space image from NASA to create a cool image you can save.</p>
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
                <p className="card-text">Use the search bar to get the weather and the 5 day forecast for any location.</p>
              </div>
            </div>
          </a>
        </div>

      
      </div>
    </div>


      
      </>

        
    );
  }
  