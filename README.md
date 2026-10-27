# IGNITE® Agency — Next.js 16 Production Recreation

A pixel-perfect, high-performance recreation of [IGNITE® Agency (igniteagency.com)](https://igniteagency.com/) built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP**, **Lenis**, and **Three.js**.

---

## ⚡ Features & Enhancements

- **Next.js 16 App Router**: Server and client component optimization, zero layout shift, instantaneous page transitions.
- **Buttery Smooth Scroll**: Integrated **Lenis** smooth scroll synchronized directly with **GSAP ScrollTrigger** and `requestAnimationFrame`. No scroll hijacking or locked body overflow.
- **Cinematic Bolt Preloader**: Percentage counter (0% → 100%) with vector morphing and smooth slide-up reveal, including session memory (`sessionStorage`) to bypass for returning visitors.
- **Interactive Supercharge Toggle**: The `#supercharge` toggle electrifies the hero section with dynamic gradients, glow, and pulsating effects.
- **Rotating Industry Headlines**: Smooth cycling text between *"Future Tech."* (neon green), *"Education."* (vivid orange), and *"Not-For-Profit."* (infrared red).
- **Infinite Logo Marquee**: Smooth, zero-gap looping partner marquee showcasing leading Australian schools and organizations.
- **Scrub Intro Text Reveal**: GSAP ScrollTrigger word-by-word opacity scrub as you scroll down.
- **Selected Impact Case Studies**: Clean, responsive case study cards with interactive hover accents, statistics, and category badges.
- **Real-Time Three.js 3D Bolt**: WebGL canvas featuring an extruded 3D bolt with studio lighting, matcap environment reflections, mouse tilt tracking, and scroll-responsive rotation.
- **Interactive Delight Controls**: Confetti particle explosions and interactive heart counters powered by `canvas-confetti`.
- **End-to-End Capabilities**: Interactive tab switcher detailing Strategy, Digital Design, Web Engineering, and AI Tools.
- **Dark Theme Contact Section**: High-contrast inquiry form with multi-select service tags and submission feedback.
- **Custom Magnetic Cursor**: Trailing micro-interaction cursor with state expansion over clickable elements (auto-disabled on touch devices).
- **100% Self-Contained Assets**: Cleaned and pruned — all fonts (`Soehne Schmal Halbfett`, `PP Neue Montreal`), SVG logos, and matcap textures are locally hosted with zero external CDN dependencies.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables & Utopia Fluid Scales
- **Motion & Scroll**: GSAP 3 (ScrollTrigger) + Lenis
- **3D & Canvas**: Three.js + canvas-confetti
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node.js 24)
- npm or yarn or pnpm

### Installation

```bash
git clone https://github.com/SilentNirab/ignite-agency-next.git
cd ignite-agency-next
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📄 License

MIT © [Md Nirab Mia](https://github.com/SilentNirab)
