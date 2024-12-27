// video_utility.ts
export interface VideoQualityLevel {
  src: string;
  quality: 'high' | 'medium' | 'low';
  width: number;
  bitrate: number;
}

export interface VideoSlide {
  id: string;
  videoUrl: string;
  posterUrl: string;
  title: string;
  description: string;
  projectLink: string;
}

export interface VideoAnalytics {
  loadTime: number;
  bufferingEvents: number;
  qualitySwitches: number;
  failedAttempts: number;
  currentQuality: string;
  networkSpeed: number;
}

export class VideoAnalyticsTracker {
  private startTime: number;
  private analytics: VideoAnalytics;

  constructor() {
    this.startTime = performance.now();
    this.analytics = {
      loadTime: 0,
      bufferingEvents: 0,
      qualitySwitches: 0,
      failedAttempts: 0,
      currentQuality: 'medium',
      networkSpeed: 0,
    };
  }

  updateLoadTime(): void {
    this.analytics.loadTime = performance.now() - this.startTime;
  }

  incrementBuffering(): void {
    this.analytics.bufferingEvents++;
  }

  incrementQualitySwitch(): void {
    this.analytics.qualitySwitches++;
  }

  incrementFailedAttempts(): void {
    this.analytics.failedAttempts++;
  }

  updateQuality(quality: string): void {
    this.analytics.currentQuality = quality;
  }

  updateNetworkSpeed(speed: number): void {
    this.analytics.networkSpeed = speed;
  }

  getAnalytics(): VideoAnalytics {
    return { ...this.analytics };
  }

  async sendAnalytics(): Promise<void> {
    try {
      await fetch('/api/video-analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.analytics),
      });
    } catch (error) {
      console.error('Failed to send video analytics:', error);
    }
  }
}

export class NetworkSpeedTest {
  private static instance: NetworkSpeedTest;
  private lastTest: number = 0;
  private lastSpeed: number = 0;
  private testInterval: number = 30000; // 30 seconds

  private constructor() {}

  static getInstance(): NetworkSpeedTest {
    if (!NetworkSpeedTest.instance) {
      NetworkSpeedTest.instance = new NetworkSpeedTest();
    }
    return NetworkSpeedTest.instance;
  }

  async measureNetworkSpeed(): Promise<number> {
    const now = performance.now();
    if (now - this.lastTest < this.testInterval) {
      return this.lastSpeed;
    }

    try {
      const startTime = performance.now();
      const response = await fetch('/api/speed-test-file', {
        method: 'HEAD',
      });
      const endTime = performance.now();
      const duration = endTime - startTime;
      const contentLength = response.headers.get('content-length');
      const speed = contentLength ? parseInt(contentLength) / duration : 0;

      this.lastSpeed = speed;
      this.lastTest = now;
      return speed;
    } catch (error) {
      console.error('Network speed test failed:', error);
      return this.lastSpeed;
    }
  }
}

export class VideoPreloader {
  private static preloadedSources: Set<string> = new Set();

  static async preloadVideo(sources: VideoQualityLevel[]): Promise<void> {
    const preloadPromises = sources.map(async (source) => {
      if (this.preloadedSources.has(source.src)) return;

      try {
        const response = await fetch(source.src, {
          method: 'HEAD',
        });
        if (response.ok) {
          this.preloadedSources.add(source.src);
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'video';
          link.href = source.src;
          document.head.appendChild(link);
        }
      } catch (error) {
        console.error(`Failed to preload video source: ${source.src}`, error);
      }
    });

    await Promise.allSettled(preloadPromises);
  }

  static isPreloaded(src: string): boolean {
    return this.preloadedSources.has(src);
  }
}