import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollVideoProps {
  src: string;
  title?: string;
  subtitle?: string;
}

const ScrollVideo = ({ src, title, subtitle }: ScrollVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Tied to the video duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      if (!video.duration) return;
      
      // Calculate where in the viewport the container is
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const windowHeight = window.innerHeight;
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      
      let progress = currentDist / totalDist;
      progress = Math.max(0, Math.min(1, progress));
      
      // Map progress (0 to 1) to video duration
      video.currentTime = progress * video.duration;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          muted
          playsInline
          preload="auto"
        />
        
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]),
              y: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [50, 0, -50])
            }}
            className="text-4xl md:text-7xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            style={{ 
              opacity: useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]),
              y: useTransform(scrollYProgress, [0.45, 0.55, 0.65], [30, 0, -30])
            }}
            className="text-xl md:text-2xl text-zinc-400"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
