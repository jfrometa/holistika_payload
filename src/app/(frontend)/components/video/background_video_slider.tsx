'use client';

import { useState, useEffect, useRef, memo, useCallback } from 'react';
import BackgroundVideo from 'next-video/background-video';
import SlideCounter from './slider-counter';
import VideoSkeleton from './video_skeleton';

// Constants
const TRANSITION_DURATION = 500;
const VIDEO_END_THRESHOLD = 0.5;

interface VideoItem {
  brandName: string;
  title: string;
  src: string;
  id: string;
}

interface VideoOverlayProps {
  videos: VideoItem[];
}

// Common video styles
const commonVideoStyles = {
  position: 'absolute' as const,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover' as const,
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  margin: 'auto',
};

const VideoOverlay: React.FC<VideoOverlayProps> = memo(({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const currentVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);
  const lastTransitionTime = useRef<number>(0);
  const slidingContainerRef = useRef<HTMLDivElement>(null);

  const currentVideo = videos[currentIndex];
  const nextVideo = nextIndex !== null ? videos[nextIndex] : null;

  // Update video dimensions
  const updateVideoDimensions = useCallback(() => {
    const updateVideoStyle = (videoElement: HTMLVideoElement | null) => {
      if (!videoElement) return;
      Object.assign(videoElement.style, commonVideoStyles);
    };

    updateVideoStyle(currentVideoRef.current);
    updateVideoStyle(nextVideoRef.current);
  }, []);

  // Handle window resize
  useEffect(() => {
    updateVideoDimensions();
    window.addEventListener('resize', updateVideoDimensions);
    return () => window.removeEventListener('resize', updateVideoDimensions);
  }, [updateVideoDimensions]);

  // Update dimensions when videos change
  useEffect(() => {
    updateVideoDimensions();
  }, [currentIndex, nextIndex, updateVideoDimensions]);

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

    if (slidingContainerRef.current) {
      slidingContainerRef.current.style.transform = 'translateX(0)';
      void slidingContainerRef.current.offsetHeight;
      slidingContainerRef.current.style.transform = 'translateX(-100%)';
    }

    setTimeout(() => {
      setCurrentIndex(next);
      setNextIndex(null);
      setIsSliding(false);
      setIsTransitioning(false);
      
      if (slidingContainerRef.current) {
        slidingContainerRef.current.style.transition = 'none';
        slidingContainerRef.current.style.transform = 'translateX(0)';
        void slidingContainerRef.current.offsetHeight;
        slidingContainerRef.current.style.transition = 'transform 500ms ease-in-out';
      }
    }, TRANSITION_DURATION);
  }, [currentIndex, isTransitioning, videos.length]);

  const handleTimeUpdate = useCallback(() => {
    const video = currentVideoRef.current;
    if (!video || isTransitioning) return;

    const timeRemaining = video.duration - video.currentTime;
    
    if (video.duration && timeRemaining <= VIDEO_END_THRESHOLD) {
      handleVideoTransition();
    }
  }, [handleVideoTransition, isTransitioning]);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsLoading(false);
    setIsInitialLoad(false);
    updateVideoDimensions();
  }, [updateVideoDimensions]);

  const handleVideoError = useCallback((error: any) => {
    console.error('Video loading error:', error);
    setHasError(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const vid = currentVideoRef.current;
    if (!vid) return;

    const eventHandlers = {
      timeupdate: handleTimeUpdate,
      ended: () => {
        if (!isTransitioning) {
          handleVideoTransition();
        }
      },
      error: handleVideoError,
      loadstart: handleLoadStart,
      canplay: handleCanPlay,
      loadedmetadata: updateVideoDimensions
    };

    Object.entries(eventHandlers).forEach(([event, handler]) => {
      vid.addEventListener(event, handler);
    });

    return () => {
      Object.entries(eventHandlers).forEach(([event, handler]) => {
        vid.removeEventListener(event, handler);
      });
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

  useEffect(() => {
    setHasError(false);
    setIsTransitioning(false);
  }, [currentIndex]);

  if (hasError) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-white text-xl bg-red-500/50 px-6 py-4 rounded-lg backdrop-blur-sm">
          Failed to load video. Retrying...
        </div>
      </div>
    );
  }

  return (
    <div className="relative inset-0 w-screen h-screen bg-black overflow-hidden">
      <div 
        ref={slidingContainerRef}
        className="flex w-screen h-screen relative"
        style={{
          transform: 'translateX(0)',
          transition: 'transform 500ms ease-in-out'
        }}
      >
        <div className="w-screen h-screen flex-shrink-0 relative overflow-hidden">
          <BackgroundVideo
            ref={currentVideoRef}
            className="absolute w-screen h-screen object-cover"
            style={commonVideoStyles}
            streamType="on-demand"
            playbackId={currentVideo.id}
            src={currentVideo.src}
            muted
            autoPlay
            playsInline
            preload="auto"
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
            onError={handleVideoError}
          />
        </div>

        {nextVideo && (
          <div className="w-screen h-screen flex-shrink-0 relative">
            <BackgroundVideo
              ref={nextVideoRef}
              className="absolute w-screen h-screen object-cover"
              style={commonVideoStyles}
              streamType="on-demand"
              playbackId={nextVideo.id}
              // src={nextVideo.src}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
            />
          </div>
        )}
      </div>

      {isInitialLoad && isLoading && <VideoSkeleton isVisible={true} />}

      <div
        className={`fixed inset-0 z-20 pointer-events-none transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-100'
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