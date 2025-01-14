'use client';

import { useState, useEffect, useRef, memo, useCallback } from 'react';
import BackgroundVideo from 'next-video/background-video';
import SlideCounter from './slider-counter';
import VideoSkeleton from './video_skeleton';

interface VideoItem {
  brandName: string;
  title: string;
  src: string;
  id: string;
}

interface VideoOverlayProps {
  videos: VideoItem[];
}

const VideoOverlay: React.FC<VideoOverlayProps> = memo(({ videos }) => {
  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevVideo = useRef<string | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout>();
  const lastTransitionTime = useRef<number>(0);
  const checkEndingIntervalRef = useRef<NodeJS.Timer>();

  // Current video
  const currentVideo = videos[currentIndex];

  // Mount effect
  useEffect(() => {
    setMounted(true);
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      if (checkEndingIntervalRef.current) {
        clearInterval(checkEndingIntervalRef.current);
      }
    };
  }, []);

  // Error reset on video change
  useEffect(() => {
    setHasError(false);
    setIsTransitioning(false);
  }, [currentIndex]);

  // Video event handlers
  const handleVideoError = (error: any) => {
    console.error('Video loading error:', error);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    if (prevVideo.current !== currentVideo.src) {
      setIsLoading(true);
      prevVideo.current = currentVideo.src;
    }
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  // Video transition handler with debounce
  const handleVideoTransition = useCallback(() => {
    const now = Date.now();
    const timeSinceLastTransition = now - lastTransitionTime.current;
    
    // Prevent rapid transitions
    if (isTransitioning || timeSinceLastTransition < 500) {
      return;
    }

    setIsTransitioning(true);
    setFadeOut(true);
    lastTransitionTime.current = now;
    
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % videos.length;
        return nextIndex;
      });
      setFadeOut(false);
      setIsTransitioning(false);
    }, 500);
  }, [videos.length, isTransitioning]);

  // Video event listeners with improved end detection
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Start checking for video end when the video starts playing
    const startEndingCheck = () => {
      if (checkEndingIntervalRef.current) {
        clearInterval(checkEndingIntervalRef.current);
      }

      checkEndingIntervalRef.current = setInterval(() => {
        if (vid.duration && vid.currentTime > 0) {
          const timeRemaining = vid.duration - vid.currentTime;
          if (timeRemaining <= 0.5 && !isTransitioning) {
            handleVideoTransition();
          }
        }
      }, 100); // Check every 100ms
    };

    // Event handlers
    const onPlay = () => {
      startEndingCheck();
    };

    const onPause = () => {
      if (checkEndingIntervalRef.current) {
        clearInterval(checkEndingIntervalRef.current);
      }
    };

    const onEnded = () => {
      if (!isTransitioning) {
        handleVideoTransition();
      }
    };

    // Event listeners
    vid.addEventListener('play', onPlay);
    vid.addEventListener('pause', onPause);
    vid.addEventListener('ended', onEnded);
    vid.addEventListener('error', handleVideoError);
    vid.addEventListener('loadstart', handleLoadStart);
    vid.addEventListener('canplay', handleCanPlay);

    // Start the end check if video is already playing
    if (!vid.paused) {
      startEndingCheck();
    }

    return () => {
      if (checkEndingIntervalRef.current) {
        clearInterval(checkEndingIntervalRef.current);
      }
      vid.removeEventListener('play', onPlay);
      vid.removeEventListener('pause', onPause);
      vid.removeEventListener('ended', onEnded);
      vid.removeEventListener('error', handleVideoError);
      vid.removeEventListener('loadstart', handleLoadStart);
      vid.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentIndex, videos.length, handleVideoTransition, isTransitioning]);

  // Source validation
  useEffect(() => {
    if (!currentVideo?.src) {
      handleVideoError(new Error('Invalid video source'));
    }
  }, [currentIndex, currentVideo]);

  // Error state render
  if (hasError) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-white text-xl bg-red-500/50 px-6 py-4 rounded-lg backdrop-blur-sm">
          Error loading video. Please try again later.
        </div>
      </div>
    );
  }

  // Memoized video component
  const VideoComponent = useCallback(() => (
    <BackgroundVideo
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        willChange: 'transform'
      }}
      src={currentVideo.src}
      streamType="on-demand"
      playbackId={currentVideo.id}
      muted
      autoPlay
      playsInline
      preload="auto"
      onLoadStart={handleLoadStart}
      onCanPlay={handleCanPlay}
    />
  ), [currentVideo.src, currentVideo.id, handleLoadStart, handleCanPlay]);

  return (
    <div className="relative inset-0 w-full h-full bg-black">
      {mounted && currentVideo?.src && (
        <>
          <div 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <VideoComponent />
            <VideoSkeleton isVisible={isLoading} />
          </div>

          {/* Overlays */}
          <div 
            className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${
              fadeOut || isLoading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {/* Brand Name */}
            <div className="absolute top-8 left-8 text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              {currentVideo.brandName}
            </div>

            {/* Title */}
            <div className="absolute bottom-8 left-8 text-white text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              {currentVideo.title}
            </div>

            {/* Counter */}
            <div className="absolute bottom-8 right-8 text-white text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              <SlideCounter 
                current={currentIndex + 1}
                total={videos.length} 
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
});

VideoOverlay.displayName = 'VideoOverlay';

export default VideoOverlay;