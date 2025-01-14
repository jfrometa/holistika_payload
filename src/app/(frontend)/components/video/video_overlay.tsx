// 'use client';
// import BackgroundVideo from 'next-video/background-video';
// import { useState, useEffect } from 'react';

// const VideoOverlay = () => {
//  // Avoid hydration mismatch by only rendering video client-side
//  const [mounted, setMounted] = useState(false);

//  useEffect(() => {
//    setMounted(true);
//  }, []);
// // secret: cNZ78E8gnax0KNbGLw6UVuwiz3eBWWG7m807Pn0bRcfhYpHBU/PGGS31AVrZxhiqC+kdciXy0vg
// //' token: 9858d866-53fb-4b3b-b20e-68ea85168bda
//  return (
//    <div className="relative w-full h-screen overflow-hidden">
//      {/* Video conditionally rendered */}
     
//      {mounted && (
//        <div className="absolute inset-0 w-screen h-screen z-0">
//          <div className="relative w-screen h-screen ">
//            <BackgroundVideo
//              className="object-cover w-screen h-full"
//               streamType="on-demand"
//               playbackId="YgfnnT6R1IaYrznDel02GRBtYwtfhU5SncnhYgZg9wMY"
//              muted 
//              loop
//              autoPlay
//              playsInline
//              src="/video/v1/assets/WPnWKSmSdxk01IEzqDjltrDrE01nwf2pyubXiGHfk02i4Q"
//            />
//          </div>
//        </div>
//      )}

//      {/* Overlay items */}
//      <div className="absolute inset-0 z-20 grid grid-cols-2 p-8">
//        {['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'].map((text, i) => (
//          <div 
//            key={text}
//            className={`text-white bg-black/50 p-4 rounded-md w-fit
//              ${i < 2 ? 'self-start' : 'self-end'}
//              ${i % 2 ? 'justify-self-end' : 'justify-self-start'}`}
//          >
//            {text} Item
//          </div>
//        ))}
//      </div>
//    </div>
//  );
// };

// export default VideoOverlay;