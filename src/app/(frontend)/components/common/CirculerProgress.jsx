"use client";

import { useEffect, useRef, useState } from "react";

export default function CircularProgress({
  barColor = "#059DFF",
  tracColor = "#0f0f11",
  percent = 80,
  width = 220,
  height = 220,
  textColor,
}) {
  const [currentPercent, setCurrentPercent] = useState(0); // For animated counting
  const progressElement = useRef();
  const requestRef = useRef();

  useEffect(() => {
    const canvas = progressElement.current.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const drawRadialProgress = (percent, barColor, trackColor) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 10;
      const lineWidth = 10;

      // Clear previous drawings
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw track
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = trackColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.closePath();

      // Set round line cap for rounded ends
      ctx.lineCap = "round";

      // Draw progress
      const startAngle = -0.5 * Math.PI; // Start at the top
      const endAngle = startAngle + (percent / 100) * 2 * Math.PI;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.strokeStyle = barColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.closePath();
    };

    const animateProgress = () => {
      if (currentPercent <= percent) {
        drawRadialProgress(currentPercent, barColor, tracColor);
        setCurrentPercent((prev) => prev + 2); // Increment percentage
        requestRef.current = requestAnimationFrame(animateProgress);
      } else {
        cancelAnimationFrame(requestRef.current);
      }
    };

    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        requestRef.current = requestAnimationFrame(animateProgress);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Start the animation when 50% of the element is visible
    });

    observer.observe(progressElement.current);

    return () => {
      cancelAnimationFrame(requestRef.current); // Cleanup animation on unmount
      observer.disconnect();
    };
  }, [currentPercent, percent, barColor, tracColor]);

  return (
    <div
      className="radial-progress"
      ref={progressElement}
      data-percent={percent}
      data-bar-color={barColor}
      data-track-color={tracColor}
    >
      <div className="circle-text">
        <span style={textColor ? { color: textColor } : {}} className="count">
          {currentPercent}%
        </span>
      </div>
      <canvas height={height} width={width} />
    </div>
  );
}
