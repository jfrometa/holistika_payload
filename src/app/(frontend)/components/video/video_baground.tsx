import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from 'react';
import React from 'react';

import type { VideoQualityLevel, VideoAnalytics } from './video_utility';
import { VideoAnalyticsTracker, NetworkSpeedTest, VideoPreloader } from './video_utility';
interface VideoBackgroundProps {
  videoSources: VideoQualityLevel[];
  videoPoster: string;
  onAnalytics?: (analytics: VideoAnalytics) => void;
}

export function VideoBackground({ videoSources, videoPoster, onAnalytics }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const analyticsRef = useRef<VideoAnalyticsTracker>(new VideoAnalyticsTracker());
  const networkSpeedTest = useRef(NetworkSpeedTest.getInstance());
  const [currentQuality, setCurrentQuality] = useState<VideoQualityLevel>(
    videoSources.find(s => s.quality === 'medium') || videoSources[0],
  );
  const [videoError, setVideoError] = useState<boolean>(false);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const retryAttemptsRef = useRef<number>(0);
  const maxRetryAttempts = 3;

  // Network speed monitoring and quality switching
  const monitorNetworkAndSwitch = useCallback(async () => {
    try {
      const speed = await networkSpeedTest.current.measureNetworkSpeed();
      analyticsRef.current.updateNetworkSpeed(speed);

      // Determine optimal quality based on network speed
      let optimalQuality: VideoQualityLevel;
      if (speed > 5000000) {
        // 5 Mbps
        optimalQuality = videoSources.find(s => s.quality === 'high') || currentQuality;
      } else if (speed > 2000000) {
        // 2 Mbps
        optimalQuality = videoSources.find(s => s.quality === 'medium') || currentQuality;
      } else {
        optimalQuality = videoSources.find(s => s.quality === 'low') || currentQuality;
      }

      if (optimalQuality.src !== currentQuality.src) {
        const video = videoRef.current;
        if (video) {
          const currentTime = video.currentTime;
          setCurrentQuality(optimalQuality);
          analyticsRef.current.incrementQualitySwitch();
          analyticsRef.current.updateQuality(optimalQuality.quality);
          video.currentTime = currentTime;
        }
      }
    } catch (error) {
      console.error('Failed to monitor network speed:', error);
    }
  }, [currentQuality, videoSources]);

  // Preload videos
  useEffect(() => {
    VideoPreloader.preloadVideo(videoSources).catch(console.error);
  }, [videoSources]);

  // Setup video player and error recovery
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let networkCheckInterval: string | number | NodeJS.Timeout | undefined;

    const setupVideo = async () => {
      try {
        video.load();
        await video.play();
        video.muted = true;
        analyticsRef.current.updateLoadTime();

        // Start network monitoring
        networkCheckInterval = setInterval(monitorNetworkAndSwitch, 30000);
      } catch (error) {
        console.error('Video playback failed:', error);
        handleVideoError();
      }
    };

    const handleVideoError = async () => {
      analyticsRef.current.incrementFailedAttempts();

      if (retryAttemptsRef.current < maxRetryAttempts) {
        retryAttemptsRef.current++;

        // Try switching to a lower quality
        const lowerQuality = videoSources.find(s => s.bitrate < currentQuality.bitrate);

        if (lowerQuality) {
          setCurrentQuality(lowerQuality);
          analyticsRef.current.updateQuality(lowerQuality.quality);
          await setupVideo();
        } else {
          setVideoError(true);
        }
      } else {
        setVideoError(true);
      }
    };

    // Event listeners
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(handleVideoError);
      }
    };

    const handleBuffering = () => {
      setIsBuffering(true);
      analyticsRef.current.incrementBuffering();
    };

    const handlePlaying = () => {
      setIsBuffering(false);
    };

    // Attach event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    video.addEventListener('waiting', handleBuffering);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleVideoError);

    // Initial setup
    setupVideo();

    // Send analytics periodically
    const analyticsInterval = setInterval(() => {
      const analytics = analyticsRef.current.getAnalytics();
      onAnalytics?.(analytics);
      analyticsRef.current.sendAnalytics();
    }, 60000);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.removeEventListener('waiting', handleBuffering);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleVideoError);
      clearInterval(networkCheckInterval);
      clearInterval(analyticsInterval);
    };
  }, [currentQuality, monitorNetworkAndSwitch, onAnalytics, videoSources]);

  // Render error state
  if (videoError) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${videoPoster})` }}
        role="Image"
        aria-label="Background image"
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={videoPoster}
      >
        <source src={currentQuality.src} type="video/mp4" />
        <Image
          src={videoPoster}
          alt="Fallback background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      {/* Loading indicator */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        </div>
      )}
    </>
  );
}
