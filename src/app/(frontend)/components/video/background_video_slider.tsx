'use client';

import React, { useEffect, useRef, useState } from 'react';

export const VideoSliderBackground = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen bg-white">
      {/* Top Left */}
      <div className="absolute top-8 left-8 text-black">
        Top Left Item
      </div>

      {/* Top Right */}
      <div className="absolute top-8 right-8 text-black">
        Top Right Item
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-8 left-8 text-black">
        Bottom Left Item
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-8 right-8 text-black">
        Bottom Right Item
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoSliderBackground;