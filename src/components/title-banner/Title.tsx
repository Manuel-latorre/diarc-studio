"use client";

import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";import { useEffect, useState } from "react";
import { Solutions } from "../solutions/Solutions";
import './style.css'
import Image from "next/image";
import logo from './logo.svg'

export const Title = () => {
  
  const navbarHeight = 60; // Altura del navbar
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      setScrollY(scrollOffset);

      // Reducir más rápido la imagen
      const newScale = Math.max(0.3, 1 - scrollOffset / 1500); // Cambio de 2000 a 1500 y mínimo de 0.5 a 0.3
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageStyle = {
    position: 'fixed',
    left: '50%',
    top: `${Math.max(navbarHeight, window.innerHeight / 2 - scrollY)}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    transition: 'transform 0.2s'
  };

  return (
    <div>
      <ScrollShadow visibility="none" hideScrollBar className="w-full h-screen">
      <div className="w-full h-screen flex justify-center items-center">
      <div style={imageStyle}>
        <Image src={logo} alt="logo" width={500} height={300} className="py-5"/>
      </div>
      </div>
          {/* <Link href={"/"}>
          <p className={textSizeClass.large + " font-bold text-white"}>DIARC</p>
          <p className={textSizeClass.small + " uppercase text-center tracking-[52px] font-normal text-white"}>
              studio
            </p>
          </Link> */}
      
      <div id="initialText" className="w-full h-screen text-center flex flex-col justify-center gap-10">
           <div>
             <p className="text-white font-semibold text-4xl">
               Based in Buenos Aires, <br />
               we offer personalized services to <br />
               bring worldwide digital <br />
               experiences to life.
             </p>

            <p className="text-white font-semibold text-4xl">
              We offer a cost-effective solution <br />
              for outsourcing personalized, <br />
              high quality 3D art for Inmersive <br />
              Experiences, Metaverse an Gaming.
            </p>

            
          </div>
      </div>

        
    </ScrollShadow>
    </div>
    
  );
};
