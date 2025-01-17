"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play } from 'lucide-react';

const VideoToIframe = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasInteractedRef = useRef(false);

  const handleStartExperience = () => {
    setShowVideo(false);
    hasInteractedRef.current = false;
  };

  const handleInteraction = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setShowOverlay(false);
    }
  };

  const handleIframeInteraction = () => {
    hasInteractedRef.current = true;
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.log("Auto-play was prevented:", error));
    }
  }, [showVideo]);

  useEffect(() => {
    if (!showVideo) {
      interactionTimeoutRef.current = setTimeout(() => {
        if (!hasInteractedRef.current) {
          setShowVideo(true);
        }
      }, 10000);

      const iframe = iframeRef.current;
      if (iframe) {
        iframe.addEventListener('mousemove', handleIframeInteraction);
        iframe.addEventListener('touchstart', handleIframeInteraction);
      }

      return () => {
        if (interactionTimeoutRef.current) {
          clearTimeout(interactionTimeoutRef.current);
        }
        if (iframe) {
          iframe.removeEventListener('mousemove', handleIframeInteraction);
          iframe.removeEventListener('touchstart', handleIframeInteraction);
        }
      };
    }
  }, [showVideo]);

  return (
    <div className="relative w-full h-screen">
      {showVideo ? (
        <div 
          className="relative w-full h-full"
          onMouseEnter={handleInteraction}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleInteraction}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          >
            <source src="/test1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              showOverlay ? 'opacity-50' : 'opacity-0'
            }`} 
          />
          <button
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 flex items-center p-2 rounded-full border border-white ${
              showOverlay ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleStartExperience}
          >
            <Play className="mr-2 h-4 w-4" /> Start Experience
          </button>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          id="arcane-player-frame"
          src="https://embed.arcanemirage.com/1aaa4bb5-6350-4693-a8ab-8c8a91d4834c?key=aWQ9NDM2OCZrZXk9MWFhYTRiYjUtNjM1MC00NjkzLWE4YWItOGM4YTkxZDQ4MzRjJnRva2VuPVlFbnc5R2JCR1lwNg=="
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          allow="fullscreen; microphone"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoToIframe;

