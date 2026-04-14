import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Galaxy Ultra Z',
    brand: 'Samsung',
    price: 'From $1199',
    image: '/phone1.png',
    color: 'bg-zinc-900',
    textColor: 'text-white'
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: 'From $999',
    image: '/phone2.png',
    color: 'bg-zinc-100 dark:bg-zinc-800',
    textColor: 'text-black dark:text-white'
  },
  {
    id: 3,
    name: 'Pixel 9 Pro',
    brand: 'Google',
    price: 'From $899',
    image: '/phone1.png',
    color: 'bg-slate-200 dark:bg-slate-900',
    textColor: 'text-black dark:text-white'
  },
  {
    id: 4,
    name: 'Xperience One',
    brand: 'Sony',
    price: 'From $1299',
    image: '/phone2.png',
    color: 'bg-stone-100 dark:bg-stone-900',
    textColor: 'text-black dark:text-white'
  }
];

const ProductSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Choose your power.</h2>
           <p className="text-zinc-400 mt-4 text-lg">Compare models and find the one that's right for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="liquid-glass group relative h-[700px] overflow-hidden p-12 flex flex-col justify-between"
            >
              <div className="z-10">
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">
                  {product.brand}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {product.name}
                </h3>
                <p className="text-xl text-zinc-400 mt-4">
                  {product.price}
                </p>
              </div>

              <div className="absolute inset-0 z-0">
                {product.brand === 'Apple' ? (
                  <video 
                    src="/videos/iPhone 17 Pro and iPhone 17 Pro Max_2.mp4"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-1000"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain object-bottom scale-90 group-hover:scale-100 transition-transform duration-1000"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="mt-auto z-10">
                <button className="bg-white text-black btn-apple px-10 hover:scale-105 transition-transform">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
