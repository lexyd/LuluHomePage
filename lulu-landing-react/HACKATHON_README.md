# Lululemon Homepage Redesign - Hackathon Project

A modern, responsive redesign of the Lululemon homepage built with React, TypeScript, and Vite.

## 🎯 Project Overview

This project is a hackathon submission to redesign Lululemon's homepage based on UI prototypes from `https://lululemon-gde-web.vercel.app/` (Password: D3ptLulu!25).

**Goal**: Match the UI prototypes as accurately as possible while implementing smooth functionality.

## ✨ Features Implemented

### 1. **Navigation Bar**

- Sticky navigation with Lululemon branding
- Main navigation links (Women, Men, Accessories, Activities, Featured)
- Search, Account, and Cart icons
- Responsive mobile menu with smooth transitions

### 2. **Hero Carousel**

- Full-screen carousel with Swiper.js
- Video and image slide support
- Smooth swipe gestures on mobile/desktop
- Auto-play with navigation arrows and pagination dots
- Fade transition effects
- Responsive overlay content with CTAs

### 3. **Product Grid**

- Responsive grid layout
- Product cards with hover effects
- "Quick Add" buttons that appear on hover
- Product information (name, category, price)
- "Shop All Products" CTA button

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Swiper** - Modern slider/carousel library
- **Framer Motion** - Animation library (installed, ready to use)
- **React Router DOM** - Routing (installed, ready to use)

## 📁 Project Structure

```
hello-world-react/
├── public/
│   ├── images/          # Product and hero images
│   ├── videos/          # Hero carousel videos
│   ├── scripts/         # Asset files from prototype
│   └── styles/          # CSS assets from prototype
├── src/
│   ├── components/
│   │   ├── Navigation.tsx/.css      # Header navigation
│   │   ├── HeroCarousel.tsx/.css    # Main hero section
│   │   └── ProductGrid.tsx/.css     # Product showcase
│   ├── App.tsx          # Main app component
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles + Swiper CSS
│   └── main.tsx         # Entry point
└── index.html           # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (Current: 20.12.0 - may need upgrade)
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors

- **Primary Red**: `#d31334` (Lululemon brand color)
- **Dark**: `#222222` (Text and primary elements)
- **Gray**: `#777777` (Secondary text)
- **Light Gray**: `#f5f5f5` (Backgrounds)

### Typography

- Font Family: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Headings: Bold (700)
- Body: Regular (400)

## 📱 Responsive Design

- **Desktop**: Full navigation, hover effects, large carousel
- **Tablet**: Optimized grid layouts, touch-friendly
- **Mobile**: Hamburger menu, stacked layouts, swipe gestures

## 🎥 Video Assets

The project includes three hero videos:

1. `play-like-its-personal.mp4` - Women's activewear showcase
2. `slnsh-x-lululemon.mp4` - Saul Nash collaboration
3. `lewis.mp4` - Lewis Hamilton collection (ready to use)

## 🖼️ Image Assets

Product and promotional images are organized in `/public/images/` including:

- Product shots (shoes, apparel, accessories)
- Lifestyle and activity imagery
- Navigation category images

## 🔧 Configuration

### Vite Config (`vite.config.ts`)

Standard React + TypeScript setup with fast refresh.

### TypeScript Config

- Strict mode enabled
- React JSX transform
- Modern ES modules

## 📝 Next Steps / Future Enhancements

1. **Additional Sections:**

   - Featured collections
   - Activities showcase
   - Testimonials/Reviews
   - Newsletter signup
   - Footer

2. **Advanced Features:**

   - Product quick view modal
   - Add to cart functionality
   - Size selection
   - Color variants
   - Wishlist
   - Search functionality

3. **Performance:**

   - Lazy loading images
   - Code splitting
   - Image optimization

4. **Animations:**
   - Scroll-triggered animations with Framer Motion
   - Page transitions
   - Micro-interactions

## 🐛 Known Issues

- Node.js version warning (20.12.0 vs 20.19+) - app may still work but consider upgrading
- Some prototype assets reference Next.js image optimization - converted to standard images

## 📚 Resources

- [Original Live Site](https://shop.lululemon.com/en-ca/)
- [Prototype Design](https://lululemon-gde-web.vercel.app/)
- [Swiper Documentation](https://swiperjs.com/react)
- [Framer Motion](https://www.framer.com/motion/)

## 🏆 Hackathon Notes

**Focus**: Functionality first, then accuracy

- ✅ Hero carousel with swipe gestures implemented
- ✅ Responsive navigation
- ✅ Product grid with interactions
- ⏳ Additional sections to be added for full accuracy

## 📄 License

This is a hackathon project for educational purposes.

---

Built with ❤️ for the Lululemon Homepage Redesign Hackathon
