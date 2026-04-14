import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, ShoppingCart, Search, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState(searchParams.get('q') || '');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = searchQuery.trim();
      if (val) {
        navigate(`/products?q=${encodeURIComponent(val)}`);
      } else {
        navigate(`/products`);
      }
      setIsMobileSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 w-full z-[100] bg-white dark:bg-black h-14 transition-all duration-300">
      {/* Backdrop for click-outside to close */}
      <AnimatePresence>
        {(isMobileMenuOpen || isMobileSearchOpen) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileSearchOpen(false);
            }}
            className="fixed inset-0 bg-transparent z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6 h-full flex justify-between items-center relative z-50 lg:grid lg:grid-cols-3">
        {/* Left: Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:justify-start">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsMobileSearchOpen(false);
            }}
            className="lg:hidden text-zinc-900 dark:text-white p-1"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>
        
        {/* Center: Navigation - Desktop only */}
        <div className="hidden lg:flex items-center justify-center gap-8 text-[11px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/products" className="text-zinc-400 hover:text-foreground transition-colors">Collection</Link>
        </div>

        {/* Right: Search & Actions */}
        <div className="flex items-center justify-end gap-3 md:gap-6 text-zinc-900 dark:text-white">
          <button 
            onClick={() => {
              setIsMobileSearchOpen(!isMobileSearchOpen);
              setIsMobileMenuOpen(false);
            }}
            className="lg:hidden hover:bg-zinc-100 dark:hover:bg-zinc-900 p-2 rounded-full transition-colors"
          >
            <Search size={18} />
          </button>

          <div className="relative hidden lg:flex items-center group">
            <Search className="absolute left-3 text-zinc-400 group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors" size={13} />
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="bg-zinc-100/50 dark:bg-zinc-900/50 border border-transparent focus:border-zinc-200 dark:focus:border-zinc-800 rounded-full py-1.5 pl-9 pr-4 text-[12px] w-48 focus:w-64 focus:outline-none transition-all font-medium"
            />
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-zinc-100 dark:hover:bg-zinc-900 p-2 rounded-full transition-colors"
            >
              <Moon size={16} />
            </button>
            <Link to="/cart" className="hover:bg-zinc-100 dark:hover:bg-zinc-900 p-2 rounded-full transition-colors relative">
              <ShoppingCart size={16} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-zinc-900 dark:bg-white text-white dark:text-black text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 lg:hidden p-8 z-[90] shadow-2xl"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-bold uppercase tracking-[0.3em] text-zinc-900 dark:text-white">Home</Link>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-600 transition-colors">Collection</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Search Bar Toggle */}
      <AnimatePresence>
        {isMobileSearchOpen && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 lg:hidden p-4 z-[90] shadow-xl"
          >
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
              <input 
                autoFocus
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="w-full bg-zinc-50 dark:bg-zinc-900 rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
