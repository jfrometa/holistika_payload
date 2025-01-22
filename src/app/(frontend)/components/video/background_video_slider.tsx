'use client';

import React, {
  useState,
  useEffect,
  useRef,
  memo,
  useCallback
} from 'react';
import BackgroundVideo from 'next-video/background-video';
import SlideCounter from './slider-counter';
import VideoSkeleton from './video_skeleton';

// Constants
const TRANSITION_DURATION = 500;
const VIDEO_END_THRESHOLD = 0.5;



const commonVideoStyles = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover' as const,
  objectPosition: 'center',
  backgroundColor: '#000',
  margin: 'auto'
};

// 1) Container & sliding container: zIndex: 0
const containerStyles = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: '#000',
  zIndex: 0, // explicitly behind
};

const slidingContainerStyles = {
  position: 'relative' as const,
  display: 'flex',
  width: '100vw',
  height: '100vh',
  transform: 'translateX(0)',
  transition: 'transform 500ms ease-in-out',
  backgroundColor: 'transparent',
  zIndex: 0,
};

const videoContainerStyles = {
  position: 'relative' as const,
  width: '100vw',
  height: '100vh',
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'transparent',
  zIndex: 0,
};

// Type definitions (adjust if needed)
interface VideoItem {
  brandName: string;
  title: string;
  src: string;
  id: string;
}

interface VideoOverlayProps {
  videos: VideoItem[];
}

/**
 * Single Video element, wrapped in `memo` to avoid unnecessary re-renders.
 */
const VideoElement = memo(({
  video,
  videoRef,
  onLoadStart,
  onCanPlay,
  onError
}: {
  video: VideoItem;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onError?: (error: any) => void;
}) => {
  return (
    <div style={videoContainerStyles}>
      <BackgroundVideo
        ref={videoRef}
        style={commonVideoStyles}
        streamType="on-demand"
        playbackId={video.id}
        src={video.src}
        muted
        autoPlay
        playsInline
        preload="auto"
        onLoadStart={onLoadStart}
        onCanPlay={onCanPlay}
        onError={onError}
      />
    </div>
  );
});
VideoElement.displayName = 'VideoElement';

/**
 * Main VideoOverlay component to handle:
 * - Sliding from one video to the next
 * - Showing a skeleton only on the initial load
 * - Automatic transition near the end of a video
 */
const VideoOverlay: React.FC<VideoOverlayProps> = memo(({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  // Only for the very first video load:
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Sliding/transition state
  const [isSliding, setIsSliding] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Error handling
  const [hasError, setHasError] = useState(false);

  // Refs to the actual <video> elements
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  // Ref to measure time between transitions (avoid multiple triggers)
  const lastTransitionTime = useRef<number>(0);

  // Ref to the sliding container element
  const slidingContainerRef = useRef<HTMLDivElement>(null);

  const currentVideo = videos[currentIndex];
  const nextVideo = nextIndex !== null ? videos[nextIndex] : null;

  /**
   * Update (force) each video to the same styling/dimensions if needed.
   * Called on mount and on window resize.
   */
  const updateVideoDimensions = useCallback(() => {
    [currentVideoRef.current, nextVideoRef.current].forEach((video) => {
      if (video) {
        Object.assign(video.style, commonVideoStyles);
      }
    });
  }, []);

  /**
   * Attach resize listener once, then remove on unmount.
   */
  useEffect(() => {
    updateVideoDimensions();
    window.addEventListener('resize', updateVideoDimensions);
    return () => window.removeEventListener('resize', updateVideoDimensions);
  }, [updateVideoDimensions]);

  /**
   * Slide to the next video. We do a CSS transform animation:
   * - Translate container to -100vw
   * - After `TRANSITION_DURATION`, swap indexes
   * - Reset transform to 0
   */
  const handleVideoTransition = useCallback(() => {
    const now = Date.now();
    const timeSinceLastTransition = now - lastTransitionTime.current;

    if (isTransitioning || timeSinceLastTransition < TRANSITION_DURATION) {
      return;
    }
    setIsTransitioning(true);

    const next = (currentIndex + 1) % videos.length;
    setNextIndex(next);
    setIsSliding(true);
    lastTransitionTime.current = now;

    // Trigger the slide animation
    requestAnimationFrame(() => {
      if (slidingContainerRef.current) {
        slidingContainerRef.current.style.transform = 'translateX(-100vw)';
      }
    });

    // After the animation finishes, swap
    setTimeout(() => {
      setCurrentIndex(next);
      setNextIndex(null);
      setIsSliding(false);
      setIsTransitioning(false);

      // Reset the container for the next slide
      if (slidingContainerRef.current) {
        slidingContainerRef.current.style.transition = 'none';
        slidingContainerRef.current.style.transform = 'translateX(0)';
        // Force reflow so the browser picks up the "no transition" style
        void slidingContainerRef.current.offsetHeight;
        // Then reapply the transition styles for subsequent slides
        slidingContainerRef.current.style.transition = 'transform 500ms ease-in-out';
      }
    }, TRANSITION_DURATION);
  }, [currentIndex, isTransitioning, videos.length]);

  /**
   * Watch the current video’s time; transition automatically near the end.
   */
  const handleTimeUpdate = useCallback(() => {
    const video = currentVideoRef.current;
    if (!video || isTransitioning) return;

    const timeRemaining = video.duration - video.currentTime;
    // If there is a valid duration, we check if we're near the end
    if (video.duration && timeRemaining <= VIDEO_END_THRESHOLD) {
      handleVideoTransition();
    }
  }, [handleVideoTransition, isTransitioning]);

  /**
   * Only set `isLoading` to `true` if this is the **very first** load (isInitialLoad).
   */
  const handleLoadStart = useCallback(() => {
    if (isInitialLoad) {
      setIsLoading(true);
    }
  }, [isInitialLoad]);

  /**
   * Once the video can play, if this is the first video, hide the skeleton permanently.
   */
  const handleCanPlay = useCallback(() => {
    if (isInitialLoad) {
      setIsLoading(false);
      setIsInitialLoad(false);
    }
    updateVideoDimensions();
  }, [isInitialLoad, updateVideoDimensions]);

  /**
   * Handle video load error. If fatal, show fallback UI or error message.
   */
  const handleVideoError = useCallback((error: any) => {
    console.log('Video loading error:', error);
    if (error?.fatal) {
      setHasError(true);
      setIsLoading(false);
    }
  }, []);

  /**
   * Attach events on the current video element:
   * - timeupdate: triggers auto-transition near the end
   * - ended: fallback if the timeupdate didn’t catch it
   * - error: handle load errors
   * - loadstart, canplay: manage skeleton only for initial load
   * - loadedmetadata: update dimensions
   * - stalled/waiting: optional re-play or show buffering state
   */
  useEffect(() => {
    const vid = currentVideoRef.current;
    if (!vid) return;

    const onEnded = () => {
      if (!isTransitioning) {
        handleVideoTransition();
      }
    };

    vid.addEventListener('timeupdate', handleTimeUpdate);
    vid.addEventListener('ended', onEnded);
    vid.addEventListener('error', handleVideoError);
    vid.addEventListener('loadstart', handleLoadStart);
    vid.addEventListener('canplay', handleCanPlay);
    vid.addEventListener('loadedmetadata', updateVideoDimensions);

    vid.addEventListener('stalled', () => {
      // Attempt to resume if partially played.
      if (vid.currentTime > 0) {
        vid.play().catch(() => {});
      }
    });
    vid.addEventListener('waiting', () => {
      // This is optional. For instance, you might show a small spinner, etc.
      console.log('Video is buffering...');
    });

    return () => {
      vid.removeEventListener('timeupdate', handleTimeUpdate);
      vid.removeEventListener('ended', onEnded);
      vid.removeEventListener('error', handleVideoError);
      vid.removeEventListener('loadstart', handleLoadStart);
      vid.removeEventListener('canplay', handleCanPlay);
      vid.removeEventListener('loadedmetadata', updateVideoDimensions);
    };
  }, [
    handleTimeUpdate,
    handleVideoError,
    handleLoadStart,
    handleCanPlay,
    handleVideoTransition,
    isTransitioning,
    updateVideoDimensions
  ]);

  /**
   * Reset error and transition states whenever the currentIndex changes.
   */
  useEffect(() => {
    setHasError(false);
    setIsTransitioning(false);
  }, [currentIndex]);

  /**
   * If there's a fatal error loading the video, show an error overlay or fallback UI.
   */
  if (hasError) {
    return (
      <div style={containerStyles} className="flex items-center justify-center">
        <div className="text-white text-xl bg-red-500/50 px-6 py-4 rounded-lg backdrop-blur-sm">
          Failed to load video. Retrying...
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      <div ref={slidingContainerRef} style={slidingContainerStyles}>
        {/* CURRENT VIDEO */}
        <VideoElement
          video={currentVideo}
          videoRef={currentVideoRef}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleVideoError}
        />

        {/* NEXT VIDEO (hidden/off-screen until we slide) */}
        {nextVideo && (
          <VideoElement
            video={nextVideo}
            videoRef={nextVideoRef}
          />
        )}
      </div>

      {/* Only show the skeleton on the very first load */}
      {isInitialLoad && isLoading && <VideoSkeleton isVisible />}

      {/* Remove "transition-opacity" if you don’t want a fade in/out of the HUD */} 
           <div
        className={`absolute inset-0 z-20 pointer-events-none ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute top-8 left-8 text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          {currentVideo.brandName}
        </div>
        <div className="absolute bottom-8 left-8 text-white text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          {currentVideo.title}
        </div>
        <div className="absolute bottom-8 right-8 text-white text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
          <SlideCounter current={currentIndex + 1} total={videos.length} />
        </div>
  
    </div>
    </div>
  );
});

VideoOverlay.displayName = 'VideoOverlay';
export default VideoOverlay;



// 'use client';

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import BackgroundVideo from 'next-video/background-video';
// import SlideCounter from './slider-counter';
// import VideoSkeleton from './video_skeleton';

// // --------------------
// //    CONSTANTS
// // --------------------
// const TRANSITION_DURATION = 500;  // milliseconds
// const VIDEO_END_THRESHOLD = 0.5;  // seconds from the end => trigger next

// // --------------------
// //    STYLES
// // --------------------
// const containerStyles = {
//   position: 'fixed' as const,
//   top: 0,
//   left: 0,
//   width: '100vw',
//   height: '100vh',
//   overflow: 'hidden',
//   backgroundColor: '#000'
// };

// const slidingContainerStyles = {
//   position: 'relative' as const,
//   display: 'flex',
//   width: '200vw', // side-by-side for the slide
//   height: '100vh',
//   transform: 'translateX(0)',
//   transition: `transform ${TRANSITION_DURATION}ms ease-in-out`
// };

// const videoContainerStyles = {
//   position: 'relative' as const,
//   width: '100vw',
//   height: '100vh',
//   flexShrink: 0,
//   overflow: 'hidden',
//   backgroundColor: '#000'
// };

// const commonVideoStyles = {
//   position: 'absolute' as const,
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   width: '100vw',
//   height: '100vh',
//   objectFit: 'cover' as const,
//   objectPosition: 'center',
//   margin: 'auto',
//   backgroundColor: '#000'
// };

// // --------------------
// //    TYPES
// // --------------------
// interface VideoItem {
//   brandName: string;
//   title: string;
//   src: string;
//   id: string;
// }

// interface VideoOverlayProps {
//   videos: VideoItem[];
// }

// // --------------------
// //   MAIN COMPONENT
// // --------------------
// export default function VideoOverlay({ videos }: VideoOverlayProps) {
//   // If there's only one video, no sliding
//   const hasAtLeastTwo = videos.length > 1;

//   // CURRENT + INCOMING indexes into `videos`
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [incomingIndex, setIncomingIndex] = useState(
//     hasAtLeastTwo ? 1 : 0
//   );

//   // Which “slot” is the current video in? (0 => Left, 1 => Right)
//   // This determines the transform (0 => left slot is current, 1 => right slot is current)
//   const [activeSlot, setActiveSlot] = useState<0 | 1>(0);

//   // Loading & skeleton
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);

//   // Are we in the middle of a slide transition?
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const lastTransitionRef = useRef<number>(0);

//   // Basic error handling
//   const [hasError, setHasError] = useState(false);

//   // Refs to DOM elements
//   const slideContainerRef = useRef<HTMLDivElement>(null);

//   // Two <video> refs:
//   const currentVideoRef = useRef<HTMLVideoElement | null>(null);
//   const incomingVideoRef = useRef<HTMLVideoElement | null>(null);

//   // 1) The “current” video data
//   const currentVideo = videos[currentIndex];
//   // 2) The “incoming” (next) video data
//   const incomingVideo = videos[incomingIndex];

//   // --------------------
//   //    UPDATE STYLES
//   // --------------------
//   const updateVideoDimensions = useCallback(() => {
//     [currentVideoRef.current, incomingVideoRef.current].forEach((vid) => {
//       if (vid) {
//         Object.assign(vid.style, commonVideoStyles);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     updateVideoDimensions();
//     window.addEventListener('resize', updateVideoDimensions);
//     return () => window.removeEventListener('resize', updateVideoDimensions);
//   }, [updateVideoDimensions]);

//   // --------------------
//   //  PREP & START VIDEO
//   // --------------------
//   // Load the video at time=0 (but do not play)
//   const prepareVideo = useCallback(async (videoEl: HTMLVideoElement | null) => {
//     videoEl?.pause();
//     videoEl.currentTime = 0;
//     videoEl?.load(); // This triggers the loading process
//   }, []);

//   // Attempt to .play() the given video
//   const startVideo = useCallback(async (videoEl: HTMLVideoElement | null) => {
//     try {
//       await videoEl?.play();
//     } catch (err) {
//       console.error('Error starting video:', err);
//     }
//   }, []);

//   // --------------------
//   //    SLIDE HELPERS
//   // --------------------
//   const doSlideAnimation = useCallback(() => {
//     if (!slideContainerRef.current) return;
//     slideContainerRef.current.style.transform = 'translateX(-100vw)';
//   }, []);

//   const resetSlideAnimation = useCallback(() => {
//     if (!slideContainerRef.current) return;
//     // Temporarily remove transitions to snap back
//     slideContainerRef.current.style.transition = 'none';
//     slideContainerRef.current.style.transform = 'translateX(0)';
//     // Force reflow
//     void slideContainerRef.current.offsetHeight;
//     // Re-enable transition
//     slideContainerRef.current.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
//   }, []);

//   // Next index helper
//   const getNextIndex = useCallback(
//     (idx: number) => (idx + 1) % videos.length,
//     [videos.length]
//   );

//   // ------------------------------
//   //  TRANSITION TO INCOMING VIDEO
//   // ------------------------------
//   const handleSlideTransition = useCallback(async () => {
//     if (!hasAtLeastTwo || isTransitioning) return;

//     const now = Date.now();
//     if (now - lastTransitionRef.current < TRANSITION_DURATION) {
//       return; // Avoid double-trigger
//     }
//     lastTransitionRef.current = now;
//     setIsTransitioning(true);

//     // 1) Prepare the incomingVideoRef (pause, reset, load),
//     //    do not start playing it yet if you want to start *after* it slides in
//     if (incomingVideoRef.current) {
//       await prepareVideo(incomingVideoRef.current);
//     }

//     // 2) Slide the container
//     doSlideAnimation();

//     // 3) After the CSS animation, swap them
//     setTimeout(() => {
//       // Pause/reset the *old* current video
//       if (currentVideoRef.current) {
//         currentVideoRef.current.pause();
//         currentVideoRef.current.currentTime = 0;
//       }

//       // Swap indexes
//       setCurrentIndex(incomingIndex);

//       // If we were using activeSlot=0 => now we want activeSlot=1, etc.
//       setActiveSlot((prev) => (prev === 0 ? 1 : 0));

//       resetSlideAnimation();
//       setIsTransitioning(false);

//       // 4) Now that the “incoming” is truly active, we can update the next incoming index
//       setIncomingIndex(getNextIndex(incomingIndex));
//     }, TRANSITION_DURATION);
//   }, [
//     hasAtLeastTwo,
//     isTransitioning,
//     doSlideAnimation,
//     resetSlideAnimation,
//     prepareVideo,
//     incomingIndex,
//     getNextIndex
//   ]);

//   // --------------------
//   //   TIMEUPDATE LOGIC
//   // --------------------
//   // The “current” video can trigger a slide if near the end
//   const handleTimeUpdate = useCallback(() => {
//     if (isTransitioning || !currentVideoRef.current) return;
//     const vid = currentVideoRef.current;

//     const remaining = vid.duration - vid.currentTime;
//     if (vid.duration && remaining <= VIDEO_END_THRESHOLD && !vid.paused) {
//       // Only slide if truly near the end
//       handleSlideTransition();
//     }
//   }, [handleSlideTransition, isTransitioning]);

//   // --------------------
//   //   INITIAL SETUP
//   // --------------------
//   // On mount, prepare BOTH videos, then auto-play the current.
//   useEffect(() => {
//     if (!currentVideoRef.current) return;

//     (async () => {
//       // 1) Prepare the “current” video
//       await prepareVideo(currentVideoRef.current);

//       // 2) Prepare the “incoming” video (if at least two)
//       if (hasAtLeastTwo && incomingVideoRef.current) {
//         await prepareVideo(incomingVideoRef.current);
//       }

//       // 3) Auto-play the “current” video
//       await startVideo(currentVideoRef.current);

//       setIsLoading(false);
//       setIsInitialLoad(false);
//     })();
//   }, [prepareVideo, startVideo, hasAtLeastTwo]);

//   // --------------------
//   //   CURRENT VIDEO EVENTS
//   // --------------------
//   useEffect(() => {
//     const vid = currentVideoRef.current;
//     if (!vid) return;

//     const onTimeUpdate = () => handleTimeUpdate();
//     const onEnded = () => {
//       // If it's ended fully, we also trigger the slide
//       if (!isTransitioning) {
//         handleSlideTransition();
//       }
//     };
//     const onError = (err: any) => {
//       console.error('Video error:', err);
//       setHasError(true);
//       setIsLoading(false);
//     };
//     const onLoadStart = () => {
//       if (isInitialLoad) setIsLoading(true);
//     };
//     const onCanPlay = () => {
//       if (isInitialLoad) {
//         setIsLoading(false);
//         setIsInitialLoad(false);
//       }
//     };

//     vid.addEventListener('timeupdate', onTimeUpdate);
//     vid.addEventListener('ended', onEnded);
//     vid.addEventListener('error', onError);
//     vid.addEventListener('loadstart', onLoadStart);
//     vid.addEventListener('canplay', onCanPlay);

//     // Cleanup
//     return () => {
//       vid.removeEventListener('timeupdate', onTimeUpdate);
//       vid.removeEventListener('ended', onEnded);
//       vid.removeEventListener('error', onError);
//       vid.removeEventListener('loadstart', onLoadStart);
//       vid.removeEventListener('canplay', onCanPlay);
//     };
//   }, [handleTimeUpdate, handleSlideTransition, isInitialLoad, isTransitioning]);

//   // Clear error on new current index
//   useEffect(() => {
//     setHasError(false);
//   }, [currentIndex]);

//   // --------------------
//   //   RENDER
//   // --------------------
//   if (hasError) {
//     return (
//       <div style={containerStyles} className="flex items-center justify-center">
//         <div className="text-white text-xl bg-red-500/50 px-6 py-4 rounded-lg backdrop-blur-sm">
//           Video error occurred.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={containerStyles}>
//       <div ref={slideContainerRef} style={slidingContainerStyles}>
//         {/* LEFT SLOT => the "activeSlot=0" is the "current" video */}
//         <div style={videoContainerStyles}>
//           <BackgroundVideo
//             ref={currentVideoRef}
//             style={commonVideoStyles}
//             streamType="on-demand"
//             src={videos[currentIndex].src}
//             playbackId={videos[currentIndex].id}
//             muted
//             autoPlay
//             preload="auto"
//             playsInline
//           />
//         </div>

//         {/* RIGHT SLOT => the "activeSlot=1" is the "current" video */}
//         <div style={videoContainerStyles}>
//           <BackgroundVideo
//             ref={incomingVideoRef}
//             style={commonVideoStyles}
//             streamType="on-demand"
//             src={videos[incomingIndex].src}
//             playbackId={videos[incomingIndex].id}
//             muted
//             autoPlay
//             preload="auto"
//             playsInline
//           />
//         </div>
//       </div>

//       {/* Show skeleton only on the very first load */}
//       {isInitialLoad && isLoading && <VideoSkeleton isVisible />}

//       {/* Overlay / HUD */}
//       <div
//         className={`fixed inset-0 z-20 pointer-events-none transition-opacity duration-500 ${
//           isLoading ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         <div className="absolute top-8 left-8 text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
//           {currentVideo.brandName}
//         </div>
//         <div className="absolute bottom-8 left-8 text-white text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
//           {currentVideo.title}
//         </div>
//         <div className="absolute bottom-8 right-8 text-white text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
//           <SlideCounter current={currentIndex + 1} total={videos.length} />
//         </div>
//       </div>
//     </div>
//   );
// }