# Joker Golisoda — Official Beverage Manufacturer Website

A minimal, premium, responsive website for **Joker Golisoda** (manufactured by **Dhanvin Foods**), an authentic Indian marble soda (Goli Soda) manufacturing company targeting wholesale buyers, distributors, retailers, banquet caterers, and institutional businesses.

---

## 🚀 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** with custom brand palette
- **GSAP 3** + **ScrollTrigger** for subtle, high-performance scroll & ticker animations with lifecycle cleanup
- **Lucide React** for minimal, modern vector icons
- **@emailjs/browser** for automated wholesale lead dispatch
- **Canvas-Confetti** for celebratory enquiry submission feedback

---

## 🎨 Design Direction & Brand Palette

- **Joker Red:** `#C9232B`
- **Warm Cream:** `#F7F0E5`
- **Charcoal:** `#1A1A1A`
- **White:** `#FFFFFF`
- **Navy Accent:** `#0C1929` (derived from brand crest)
- **Typography:** Outfit / Sora (Headings) and Inter (Body copy)
- **Aesthetic:** Minimalist beverage manufacturing, generous whitespace, clean layout, no unnecessary glassmorphism or 3D distractions.

---

## 📂 Key Components

- **Floating Island Navbar (`src/components/Navbar.jsx`):** Pill-shaped floating navbar that auto-hides smoothly past the Hero section.
- **Hero & About Us (`src/components/Hero.jsx`):** Seamless scroll transition with the authentic orange bottle gliding from center left-tilt (`-12°`) into the right column of About Us (`+8°`).
- **Our Flavours Carousel (`src/components/FlavoursCarousel.jsx`):** Smooth continuous GSAP ticker featuring 12 authentic Codd-neck marble soda flavours with ticket-style dashed borders and scalloped badges.
- **Top 3 Sellers (`src/components/TopSellers.jsx`):** Horizontally stacked cards with solid bright flavor backgrounds (Joker Red for Paneer Soda, Citrus Orange for Orange, Golden Mango for Mango) and badges.
- **Bottling Unit (`src/components/Manufacturing.jsx`):** Clean moving reel of large high-resolution automated factory production photos.
- **Licenses (`src/components/Certifications.jsx`):** Official statutory FSSAI and GST credential cards with click-to-preview lightbox modals.
- **Founders & Leadership (`src/components/Founders.jsx`):** Founder profiles (Parvendan R & Dhanvin Raj) with direct executive WhatsApp, phone, and email contacts.
- **Direct Wholesale Orders (`src/components/ContactSection.jsx`):** Click-to-call, prefilled WhatsApp, interactive Google Maps location, and fast inquiry form.

---

## ⚡ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Pushing to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Joker Golisoda website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
