"use client";

import React, { useRef, useEffect, useState } from 'react';
import style from './Solutions.module.css';
import 'aos/dist/aos.css';

export const Solutions: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showRightText, setShowRightText] = useState(false);
  const [showLeftText, setShowLeftText] = useState(false);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     const handleTimeUpdate = () => {
  //       const currentTime = video.currentTime;

  //       if (currentTime >= 2 && currentTime < 7) {
  //         setShowRightText(true);
  //       } else {
  //         setShowRightText(false);
  //       }

  //       if (currentTime >= 9) {
  //         setShowLeftText(true);
  //       } else {
  //         setShowLeftText(false);
  //       }
  //     };

  //     video.addEventListener('timeupdate', handleTimeUpdate);

  //     return () => {
  //       video.removeEventListener('timeupdate', handleTimeUpdate);
  //     };
  //   }
  // }, []);

  return (
    <div className={`${style.videoContainer} max-md:hidden`}>
      <video autoPlay loop muted ref={videoRef} className={style.video}>
        <source src="/bgSolutions.mp4" type="video/webm" />
      </video>
      <div className={`${style.overlay}`}>
        <div className='flex justify-between w-[90%] mx-auto'>
          <div style={{ opacity: showLeftText ? 1 : 0, transition: 'opacity 0.5s' }}>
            <h2 className='text-white font-semibold text-3xl text-center mb-2'>3D ART OUTSOURCING</h2>
            <p className='text-zinc-400 font-semibold text-2xl text-center mt-5'>ENVIRONMENTS</p>
            <p className='text-zinc-400 font-semibold text-2xl text-center mt-5'>CHARACTERS</p>
            <p className='text-zinc-400 font-semibold text-2xl text-center mt-5'>ASSETS AND PROPS</p>
          </div>

          <div style={{ opacity: showRightText ? 1 : 0, transition: 'opacity 0.5s' }}>
            <h2 className='text-white font-semibold text-3xl text-center mb-2'>GAME DEV. OUTSOURCING</h2>
            <p className='text-zinc-400 font-semibold text-2xl text-center mt-5'>UNREAL ENGINE</p>
            <p className='text-zinc-400 font-semibold text-2xl text-center mt-5'>UNITY</p>
            <p className='text-zinc-400 font-semibold text-2xl text-center mt-5'>ROBLOX STUDIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
