'use client';

import { useState, useEffect } from 'react';

const VideoOverlay = () => {
 // Avoid hydration mismatch by only rendering video client-side
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
   setMounted(true);
 }, []);

 return (
   <div className="relative w-full h-screen overflow-hidden">
     {/* Video conditionally rendered */}
     {mounted && (
       <div className="absolute inset-0 w-full h-full z-0">
         <div className="relative w-full h-full aspect-video">
           <video
             className="object-cover w-full h-full"
             muted 
             loop
             autoPlay
             playsInline
             src="/api/media/file/6266-190550868_large.mp4"
           />
         </div>
       </div>
     )}

     {/* Overlay items */}
     <div className="absolute inset-0 z-20 grid grid-cols-2 p-8">
       {['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'].map((text, i) => (
         <div 
           key={text}
           className={`text-white bg-black/50 p-4 rounded-md w-fit
             ${i < 2 ? 'self-start' : 'self-end'}
             ${i % 2 ? 'justify-self-end' : 'justify-self-start'}`}
         >
           {text} Item
         </div>
       ))}
     </div>
   </div>
 );
};

export default VideoOverlay;