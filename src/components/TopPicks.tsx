import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';

const TopPicks = () => {
  // Use first 5 products for Top Picks
  const topProducts = allProducts.slice(0, 5);

  return (
    <section className="py-24 bg-background overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            Top Picks. <span className="text-zinc-400">The best of the best.</span>
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
            {topProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-[72%] sm:basis-1/2 lg:basis-[28%]">
                <Link to={`/product/${product.id}`}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="bg-zinc-100 dark:bg-zinc-900 rounded-[1.75rem] p-6 h-[360px] flex flex-col justify-between group transition-all duration-500"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{product.name}</h3>
                      <p className="text-zinc-500 text-sm font-medium">{product.price}</p>
                    </div>
                    
                    <div className="relative flex-1 flex items-center justify-center p-2">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-xs font-bold hover:opacity-80 transition-opacity">
                        Quick View
                      </button>
                      <span className="text-zinc-900 dark:text-white font-bold cursor-pointer hover:underline text-xs">Details →</span>
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

export default TopPicks;
