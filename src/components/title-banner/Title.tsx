"use client";

import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";import { useEffect, useState } from "react";
import { Solutions } from "../solutions/Solutions";
import './style.css'
import Image from "next/image";
import logo from './logo.svg'

export const Title = () => {
  
  const navbarHeight = 50; // Altura del navbar
   // Margen superior para evitar que la imagen se corte
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(scrollOffset);

      // Establece un punto donde la reducción del tamaño comienza antes y termina más rápido
      const threshold = windowHeight * 0.25; // El umbral más temprano
      const scaleDownEnd = windowHeight * 0.75; // Punto donde queremos que la escala haya alcanzado el tamaño mínimo

      const newScale = scrollOffset > threshold
        ? Math.max(0.5, 1 - ((scrollOffset - threshold) / (scaleDownEnd - threshold)))
        : 1;
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
          {/* <Image src={logo} alt="logo" width={500} height={300} className="py-5"/> */}
          <div className="flex flex-col items-center text-center">
            <h1 id="diarc">DIARC</h1>
            <p className="tracking-[72px] text-4xl text-white ml-20">STUDIO</p>
          </div>
        </div>
      </div>
      
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
