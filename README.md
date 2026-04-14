# ORΛR — Expertly Curated Storefront

![ORΛR Header](/public/og-image.png)

ORΛR is a high-fidelity, premium e-commerce platform designed with an Apple-inspired aesthetic. Built for speed, responsiveness, and visual excellence, it provides a curated shopping experience for the latest mobile technology and accessories.

## ✨ Key Features

- **Apple-Inspired Design**: Immersive "card-on-card" layouts, `2rem` border radiuses, and smooth glassmorphism effects.
- **Fluid Motion**: Powered by **Framer Motion** for seamless page transitions and interactive micro-animations.
- **Global Search**: Real-time, intent-driven search synchronized with URL parameters for instant filtering across the entire catalog.
- **Shopping Cart**: A fully functional cart system with localized persistence (`localStorage`) and real-time quantity management.
- **Localized for Ghana**: Complete currency transition to **Ghanaian Cedis (GH₵)** with realistic, curated pricing for flagship devices.
- **Deep Catalog**: Ingests and sanitizes over 227+ products from scraped data while maintaining a hand-picked, premium feel.
- **Mobile-First UX**: Optimized for the best possible experience on iOS and Android devices, featuring a "bottom-heavy" design for thumb-friendly navigation.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Theme**: [Next Themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support)

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gershon-Nii-Laatey-Lartey/orargh.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📦 Data Pipeline

The storefront features an automated import pipeline (`import_scraped.js`) that:
- Maps scraped product data into a typed TypeScript schema.
- Dynamically converts and formats pricing into **GH₵**.
- Sanitizes product descriptions and handles multi-image support.

## 📄 License

Created by **Gershon-Nii-Laatey-Lartey**. All rights reserved.
