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
            <p>About Me</p>
            <p className="nameCustomText">Cyndi</p>
            <p>Full Stack Web Developer</p>
          </div>
          </div>
          </div>
          <div className="text-center mb-4">
            <p>
              Hi! I am a Web Developer looking to showcase my most recent work. If you click the Work link above, you will find links to a few projects of mine. You may also contact me directly via email by clicking the Contact Me tab. Thank you for checking out my work, and I hope you enjoy!
            </p>
          </div>
          <div className="mb-4">
            <p>Skills</p>
            <p></p>
            <p></p>
          </div>
        
        </>
      
    );
  }
  