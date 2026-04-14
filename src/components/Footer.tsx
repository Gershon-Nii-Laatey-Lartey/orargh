import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Collection", path: "/products" },
        { name: "iPhone", path: "/products?q=iPhone" },
        { name: "Samsung", path: "/products?q=Samsung" },
        { name: "Accessories", path: "/products?category=Accessories" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Installments", path: "/installments" },
        { name: "Delivery", path: "#" },
        { name: "Warranty", path: "#" },
        { name: "Returns", path: "#" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram @orargh1", path: "https://instagram.com/orargh1" },
        { name: "Twitter @orargh1", path: "https://twitter.com/orargh1" },
        { name: "Facebook @orargh1", path: "https://facebook.com/orargh1" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" }
      ]
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
                  <li key={link.name}>
                    {link.path.startsWith('http') || link.path === '#' ? (
                      <a
                        href={link.path}
                        target={link.path.startsWith('http') ? "_blank" : undefined}
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-xs transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-xs transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
              © {currentYear} ORΛR GH. Curated for Excellence.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-tighter">Accra, Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
