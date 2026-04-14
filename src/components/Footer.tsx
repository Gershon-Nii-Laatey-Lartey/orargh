import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop and Learn",
      links: ["Store", "iPhone", "Samsung", "Pixel", "Accessories", "Support"]
    },
    {
      title: "Account",
      links: ["Manage Your Account", "ORAR Store Account", "iCloud.com"]
    },
    {
      title: "Entertainment",
      links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books"]
    },
    {
      title: "Sustainability",
      links: ["Carbon Neutral", "Recycling", "Ethics & Compliance", "Privacy", "Supplier Responsibility"]
    }
  ];

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 px-6 py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-zinc-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-xs transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
