import projectOne from '../assets/posterCreation.jpg'
import projectTwo from '../assets/travelTracker.jpg'
import weatherApp from '../assets/weatherApp.jpg'
import projectThree from '../assets/project3.jpg'


export default function Work() {
    return (
      <>
      <div className="row  mt-4">

      </div>
      <div>Back-End</div>
      <div className="container">
      <div className="row mb-2">
        <div className="col">
          <a href="https://travel-tracker-msc-0fe902780013.herokuapp.com/">
            <div className="card h-100">
              <img src={projectTwo} className="card-img-top" alt="Travel Tracker" />
              <div className="card-body">
                <h5 className="card-title">Travel Tracker</h5>
                <p className="card-text">This SERN web application allows users track/store locations in which they have visited in the past. It was inspired by physical push pin maps you map see or even may have one at home. Users can create an account, sign in and out and update their information. This is made possible by connecting MySQL to Bing Maps API and using React for my user interface. Other technologies used include, Express.js, Node.js, Sequelize, Bootstrap for CSS, Heroku and HTTP request methods.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="https://project-3-app-mck-b96b86dfcabe.herokuapp.com/">
            <div className="card h-100">
              <img src={projectThree} className="card-img-top" alt="Project Three" />
              <div className="card-body">
                <h5 className="card-title">Recipe Search Engine</h5>
                <p className="card-text">The unique part of this MERN bases search engine is it focuses on the macros of any dish to assist the user with their health/nutritional goals. Once the user creates an account they can save recipes to use at a later date. Some technologies used were Edamam API, Mongoose, Bulma CSS framework, GraphQL and MERN (MongoDB, Express.js, React.js, Node.js) </p>
              </div>
            </div>
          </a>
        </div>


      </div>
    </div>
    <div>Front-End</div>
      <div className="container">
      <div className="row mb-2">
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


      </div>
    </div>
    <div>Mini Projects</div>
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

      
      </div>
    </div>


      
      </>

        
    );
  }
  