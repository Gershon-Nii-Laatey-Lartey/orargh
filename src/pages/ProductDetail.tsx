import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Truck, RefreshCw, ChevronRight } from 'lucide-react';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = allProducts.find(p => p.id === Number(id)) || allProducts[0];
  const [activeImage, setActiveImage] = React.useState(product.image);

  const handleAddToBag = () => {
    addToCart(product);
    toast.success("Successfully added to your cart.", {
      description: `${product.name} has been added.`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart"
      }
    });
  };

  // Update active image if product changes (e.g. following links)
  React.useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors selection:bg-accent selection:text-white">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-6 py-8"
      >
        <nav className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 mb-8 uppercase tracking-widest">
          <Link to="/products" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Products</Link>
          <ChevronRight size={10} />
          <span className="text-zinc-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Gallery Area */}
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Thumbnails */}
            {product.images && product.images.length > 0 && (
              <div className="flex lg:flex-col gap-3 lg:w-20 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
                {product.images.map((img, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(img)}
                    className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-[1rem] overflow-hidden border-2 transition-all ${activeImage === img ? 'border-zinc-900 dark:border-white shadow-lg' : 'border-zinc-100 dark:border-zinc-900 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Angle ${i}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}

            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2rem] overflow-hidden flex items-center justify-center min-h-[420px] lg:min-h-[500px] border border-zinc-100/50 dark:border-zinc-800/50 shadow-sm relative"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  src={activeImage} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Details Area */}
          <div className="flex flex-col pt-6 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] mb-1">{product.brand}</p>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl font-bold text-zinc-900 dark:text-white mb-8 underline decoration-zinc-200 decoration-2 underline-offset-8">{product.price}</p>
              
              {/* Pricing Options */}
              <div className="space-y-4 mb-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Payment Options</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="border-2 border-zinc-900 dark:border-white p-3.5 rounded-xl cursor-pointer">
                    <p className="text-[10px] font-bold mb-0.5 uppercase tracking-wide">Full Payment</p>
                    <p className="text-base font-bold">{product.price}</p>
                  </div>
                  <div className="border-2 border-zinc-100 dark:border-zinc-900 p-3.5 rounded-xl cursor-pointer hover:border-zinc-200 transition-colors group">
                    <p className="text-[10px] font-bold mb-0.5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors uppercase tracking-wide">ORΛR Lease</p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-base font-bold text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">GH₵ 750</p>
                      <span className="text-[9px] text-zinc-400 font-bold uppercase">/mo.</span>
                    </div>
                    <p className="text-[8px] text-zinc-400 font-bold mt-1 uppercase tracking-tighter">Requires GH₵ 1,500 Down</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-500 leading-relaxed mb-10 text-base">
                {product.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <button 
                onClick={handleAddToBag}
                className="bg-zinc-900 dark:bg-white text-white dark:text-black py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Add to Cart
              </button>
              <button className="border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white py-4 rounded-full font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                Quick Checkout
              </button>
            </div>

            <div className="space-y-6 pt-12 border-t border-zinc-100 dark:border-zinc-900">
               {product.specs.map((spec, i) => (
                 <div key={i} className="flex justify-between items-center py-2">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-zinc-900 dark:text-white font-medium">{spec.value}</span>
                 </div>
               ))}
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
               {[
                 { icon: <Truck size={20} />, label: "Next-Day Delivery" },
                 { icon: <Shield size={20} />, label: "1 Year Warranty" },
                 { icon: <RefreshCw size={20} />, label: "14-Day Returns" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-3 text-center items-center">
                    <div className="text-zinc-400">{item.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
