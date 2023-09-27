import projectOne from '../assets/capture.jpg'

export default function Work() {
    return (
        <div className="row">
        My Work
        <div className="col">
            <a href="#">
          <div className="card" style={{width: "18rem"}}>
          <img src={projectOne} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
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
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
            </div>
          </div>
            </a>
        </div>
          
        <div className="col">
            <a href="#" >
          <div className="card" style={{width: "18rem"}}>
          <img src={projectOne} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
            </div>
          </div>
            </a>
        </div>
       
        </div>
    );
  }
  