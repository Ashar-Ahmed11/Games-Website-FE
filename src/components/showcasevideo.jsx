import React, { useContext } from 'react';
import AppContext from './context/appContext';
import videoOne from './video.mp4'
import videoTwo from './videoTwo.mp4'
const VideoShowcase = () => {
  const context = useContext(AppContext);
  const { siteData } = context;

  return (
    <div className="px-2 py-3 d-flex justify-content-center flex-column">
    
      <h1 className='py-2' style={{ color: '#6ec1e4' }}>PRE-ACTIVATED MOD</h1>
      
    <video src={videoOne} class="object-fit-contain py-2" loop autoPlay muted controls></video>

    <video src={videoTwo} class="object-fit-contain py-2" autoPlay muted controls loop></video>


      {/* Description Paragraph */}
      <p className="text-muted mt-4 display-6">
        Contact on WhatsApp For MOD Activation
      </p>
    </div>
  );
};

export default VideoShowcase;
