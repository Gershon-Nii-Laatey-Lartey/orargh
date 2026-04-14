import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery",
    desc: "Guaranteed next-day delivery on all flagship orders placed before 4PM."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Extended Care",
    desc: "Up to 3 years of accidental damage protection with our signature ORAR Care+."
  },
  {
    icon: <RefreshCcw className="w-8 h-8" />,
    title: "Easy Trade-In",
    desc: "Get an instant valuation and credit towards your new device in under 5 minutes."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Expert Support",
    desc: "Our technology specialists are available 24/7 for data migration and setup."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col gap-6 group">
              <div className="text-zinc-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
