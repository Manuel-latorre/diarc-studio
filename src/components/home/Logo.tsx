"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logoNavbar1.png"
import diarc from '../../images/diarcHome.png'

export const Logo = () => {
  const navbarHeight = 50;
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);
  const [windowHeight, setWindowHeight] = useState(0); // Default height
  const [showImage, setShowImage] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false); // Nuevo estado para rastrear si el usuario ha hecho scroll hacia abajo

  useEffect(() => {
    setWindowHeight(window.innerHeight); // Set initial height on client
  
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      setScrollY(scrollOffset);
  
      const threshold = windowHeight * 0.25;
      const scaleDownEnd = windowHeight * 0.75;
  
      const newScale = scrollOffset > threshold
        ? Math.max(
            0.4,
            1 - (scrollOffset - threshold) / (scaleDownEnd - threshold)
          )
        : 1;
      setScale(newScale);
  
      if (scrollOffset > 0 && !scrolledDown) {
        setScrolledDown(true); // Cambiar a true cuando el usuario hace scroll hacia abajo por primera vez
      } else if (scrollOffset === 0 && scrolledDown) {
        setScrolledDown(false); // Cambiar a false cuando el usuario ha vuelto al principio de la página
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowHeight, scrolledDown]); // Depend on windowHeight and scrolledDown Solo se ejecuta una vez al cargar la página

  const imageStyle = {
    position: "fixed" as "fixed",
    left: "50%",
    top: `${Math.max(navbarHeight, windowHeight / 2 - scrollY)}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    transition: "transform 0.2s",
  };

  return (
    <div className="z-30 max-lg:z-40" id="home">
      <div className="w-full h-full flex justify-center items-center">
        {scrolledDown ? ( // Cambiado a scrolledDown para determinar qué imagen mostrar
          <div style={imageStyle}>
            <Link href={"/"}>
              <Image src={logo} width={200} height={200} alt="Diarc logo al scrollear"/>
            </Link>
          </div>
        ) : (
          <div style={imageStyle}>
            <Link href={"/"}>
              <Image src={diarc} width={400} height={400} alt="Diarc logo inicial"/>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
