import React, { useRef, useEffect } from 'react';

interface DynamicVideoProps {
  onError: () => void;
}

const DynamicVideo: React.FC<DynamicVideoProps> = ({ onError }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Auto-play was prevented:", error);
        onError();
      });
    }
  }, [onError]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      onError={onError}
    >
      <source src="/testUno.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default DynamicVideo;

