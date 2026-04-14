import React from 'react';
import { motion } from 'framer-motion';

interface DeviceMockupProps {
  videoSrc?: string;
  imageSrc?: string;
  className?: string;
  rotation?: { x: number; y: number; z: number };
  index?: number;
  showFrontUI?: boolean;
}

const DeviceMockup = ({ videoSrc, imageSrc, className = "", rotation = { x: 0, y: 0, z: 0 }, index = 0, showFrontUI = true }: DeviceMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: rotation.x, rotateY: rotation.y, rotateZ: rotation.z }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateY: [rotation.y - 10, rotation.y + 10, rotation.y - 10],
      }}
      transition={{
        opacity: { duration: 1, delay: index * 0.2 },
        y: { duration: 1, delay: index * 0.2 },
        rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative w-[280px] h-[580px] rounded-[3rem] p-[8px] bg-zinc-800 shadow-2xl ${className}`}
    >
      {/* Front/Back Bezel Shell */}
      <div className="absolute inset-0 rounded-[3rem] border-[6px] border-zinc-700/80 pointer-events-none z-20 shadow-inner" />
      
      {/* Content Container */}
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-900 flex items-center justify-center">
        {videoSrc ? (
          <video 
            src={videoSrc} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={imageSrc} 
            alt="Device View" 
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Dynamic Island / Notch (Only for front) */}
        {showFrontUI && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-around px-4 border border-zinc-800/50">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
              <div className="w-8 h-1 bg-zinc-900 rounded-full" />
          </div>
        )}
      </div>

      {/* Side Buttons */}
      <div className="absolute left-[-2px] top-24 w-[4px] h-12 bg-zinc-700 rounded-l-md" />
      <div className="absolute left-[-2px] top-40 w-[4px] h-20 bg-zinc-700 rounded-l-md" />
      <div className="absolute left-[-2px] top-64 w-[4px] h-20 bg-zinc-700 rounded-l-md" />
      <div className="absolute right-[-2px] top-40 w-[4px] h-24 bg-zinc-700 rounded-r-md" />

      {/* Shine/Reflection effect */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10" />
    </motion.div>
  );
};

export default DeviceMockup;
