import React from 'react';

const brands = [
  "Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Nothing", "Motorola", "Sony"
];

const BrandMarquee = () => {
  return (
    <div className="py-10 bg-background overflow-hidden border-y border-zinc-100 dark:border-zinc-900">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...brands, ...brands].map((brand, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-7xl font-bold text-zinc-200 dark:text-zinc-800 mx-8 md:mx-16 tracking-tighter hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default"
          >
            {brand}
          </span>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default BrandMarquee;
