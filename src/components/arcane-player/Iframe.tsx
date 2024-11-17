"use client"

import React, { useEffect, useState } from 'react'

interface IframeProps {
  headerHeight: number;
}

const Iframe = ({ headerHeight }:IframeProps)  => {
  const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
      }, []);
      
      if (!isMounted) return null; // Only render on the client

      
  return (
    <div style={{ marginTop: `${headerHeight}px` }} className="w-full h-full">

    <iframe
        id="arcane-player-frame"
        src="https://embed.arcanemirage.com/1aaa4bb5-6350-4693-a8ab-8c8a91d4834c?key=aWQ9NDM2OCZrZXk9MWFhYTRiYjUtNjM1MC00NjkzLWE4YWItOGM4YTkxZDQ4MzRjJnRva2VuPVlFbnc5R2JCR1lwNg=="
        frameBorder="0"
        width="100%"
        className="w-full h-screen"
        allow="fullscreen; microphone"
        allowFullScreen
        ></iframe>
        </div>
  )
}

export default Iframe