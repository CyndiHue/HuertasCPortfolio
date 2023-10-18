import profilePic from '../assets/profilePic.jpg'

export default function About() {
    return (
        <>
        
        <div className="text-center">
      <div className="row">About Me</div>
      <img src={profilePic} className="row profile rounded-5 mx-auto" alt="" style={{ width: "400px" }}></img>
      <div className="row mb-4">
        <p>Cyndi</p>
        <p>Full Stack Web Developer</p>
        <p> Hi! I am Web Developer looking to showcase my most recent work. If you click the Work link above, you will find links to a few projects of mine. You may also contact me directly via email by clicking the Contact Me tab. Thank you for checking out my work, and I hope you enjoy!</p>
       
      </div>
      <div className="row mb-4">
        <p>Skills</p>
        <p></p>
        <p></p>
       
      </div>
      
    </div>
        </>

        );
  }
  