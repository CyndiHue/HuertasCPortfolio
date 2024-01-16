import HuertasResume from "../assets/huertasCResume.docx.pdf";

export default function Resume() {
    return (
        <>
      <iframe
        src={HuertasResume}
        title="PDF Viewer"
        style={{ width: '100%', height: '600px' }} // Adjust dimensions as needed
      ></iframe>
    </>

        );
  }
  