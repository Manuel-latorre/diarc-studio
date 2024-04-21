"use client";



import { useEffect, useState } from "react";
import Link from "next/link";
import { TextGenerateEffectDemo } from "./Text";

export const Logo = () => {
  const navbarHeight = 50;
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);
  const [windowHeight, setWindowHeight] = useState(0); // Default height

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowHeight]); // Depend on windowHeight

  const imageStyle = {
    position: "fixed" as "fixed",
    left: "50%",
    top: `${Math.max(navbarHeight, windowHeight / 2 - scrollY)}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    transition: "transform 0.2s",
  };

  return (
    <div className="z-30 max-lg:z-40">
      <div className="w-full h-full flex justify-center items-center">
        <div style={imageStyle}>
          <Link href={"/"}>
            <div className="flex flex-col items-center text-center">
              <h1 id="diarc">DIARC</h1>
              <p id="studio" className="tracking-[72px] text-4xl text-white ml-20">
                STUDIO
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
