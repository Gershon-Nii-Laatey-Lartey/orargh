import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TechSpecs = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="py-32 bg-black overflow-hidden relative">
      <div className="flex flex-col gap-8">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-12 text-7xl md:text-[10rem] font-bold text-white/10 uppercase tracking-tighter">
          <span>OLED Display • Super Retina • ProMotion • Always-On • Titanium • OLED Display • Super Retina • ProMotion • Always-On • Titanium</span>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 text-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            A tech masterpiece in your hands.
          </motion.h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Every component is meticulously designed and engineered to provide the most fluid experience ever seen on a mobile device.
          </p>
        </div>

        <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-12 text-7xl md:text-[10rem] font-bold text-white/5 uppercase tracking-tighter self-end">
          <span>48MP Main • Telephoto • Ultra Wide • LiDAR • Night Mode • 48MP Main • Telephoto • Ultra Wide • LiDAR • Night Mode</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecs;
