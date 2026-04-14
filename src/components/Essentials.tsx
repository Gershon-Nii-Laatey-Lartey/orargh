import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { allProducts } from '../data/products';

const Essentials = () => {
  // Use products with ID 7-10 for Essentials
  const essentialProducts = allProducts.filter(p => p.id >= 7 && p.id <= 10);

  return (
    <section className="py-24 bg-background overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            Mix and match. <span className="text-zinc-400">Essentials for life.</span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {essentialProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-[72%] sm:basis-1/2 lg:basis-[28%]">
                <Link to={`/product/${product.id}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-zinc-100 dark:bg-zinc-900 rounded-[1.75rem] p-8 h-[360px] flex flex-col justify-between group cursor-pointer transition-all duration-500 overflow-hidden relative"
                  >
                    <div className="relative z-10 w-full h-40 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{product.name}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{product.description}</p>
                      <button className="mt-6 text-[#0066cc] font-bold text-xs hover:underline flex items-center gap-1 group/btn">
                        Explore
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </motion.div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Essentials;
