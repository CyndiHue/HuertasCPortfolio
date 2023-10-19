import profilePic from '../assets/profilePic.jpg'
import '../../index.html';


export default function About() {
    return (
        <>
        
      <div className="row  mt-4">
        <div className="col-lg-4">
          <img src={profilePic} className="profile rounded-5 mx-auto" alt="" style={{ width: "400px" }}></img>
        </div>
        <div className="col-lg-8">
          <div className="mb-4">
            <p>Hello, I also go by </p>
            <p className="nameCustomText">Cyndi</p>
            <p>I am a certified Full Stack Web Developer</p>
          </div>
          </div>
          </div>
        
          <div className="mb-4">
            <p>Skills</p>
            <p></p>
            <p></p>
          </div>
        
        </>
      
    );
  }
  