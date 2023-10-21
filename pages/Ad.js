import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // This code will be executed after the component mounts
    const atOptions = {
      key: 'f92ccb91f88f4a56bb0199822fdc6715',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.profitablecreativeformat.com/f92ccb91f88f4a56bb0199822fdc6715/invoke.js';
    
    document.getElementById('ad-container').appendChild(script);
  }, []);

  return (
    <div id="ad-container" style={{ width: '300px', height: '250px' }}>
      {/* This empty div will be used to load the ad */}
    </div>
  );
};

export default AdComponent;
