'use client';

import { useState, useEffect, useRef, memo } from 'react';
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

  // Refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevVideo = useRef<string | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout>();

  // Current video
  const currentVideo = videos[currentIndex];

  // Mount effect
  useEffect(() => {
    setMounted(true);
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Error reset on video change
  useEffect(() => {
    setHasError(false);
  }, [currentIndex]);

  // Video preloading
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % videos.length;
    const nextVideo = videos[nextIndex];
    
    if (nextVideo?.src) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'video';
      preloadLink.href = nextVideo.src;
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);

      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [currentIndex, videos]);

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

  // Video transition handler
  const handleVideoTransition = () => {
    setFadeOut(true);
    
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setFadeOut(false);
    }, 500);
  };

  // Video event listeners
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onTimeUpdate = () => {
      if (vid.duration && vid.duration - vid.currentTime < 0.5) {
        handleVideoTransition();
      }
    };

    const onEnded = () => {
      if (currentIndex === videos.length - 1) {
        handleVideoTransition();
      }
    };

    // Event listeners
    vid.addEventListener('timeupdate', onTimeUpdate);
    vid.addEventListener('ended', onEnded);
    vid.addEventListener('error', handleVideoError);
    vid.addEventListener('loadstart', handleLoadStart);
    vid.addEventListener('canplay', handleCanPlay);

    return () => {
      vid.removeEventListener('timeupdate', onTimeUpdate);
      vid.removeEventListener('ended', onEnded);
      vid.removeEventListener('error', handleVideoError);
      vid.removeEventListener('loadstart', handleLoadStart);
      vid.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentIndex, videos.length]);

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
  const VideoComponent = memo(() => (
    <BackgroundVideo
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        willChange: 'transform'
      }}
      src={currentVideo.src}
      streamType="on-demand"
      playbackId={currentVideo.id}
      muted
      autoPlay
      playsInline
      onLoadStart={handleLoadStart}
      onCanPlay={handleCanPlay}
    />
  ));

  VideoComponent.displayName = 'VideoComponent';

  return (
    <div className="fixed inset-0 w-full h-full bg-black">
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