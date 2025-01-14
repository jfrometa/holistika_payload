// VideoSkeleton.tsx
import { memo } from 'react';
import clsx from 'clsx';

interface VideoSkeletonProps {
  isVisible: boolean;
}

const VideoSkeleton = memo(({ isVisible }: VideoSkeletonProps) => {
  if (!isVisible) return null;

  return (
    <div 
      className={clsx(
        "absolute inset-0 w-full h-full bg-gray-900",
        "transition-opacity duration-300",
        "will-change-[opacity,transform]"
      )}
      role="progressbar"
      aria-busy="true"
      aria-label="Loading video"
    >
      {/* Main Video Skeleton Container */}
      <div className={clsx(
        "w-full h-full",
        "bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-800/40",
        "relative overflow-hidden"
      )}>
        {/* Animated Gradient Overlay */}
        <div className={clsx(
          "absolute inset-0",
          "bg-[length:1000px_100%]",
          "animate-[shimmer_2s_infinite_linear]",
          "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]"
        )} />

        {/* Play Button Placeholder */}
        <div className={clsx(
          "absolute top-1/2 left-1/2",
          "-translate-x-1/2 -translate-y-1/2",
          "transform-gpu" // Hardware acceleration
        )}>
          <div className={clsx(
            "w-20 h-20 rounded-full",
            "bg-gray-700/50 backdrop-blur-sm",
            "flex items-center justify-center",
            "animate-[pulse_2s_infinite_ease-in-out]"
          )}>
            <div className="w-16 h-16 rounded-full bg-gray-600/50" />
          </div>
        </div>

        {/* Overlay Elements */}
        <div className="absolute inset-0 z-20">
          {/* Brand Name */}
          <div className={clsx(
            "absolute top-8 left-8",
            "animate-[pulse_2s_infinite_ease-in-out]"
          )}>
            <div className="h-8 w-48 bg-gray-700/50 rounded-lg" />
          </div>

          {/* Title */}
          <div className={clsx(
            "absolute bottom-8 left-8",
            "animate-[pulse_2s_infinite_ease-in-out]"
          )}>
            <div className="h-6 w-64 bg-gray-700/50 rounded-lg" />
          </div>

          {/* Counter */}
          <div className={clsx(
            "absolute bottom-8 right-8",
            "animate-[pulse_2s_infinite_ease-in-out]"
          )}>
            <div className="h-6 w-24 bg-gray-700/50 rounded-lg" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-gray-800 overflow-hidden">
            <div 
              className={clsx(
                "h-full w-full bg-gray-600",
                "animate-[progress-bar_2s_ease-in-out_infinite]",
                "transform-gpu" // Hardware acceleration
              )}
              style={{
                '--progress-bar-animation': 'progress-bar 2s ease-in-out infinite'
              } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

VideoSkeleton.displayName = 'VideoSkeleton';

export default VideoSkeleton;