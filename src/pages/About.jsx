import profilePic from '../assets/profilePic.jpg'


export default function About() {
    return (
        <div className="row">


        <div className="col">About Me
        <img src={profilePic} className="col profile rounded-5" alt="" style={{width: "200px"}}></img></div>
        <div className="row">Welcome! I am a Full Stack Web Developer. I create dynamic websites that focus both on front and back end development. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
   
        </div>
    );
  }
  