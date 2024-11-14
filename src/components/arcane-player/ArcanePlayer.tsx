"use client"; 


import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from './logo.png'; // Make sure the image path is correct



const ArcanePlayer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Only render on the client

  return (
    <div className="w-[90%] mx-auto h-screen flex items-center justify-center rounded-2xl">
      <div className="flex items-center justify-center gap-12">
        <div className="flex flex-col gap-3 w-[50%]">
          <Image src={logo} alt="Logo" width={50} height={50} className="rounded-xl mb-5" />
          <p className="text-3xl font-semibold">Brochure Digital Interactivo</p>
          <p className="text-xl font-thin w-[90%]">
            Una herramienta online interactiva diseñada para optimizar los procesos de{" "}
            <span className="font-semibold">comercialización y venta</span> de desarrollos inmobiliarios
          </p>
        </div>
        <iframe
          id="arcane-player-frame"
          src="https://embed.arcanemirage.com/1aaa4bb5-6350-4693-a8ab-8c8a91d4834c?key=aWQ9NDM2OCZrZXk9MWFhYTRiYjUtNjM1MC00NjkzLWE4YWItOGM4YTkxZDQ4MzRjJnRva2VuPVlFbnc5R2JCR1lwNg=="
          frameBorder="0"
          width="100%"
          height={500}
          style={{ borderRadius: 20 }}
          allow="fullscreen; microphone"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};


export default ArcanePlayer;
