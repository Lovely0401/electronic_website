# Electronic Store Website

A modern, responsive, and fully functional front-end Electronic Store E-Commerce application. Built over a 12-week structured roadmap, this project delivers a premium UI experience, integrated data mock-ups, and a robust cart state management system.

## 🚀 Project Overview
This project simulates a high-end electronics storefront specializing in mobile phones, laptops, headphones, smart watches, and accessories. It utilizes Vite for insanely fast builds, React for declarative component architecture, and Tailwind CSS for utility-first responsive styling.

### Live Demo
[View Live Site](https://lovely0401.github.io/electronic_website/) 
*(Note: As this is hosted on GitHub Pages, ensure the deployment points to the correct static output branch).*

## 🛠️ Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Vanilla CSS variables
- **Routing:** React Router v6
- **Icons:** Lucide-React
- **State Management:** React Context API + LocalStorage persistence

## ✨ Key Features
- **Responsive Dynamic UI:** Hand-crafted UI that scales perfectly across Desktop, Tablet, and Mobile sizing using generic grid systems and CSS flexbox.
- **Product Filtering & Sorting:** Fully functional mock database allowing advanced filtering by multiple categories and custom price slider constraints.
- **Persistent Cart System:** An overarching React Context provider persists shopping cart items and calculated totals in the browser's `localStorage`.
- **Custom Theming:** Driven by modern design concepts, employing dynamic hover effects, layout animations, and premium colors defined in global CSS targets.

## 💻 Instructions to Run the Project Local

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Lovely0401/electronic_website.git
   cd electronic_website/vite-project
   ```

2. **Install Dependencies**
   Make sure you have Node installed (v18 or higher recommended).
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   > Local server typically spins up extremely fast at `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```
   > Output files will be generated into the `docs/` folder (or `dist/` based on vite config) ready for GitHub Pages hosting.

## 📁 Project Structure Highlights
- `/src/components` - Reusable UI elements (Navbars, Cards, Sidebars).
- `/src/pages` - Standalone routed views (Home, Shop, ProductDetail, CartPage).
- `/src/context` - State management configuration (CartContext).
- `/src/data` - Static mock data providing realistic object structures for electronics.

> Built as a Frontend Developer Intern Task spanning a robust 12-week agile process.
