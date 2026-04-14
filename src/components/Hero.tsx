import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative h-auto flex flex-col items-center pt-20 overflow-hidden bg-background selection:bg-accent selection:text-white">
      <div 
        className="text-center z-[60] px-6 max-w-4xl mb-6 relative pointer-events-auto"
      >
        <h1 
          className="text-4xl md:text-[5rem] font-medium tracking-tight mb-4 leading-[0.9] text-zinc-900 dark:text-white"
        >
          Everything Mobile. <br />Expertly Curated.
        </h1>
        <p 
          className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-xl mx-auto font-medium"
        >
          From the latest flagships to essential accessories. We bring the world's best mobile technology under one roof with unparalleled service.
        </p>
        <div
           className="flex gap-6 justify-center items-center"
        >
          <Link to="/products" className="bg-zinc-900 dark:bg-white text-white dark:text-black btn-apple px-10 py-4 hover:scale-103 transition-transform">Buy now</Link>
          <Link to="/installments" className="text-[#0066cc] hover:underline flex items-center gap-1 group font-medium">
            Learn more 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-7xl flex justify-center items-end h-[400px] md:h-[550px] mt-[-24px] md:mt-36 mb-[-40px] md:mb-[-60px]">
          {/* Device arrangement */}
        {[
          { src: '/images/pixel_fold.png', delay: 0.6, x: -220, xm: -120, z: 10, scale: 0.85, rotate: 0 },
          { src: '/images/pixel.png', delay: 0.4, x: -110, xm: -60, z: 20, scale: 0.95, rotate: 0 },
          { src: '/images/iphone_17.png', delay: 0.2, x: 0, xm: 0, z: 50, scale: 1.1, rotate: 0 },
          { src: '/images/s26_ultra.png', delay: 0.4, x: 110, xm: 60, z: 20, scale: 0.95, rotate: 0 },
          { src: '/images/pixel_10.png', delay: 0.6, x: 220, xm: 120, z: 10, scale: 0.85, rotate: 0 },
        ].map((device, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, x: typeof window !== 'undefined' && window.innerWidth < 768 ? device.xm : device.x, rotate: device.rotate, scale: device.scale - 0.1 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: typeof window !== 'undefined' && window.innerWidth < 768 ? device.xm : device.x,
              rotate: device.rotate,
              scale: device.scale
            }}
            transition={{ 
              type: "spring",
              stiffness: 40,
              damping: 20,
              delay: device.delay,
              mass: 2
            }}
            style={{ zIndex: device.z }}
            className="absolute bottom-0 w-[240px] sm:w-[300px] md:w-[420px] lg:w-[480px] aspect-[9/19]"
          >
            <img 
              src={device.src} 
              alt="Device" 
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
