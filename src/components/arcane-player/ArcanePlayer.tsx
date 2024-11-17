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
import Iframe from "./Iframe";
import Header from "./Header";
import Description from "./Description";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300", "200"],
});


const ArcanePlayer = () => {
  const [translate, setTranslate] = useState(false);
  
  const translateToEnglish = () => {
    setTranslate(true);
  };
  
  const translateToSpanish = () => {
    setTranslate(false);
  };
  
  
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
      <Header 
        title={translate ? "Interactive Digital Brochure" : "Brochure Digital Interactivo"}
        cta={translate ? <p>GET IN TOUCH</p> : <p>CONTÁCTANOS</p>}
        buttons={
          <div className="flex items-center gap-2 justify-end px-2">
              <button onClick={translateToSpanish} className={`${!translate ? "border border-white text-white" : ""} px-2 py-1 rounded-lg`}>ES</button>|
              <button onClick={translateToEnglish} className={`${translate ? "border border-white text-white" : ""} px-2 py-1 rounded-lg`}>EN</button>
            </div>
        }
      />
      <Iframe/>

      <Description 
        text={!translate ? (
          <p className="lg:w-[60%] mx-auto text-xl max-sm:text-base">
            Una herramienta digital interactiva diseñada para optimizar los
            procesos de{" "}
            <span className="font-semibold">comercialización y venta</span> de
            desarrollos inmobiliarios
          </p>
        ) : (
          <p className="lg:w-[60%] mx-auto text-xl max-sm:text-base">
            An <span className="font-semibold">interactive online platform </span>
            designed to streamline and enhance the marketing and sales
            strategies for Real State
          </p>
        )}

        cards={cards.map((data) => (
          <div key={data.title} className="p-4 rounded-xl bg-[#404040] shadow-xl flex flex-col gap-4 max-w-[200px] h-[150px] items-center justify-between">
              {data.icon}
        
            <p className="text-center text-sm h-[50px]">{data.title}</p>
          </div>
        ))}
      />
    </div>
  );
};

export default ArcanePlayer;
