import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingCart, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors selection:bg-accent selection:text-white">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-12 md:py-20"
      >
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Cart</h1>
          <p className="text-zinc-500 font-medium">
            {cartCount > 0 
              ? `You have ${cartCount} item${cartCount > 1 ? 's' : ''} in your cart.` 
              : "Your cart is empty."}
          </p>
        </header>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-8">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-900 group"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#f5f5f7] dark:bg-zinc-900 rounded-2xl flex-shrink-0 overflow-hidden relative border border-transparent dark:border-zinc-800/50">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white leading-tight">{item.name}</h3>
                          <p className="font-bold text-sm md:text-base ml-4">{item.price}</p>
                        </div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{item.brand}</p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-4 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-100 dark:border-zinc-800">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold min-w-[1.2rem] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <div className="bg-zinc-50 dark:bg-zinc-950 p-6 md:p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-900 sticky top-36">
                <h2 className="text-xl font-bold mb-6 tracking-tight">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500 font-medium">Subtotal</span>
                    <span className="font-bold text-zinc-900 dark:text-white">GH₵ {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500 font-medium">Shipping</span>
                    <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest italic">Free</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="text-xl font-bold">GH₵ {cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black py-4 rounded-full font-bold shadow-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                  Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="mt-6 text-[9px] text-center text-zinc-400 font-bold uppercase tracking-widest">
                  Secure Checkout with ORΛR Pay
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-full mb-8">
              <ShoppingCart size={48} className="text-zinc-300 dark:text-zinc-700" />
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Your cart is empty.</h2>
            <p className="text-zinc-500 mb-8 max-w-sm">
              Discover our expertly curated collection of devices and accessories.
            </p>
            <Link 
              to="/products" 
              className="bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block shadow-lg"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </motion.main>

      <Footer />
    </div>
  );
};

export default Cart;
