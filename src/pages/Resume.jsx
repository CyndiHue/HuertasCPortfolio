import React, { useEffect } from 'react';
import HuertasResume from '../assets/huertasCResume.docx.pdf';

export default function Resume() {
 

  return (
    <>
      <iframe
        src={HuertasResume}
        title="PDF Viewer"
        style={{ width: '100%', height: '1000px' }}
      ></iframe>
    </>
  );
}

//  useEffect(() => {
//     const autoDownloadResume = async () => {
//       const resume = document.createElement('a');
//       resume.href = HuertasResume;
//       resume.download = 'HuertasCynthiaResume.pdf';
//       document.body.appendChild(resume);
//       resume.click();
//       document.body.removeChild(resume);
//     };

//     autoDownloadResume();
//   }, []);
// auto download resume feature. works. may use but not right now