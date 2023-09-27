export default function Contact() {
    return (
        <>
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" class="form-text">Your email will never be shared with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputMessage1" class="form-label">Message</label>
          <input type="Message" class="form-control" id="exampleInputMessage1"></input>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        
        
        </>
    );
  }