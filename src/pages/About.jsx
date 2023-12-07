import profilePic from '../assets/profilePic.jpg'
import '../../index.html';

const styles = {
  paddingBottom: '20px', 
};
export default function About() {
    return (
        <>
        
      <div className="row  mt-4" style={styles}>
        <div className="col-lg-4">
          <img src={profilePic} className="profile rounded-5 mx-auto" alt="" style={{ width: "350px" }}></img>
        </div>
        <div className="col-lg-8">
          <div className="mb-4">
            <p>Hello, I also go by </p>
            <p className="nameCustomText">Cyndi Hue</p>
            <p>I am a certified Full Stack Web Developer </p>
            <p>with a focus on backend database setup.</p>
            <p>See the Work link above to see examples.</p>
         </div>
          </div>
          </div>
        
          <div className="mb-4">
            <p></p>
            <p></p>
            <p></p>
          </div>
        
     
        </>
      
    );
  }
  
