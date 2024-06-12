import React, { useEffect, useRef } from 'react';

const VideoComponent = ({path}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.25, // Adjust based on when you want the video to start
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '900px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video
        ref={videoRef}
        src={path}
        autoPlay
        loop
        muted
        preload="metadata"
        style={{ maxWidth: '100%', height: 'auto' }}
      ></video>
    </div>
  );
};

export default VideoComponent;
