import projectOne from '../assets/posterCreation.jpg'
import projectTwo from '../assets/travelTracker.jpg'
import weatherApp from '../assets/weatherApp.jpg'
import projectThree from '../assets/project3.jpg'


export default function Work() {
    return (
      <>
      <div className="row"> My Work

      </div>
      <div className="row">
     
      <div className="col">
          <a href="https://travel-tracker-msc-0fe902780013.herokuapp.com/">
        <div className="card" style={{width: "18rem"}}>
        <img src={projectTwo} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Virtual push pin map to track your travel on the go!</p>
  
          </div>
        </div>
          </a>
      </div>
      
      <div className="col">
          <a href="https://cdziedzic.github.io/Nebula-Narratives/">
        <div className="card" style={{width: "18rem"}}>
        <img src={projectOne} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Create an inspirational poster!</p>
  
          </div>
        </div>
          </a>
      </div>
        
      <div className="col">
          <a href="https://cyndicodes.github.io/getTheWeather/" >
        <div className="card" style={{width: "18rem"}}>
        <img src={weatherApp} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Get the weather app</p>
  
          </div>
        </div>
          </a>
      </div>
     
      <div className="col">
          <a href="https://project-3-app-mck-b96b86dfcabe.herokuapp.com/" >
        <div className="card" style={{width: "18rem"}}>
        <img src={projectThree} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Get the weather app</p>
  
          </div>
        </div>
          </a>
      </div>
    

      </div>
      <div className="row">
   
      <div className="col">
          <a href="#">
        <div className="card" style={{width: "18rem"}}>
        <img src={projectTwo} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Virtual push pin map to track your travel on the go!</p>
  
          </div>
        </div>
          </a>
      </div>
      
      <div className="col">
          <a href="#">
        <div className="card" style={{width: "18rem"}}>
        <img src={projectOne} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Create an inspirational poster!</p>
  
          </div>
        </div>
          </a>
      </div>
        
      <div className="col">
          <a href="#" >
        <div className="card" style={{width: "18rem"}}>
        <img src={weatherApp} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Get the weather app</p>
  
          </div>
        </div>
          </a>
      </div>
     
      <div className="col">
          <a href="#" >
        <div className="card" style={{width: "18rem"}}>
        <img src={weatherApp} className="card-img-top" alt="..."></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Get the weather app</p>
  
          </div>
        </div>
          </a>
      </div>
    

      </div>
      
      
      
      
      
      
      
      
      
      </>

        
    );
  }
  