"use client";

import { useState } from 'react';
import style from './Solutions.module.css';
import bgSolutions from '../../images/bgSolutions.png'
import Image from 'next/image';
import '../../app/globals.css'

export const Solutions = () => {


  return (  
        <div className='bgSolutions'>
          <div className='bgService flex flex-col gap-24 justify-center'>
            <div>
              <h2 className='text-white font-semibold text-3xl text-center mb-2'>3D ART OUTSOURCING</h2>
              <p className='text-zinc-400 font-semibold text-2xl text-center'>ENVIRONMENTS</p>
              <p className='text-zinc-400 font-semibold text-2xl text-center'>CHARACTERS</p>
              <p className='text-zinc-400 font-semibold text-2xl text-center'>ASSETS AND PROPS</p>
            </div>

            <div>
              <h2 className='text-white font-semibold text-3xl text-center mb-2'>GAME DEV. OUTSOURCING</h2>
              <p className='text-zinc-400 font-semibold text-2xl text-center'>UNREAL ENGINE</p>
              <p className='text-zinc-400 font-semibold text-2xl text-center'>UNITY</p>
              <p className='text-zinc-400 font-semibold text-2xl text-center'>ROBLOX STUDIO</p>
            </div>
          </div>
        </div>
      
    
  );
};
