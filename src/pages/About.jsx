import profilePic from '../assets/profilePic.jpg'


export default function About() {
    return (
        <>
        
        <div className="row">About Me</div>
        <img src={profilePic} className="row profile rounded-5" alt="" style={{width: "200px"}}></img>
        <div className="row">Welcome! I am a Full Stack Web Developer looking to showcase my most recent work. If you click the Work link above you will find links to a few projects of mine. You may also contact me directly via email by clicking Contact Me tab. Thank you for checking out my work and I hope you enjoy!</div>
        
        </>

        );
  }
  