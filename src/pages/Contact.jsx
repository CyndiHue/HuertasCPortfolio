export default function Contact() {
    return (
        <>
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" className="form-text">Your email will never be shared with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputMessage1" className="form-label">Message</label>
          <input type="Message" className="form-control" id="exampleInputMessage1"></input>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        
        
        </>
    );
  }