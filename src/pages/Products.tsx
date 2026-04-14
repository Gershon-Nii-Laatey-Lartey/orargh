import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, LayoutGrid, List } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { allProducts } from '../data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  const categories = ["All", "Phones", "Accessories"];
  const brands = ["All", ...new Set(allProducts.map(p => p.brand))].sort();

  const filteredProducts = allProducts.filter(p => {
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
    const brandMatch = selectedBrand === "All" || p.brand === selectedBrand;
    const searchMatch = !query || p.name.toLowerCase().includes(query.toLowerCase()) || 
                       p.brand.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && brandMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      
      <div className="max-w-[1540px] mx-auto px-6 pt-12 flex flex-col lg:flex-row gap-12">
        {/* Fixed Minimal Sidebar Filter */}
        <aside className="lg:w-56 hidden lg:block sticky top-36 h-fit pr-6 mt-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-zinc-200 dark:bg-zinc-800"></span>
                Collection
              </h3>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[12px] text-left transition-all ${selectedCategory === cat ? 'text-zinc-900 dark:text-white font-bold' : 'text-zinc-400 hover:text-zinc-600'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-zinc-200 dark:bg-zinc-800"></span>
                Brands
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {brands.map((brand) => (
                  <button 
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${selectedBrand === brand ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-black font-bold' : 'border-zinc-100 dark:border-zinc-900 text-zinc-400 hover:text-zinc-600 hover:border-zinc-200 dark:hover:border-zinc-800'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 pb-20"
        >
          <header className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-white">
              Our Collection. <span className="text-zinc-400 font-medium">Expertly curated devices.</span>
            </h1>

              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {query ? `Search Results for "${query}"` : 'Our Full Collection'} — {filteredProducts.length} items
               </p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-zinc-950 rounded-[1.5rem] p-2.5 flex flex-col h-full border border-zinc-100 dark:border-zinc-900 shadow-sm hover:shadow-md transition-all duration-500">
                      <div className="bg-[#f5f5f7] dark:bg-zinc-900 rounded-[1rem] aspect-square flex items-center justify-center overflow-hidden mb-3 transition-transform duration-700 group-hover:scale-[1.02] relative border border-transparent dark:border-zinc-800/50">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/iphone_17.png'; // Fallback
                          }}
                        />
                      </div>

                      <div className="px-1.5 pb-1 text-left flex flex-col flex-1">
                        <p className="text-[9px] md:text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mb-0.5 uppercase tracking-wide">{product.brand}</p>
                        <h3 className="text-[11px] md:text-[13px] font-bold text-zinc-900 dark:text-white leading-tight mb-1 line-clamp-2 min-h-[2.4em]">{product.name}</h3>
                        <p className="text-[13px] md:text-[15px] font-bold text-zinc-900 dark:text-white mt-auto">{product.price}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </motion.main>
      </div>


      <Footer />
    </div>
  );
};

export default Products;
