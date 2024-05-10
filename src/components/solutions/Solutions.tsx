"use client";

import { useEffect, useState } from 'react';
import style from './Solutions.module.css';
import bgSolutions from '../../images/bgSolutions.png'
import Image from 'next/image';
import Aos from "aos";
import 'aos/dist/aos.css'

export const Solutions = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (  
    <div className={style.videoContainer}>
    <video autoPlay loop muted className={style.video}>
      <source src="/bgSolutions.mp4" type="video/webm" />
    </video>
    <div className={`${style.overlay}`}>
      <div className={`${style.text} flex flex-col gap-6`}>
        <div data-aos="zoom-out-down">
          <h2 className='text-white font-semibold text-3xl text-center mb-2'>3D ART OUTSOURCING</h2>
          <p  className='text-zinc-400 font-semibold text-2xl text-center'>ENVIRONMENTS</p>
          <p  className='text-zinc-400 font-semibold text-2xl text-center'>CHARACTERS</p>
          <p  className='text-zinc-400 font-semibold text-2xl text-center'>ASSETS AND PROPS</p>
        </div>

        <div data-aos="zoom-out-down">
          <h2 className='text-white font-semibold text-3xl text-center mb-2'>GAME DEV. OUTSOURCING</h2>
          <p  className='text-zinc-400 font-semibold text-2xl text-center'>UNREAL ENGINE</p>
          <p  className='text-zinc-400 font-semibold text-2xl text-center'>UNITY</p>
          <p  className='text-zinc-400 font-semibold text-2xl text-center'>ROBLOX STUDIO</p>
        </div>
      </div>
    </div>
  </div>
      
    
  );
};
