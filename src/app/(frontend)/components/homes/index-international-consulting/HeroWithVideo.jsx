// HeroWithVideo.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroWithVideo() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
  }, []);

  return (
    <div className="relative slider-area slider-style-1 variation-default height-850">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="assets/images/bg/bg-image-18.jpg"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="assets/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="inner text-center">
            <h1 className="title display-one text-white">
              Holistika <br />
              <span className="theme-gradient">Innovation</span>{" "}
              <span className="theme-gradient">Consultancy</span>.
            </h1>
            <p className="description text-white/90 max-w-2xl mx-auto mb-8">
              Diseñamos empresas y marcas relevantes, capaces de prosperar frente al cambio constante.
            </p>
            <div className="button-group flex flex-wrap gap-4 justify-center">
              <a
                className="btn-default btn-medium btn-icon"
                target="_blank"
                href="https://tally.so/r/npAyyJ"
                rel="noopener noreferrer"
              >
                Veamos tu proyecto <i className="feather-arrow-right" />
              </a>
              <Link
                className="btn-default btn-medium btn-icon btn-border"
                href="/contact"
              >
                Hablemos <i className="feather-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}