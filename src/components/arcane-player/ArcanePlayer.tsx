"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./logo.png"; // Make sure the image path is correct
import BdiIcon from "./icons/BdiIcon";
import { Poppins } from "next/font/google";
import CloudIcon from "./icons/CloudIcon";
import PanelIcon from "./icons/Panelcon";
import MapIcon from "./icons/MapIcon";
import FiltersIcon from "./icons/FiltersIcon";
import MultimediaIcon from "./icons/MultimediaIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import Link from "next/link";
import ModalForm from "./ModalForm";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200"],
});


const ArcanePlayer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [translate, setTranslate] = useState(false);
  
  const translateToEnglish = () => {
    setTranslate(true);
  };
  
  const translateToSpanish = () => {
    setTranslate(false);
  };
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null; // Only render on the client

  
  const cards = [
    {
      icon: <CloudIcon />,
      title: translate 
        ? "Online access from anywhere in the world"
        : "Acceso online desde cualquier parte del mundo",
    },
    {
      icon: <MapIcon />,
      title: translate
        ? "3D Master Plan with Satellite Data"
        : "Masterplan 3D con información satelital",
    },
    {
      icon: <PanelIcon />,
      title: translate
        ? "Project Information Dashboard"
        : "Panel informativo por proyecto",
    },
    {
      icon: <FiltersIcon />,
      title: translate
        ? "Property Search Filters"
        : "Filtros de búsqueda de propiedades",
    },
    {
      icon: <MultimediaIcon />,
      title: translate
        ? "Media Gallery and Sales Documentation"
        : "Galeria multimedia y documentación comercial",
    },
  ];

  return (
    <div className={`bg-[#2e2e2e] flex flex-col ${poppins.className}`}>
      <div className="py-4 px-4 xl:px-12 flex items-center justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-6">
        <div className="flex items-center gap-4">
          <BdiIcon />
          <p className="text-3xl font-thin">{!translate ? "Interactive Digital Brochure" : "Brochure Digital Interactivo"}</p>
        </div>
        <div>
          <ModalForm/>
        </div>
      </div>
      <iframe
        id="arcane-player-frame"
        src="https://embed.arcanemirage.com/1aaa4bb5-6350-4693-a8ab-8c8a91d4834c?key=aWQ9NDM2OCZrZXk9MWFhYTRiYjUtNjM1MC00NjkzLWE4YWItOGM4YTkxZDQ4MzRjJnRva2VuPVlFbnc5R2JCR1lwNg=="
        frameBorder="0"
        width="100%"
        height={700}
        allow="fullscreen; microphone"
        allowFullScreen
      ></iframe>
      <div className="mt-12 w-[95%] mx-auto">
        <hr className="border border-white"/>
        <div className="max-sm:flex-wrap flex items-center justify-between mt-8 max-sm:justify-center max-sm:gap-8">
          <div className="flex items-center gap-4">
            <BdiIcon />
            <p className="text-3xl font-thin">{!translate ? "Interactive Digital Brochure" : "Brochure Digital Interactivo"}</p>
          </div>
          <div className="flex flex-col gap-2 max-sm:items-center">
            <div className="flex items-center gap-2 justify-end px-2">
              <button onClick={translateToSpanish} className={`${!translate ? "border border-white text-white" : ""} px-2 py-1 rounded-lg`}>ES</button>|
              <button onClick={translateToEnglish} className={`${translate ? "border border-white text-white" : ""} px-2 py-1 rounded-lg`}>EN</button>
            </div>
            <button className="bg-white text-[#2e2e2e] rounded-full py-1 px-3 hover:opacity-70 transition-all mt-2">
              {!translate ? "CONTÁCTANOS" : "GET IN TOUCH"}
            </button>
          </div>
        </div>

        <div className="fles justify-center text-center py-12">
          {!translate ? (
            <p className="xl:w-[60%] mx-auto">
              Una herramienta digital interactiva diseñada para optimizar los
              procesos de{" "}
              <span className="font-semibold">comercialización y venta</span> de
              desarrollos inmobiliarios
            </p>
          ) : (
            <p className="xl:w-[60%] mx-auto">
              An <span className="font-semibold">interactive online platform</span>
              designed to streamline and enhance the marketing and sales
              strategies for real state
            </p>
          )}
        </div>
      </div>

      <div className="max-lg:flex-wrap flex items-center justify-center gap-4">
        {cards.map((data) => (
          <div className="p-4 rounded-xl bg-[#404040] shadow-xl flex flex-col gap-4 max-w-[200px] h-[150px] items-center justify-between">
            {/* Ícono al principio */}
            <div className="flex-1 flex items-center justify-center">
              {data.icon}
            </div>
            {/* Título al fondo */}
            <p className="text-center text-sm mb-0">{data.title}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center justify-end p-4 mt-12 max-sm:justify-center">
        <Link href={"https://wa.me/5491140266010"} target="_blank">
          <WhatsappIcon />
        </Link>
        <Link href={"https://www.instagram.com/diarc.studio/"} target="_blank">
          <InstagramIcon />
        </Link>
        <Link href={"https://www.linkedin.com/company/diarcstudio"} target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href={"https://www.youtube.com/channel/UCS679OEsKuiY9I_aFna9hBA"} target="_blank">
          <YoutubeIcon />
        </Link>
      </div>
    </div>
  );
};

export default ArcanePlayer;
