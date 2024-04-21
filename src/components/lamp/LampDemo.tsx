"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/Lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{lineHeight:1.5}}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center md:text-3xl lg:text-4xl font-medium tracking-tight text-transparent w-[70%] mx-auto"
      >
        <p>
            Based in Buenos Aires, 
            we offer personalized services to 
            bring worldwide digital 
            experiences to life. 

            We offer a cost-effective solution 
            for outsourcing personalized, 
            high quality 3D art for Immersive <br />  
            Experiences, Metaverse and Gaming. <br />
        
            We build, digitally.
        </p>
      </motion.h1>
    </LampContainer>
  );
}
