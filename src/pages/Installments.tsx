import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CreditCard, Calendar, BarChart3, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "What is the ORΛR Installment Program?",
    answer: "It's a zero-interest financing option that allows you to buy your favorite devices today and pay for them in monthly installments over 6, 12, or 24 months."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. There are no application fees, no late fees, and absolutely no interest if you pay within your chosen period."
  },
  {
    question: "Do I need a credit check?",
    answer: "We perform a soft credit check that does not affect your credit score to determine your eligibility and installment limit."
  },
  {
    question: "Can I pay off my balance early?",
    answer: "Yes, you can pay off your remaining balance at any time through the ORΛR app with no prepayment penalties."
  }
];

const Installments = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors selection:bg-accent selection:text-white">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#0066cc] font-bold text-sm uppercase tracking-widest mb-4"
          >
            Installment Program
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8"
          >
            Flexibility for you. <br/>
            <span className="text-zinc-400">Buy now. Pay later.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed"
          >
            Get the devices you love with 0% interest for up to 24 months. Total transparency, zero hidden fees, and completely interest-free.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: <CreditCard className="w-10 h-10 text-[#0066cc]" />, title: "0% APR", desc: "No interest, no hidden costs. What you see is what you pay." },
            { icon: <Calendar className="w-10 h-10 text-[#0066cc]" />, title: "Flexible Terms", desc: "Choose a plan that fits your life: 6, 12, or 24 months." },
            { icon: <BarChart3 className="w-10 h-10 text-[#0066cc]" />, title: "Instant Approval", desc: "Get a decision in seconds and start shopping immediately." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-950 p-10 rounded-[2.5rem] border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all duration-500"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Minimal Image Integration */}
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 mb-40 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
              Start your journey today.
            </h2>
            <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
              Applying won't affect your credit score and takes less than a minute. Experience the freedom of ORΛR.
            </p>
            <button className="bg-[#0066cc] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-transform active:scale-95">
              Check Eligibility
            </button>
          </div>
          <div className="flex-1 relative flex justify-center">
            <img 
              src="/images/iphone_17.png" 
              alt="iPhone 17" 
              className="w-full h-full max-w-[400px] object-contain drop-shadow-2xl translate-y-8"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mb-40">
           <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-[#0066cc]/10 text-[#0066cc] rounded-2xl mb-4">
                 <HelpCircle size={24} />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-white">Questions? We have answers.</h2>
           </div>

           <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="border-b border-zinc-100 dark:border-zinc-900 pb-6 transition-all">
                  <h3 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center justify-between cursor-pointer group"
                  >
                    {item.question}
                    <ChevronDown 
                      size={18} 
                      className={`text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-transform duration-300 ${openIndex === i ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </h3>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-500 leading-relaxed text-[15px] pb-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </section>

      </motion.main>
      <Footer />
    </div>
  );
};

export default Installments;
