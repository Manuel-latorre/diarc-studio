"use client";

import React, { useRef, useEffect, useState } from 'react';
import style from './Solutions.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Solutions: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (video && section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play();
              setTimeout(() => {
                setShowText(true);
              }, 2000);
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(section);

      return () => {
        observer.unobserve(section);
      };
    }
  }, []);

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div ref={sectionRef} className={`${style.videoContainer} max-md:hidden`}>
      <video muted ref={videoRef} className={style.video}>
        <source src="/bgSolutions.mp4" type="video/webm" />
      </video>
      <div className={`${style.overlay}`} style={{ display: 'flex', justifyContent: 'flex-end',}}>
        <div className='flex flex-col gap-8 pr-10 w-[35%] mt-[3%]'>
          <div>
            <h2 className='text-white font-semibold text-2xl 2xl:text-3xl text-center mb-2' data-aos="zoom-out">3D ART OUTSOURCING</h2>
            <p className='text-zinc-400 font-semibold text-xl 2xl:text2xl text-center mt-5' data-aos="zoom-out" data-aos-delay="100">ENVIRONMENTS</p>
            <p className='text-zinc-400 font-semibold text-xl 2xl:text2xl text-center mt-5' data-aos="zoom-out" data-aos-delay="200">CHARACTERS</p>
            <p className='text-zinc-400 font-semibold text-xl 2xl:text2xl text-center mt-5' data-aos="zoom-out" data-aos-delay="300">ASSETS AND PROPS</p>
          </div>

          <div>
            <h2 className='text-white font-semibold text-2xl 2xl:text-3xl text-center mb-2' data-aos="zoom-out" data-aos-delay="400">GAME DEV. OUTSOURCING</h2>
            <p className='text-zinc-400 font-semibold text-xl 2xl:text2xl text-center mt-5'data-aos="zoom-out" data-aos-delay="500">UNREAL ENGINE</p>
            <p className='text-zinc-400 font-semibold text-xl 2xl:text2xl text-center mt-5' data-aos="zoom-out" data-aos-delay="600">UNITY</p>
            <p className='text-zinc-400 font-semibold text-xl 2xl:text2xl text-center mt-5' data-aos="zoom-out" data-aos-delay="700">ROBLOX STUDIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
