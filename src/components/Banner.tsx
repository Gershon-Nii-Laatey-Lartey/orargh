import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Link to="/installments" className="block">
      <div className="bg-[#0066cc] text-white py-2.5 px-6 text-center text-[12px] md:text-[13px] font-medium tracking-tight hover:opacity-90 transition-opacity cursor-pointer">
        Get up to 24 months interest-free with our new installment program. <span className="underline decoration-white/30 underline-offset-4 ml-1">Learn more</span> <span className="ml-0.5">→</span>
      </div>
    </Link>
  );
};

export default Banner;
