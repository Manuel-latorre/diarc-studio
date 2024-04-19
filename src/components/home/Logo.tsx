"use client";
import { ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { Text } from "./Text";

export const Logo = () => {
  const navbarHeight = 50;
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);
  // const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(scrollOffset);

      const threshold = windowHeight * 0.25;
      const scaleDownEnd = windowHeight * 0.75;

      // Controla la escala
      const newScale =
        scrollOffset > threshold
          ? Math.max(
              0.4,
              1 - (scrollOffset - threshold) / (scaleDownEnd - threshold)
            )
          : 1;
      setScale(newScale);

      // Controla la visibilidad del texto
      // setShowText(scrollOffset >= scaleDownEnd);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageStyle = {
    position: "fixed" as "fixed",
    left: "50%",
    top: `${Math.max(navbarHeight, window.innerHeight / 2 - scrollY)}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    transition: "transform 0.2s",
  };

  return (
    <div className="z-30">
        <div className="w-full h-full flex justify-center items-center">
          <div style={imageStyle}>
            <Link href={"/"}>
              <div className="flex flex-col items-center text-center">
                <h1 id="diarc">DIARC</h1>
                <p className="tracking-[72px] text-4xl text-white ml-20">
                  STUDIO
                </p>
              </div>
            </Link>
          </div>
          {/* <Text/> */}
        </div>
      
    </div>
  );
};
