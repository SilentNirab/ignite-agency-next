'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isSupercharged: boolean;
  onToggleSupercharge: () => void;
}

export default function Navbar({ isSupercharged, onToggleSupercharge }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 relative transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/661f63ba4c8721b8d46efdc5_ignite-bolt-icon_infrared_32x32.png"
                alt="IGNITE Bolt"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-black dark:text-white uppercase font-sans">
              IGNITE<sup className="text-xs">®</sup>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="#work"
              className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="#capabilities"
              className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="#about"
              className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Testimonials
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Supercharge Toggle Button */}
            <button
              id="supercharge"
              onClick={onToggleSupercharge}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 border ${
                isSupercharged
                  ? 'bg-[#ff3454] border-[#ff3454] text-white shadow-[0_0_15px_rgba(255,52,84,0.6)] animate-pulse'
                  : 'bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 border-transparent text-black dark:text-white'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${isSupercharged ? 'fill-white' : 'text-[#ff3454]'}`} />
              <span>{isSupercharged ? 'SUPERCHARGED' : 'Supercharge'}</span>
            </button>

            {/* Start a project CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#ff3454] dark:bg-white dark:text-black dark:hover:bg-[#ff3454] dark:hover:text-white transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleSupercharge}
              className={`p-2 rounded-full border ${
                isSupercharged
                  ? 'bg-[#ff3454] text-white border-[#ff3454]'
                  : 'bg-black/5 text-black dark:bg-white/10 dark:text-white border-transparent'
              }`}
              aria-label="Toggle supercharge"
            >
              <Zap className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black dark:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808] text-white flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-3xl font-bold tracking-tight">
            <Link
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ff3454] transition-colors"
            >
              Work
            </Link>
            <Link
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ff3454] transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ff3454] transition-colors"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ff3454] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#ff3454] flex items-center gap-2 mt-4"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </nav>

          <div className="pt-8 border-t border-white/10 text-xs font-mono text-white/50 flex flex-col gap-2">
            <p>IGNITE® Melbourne, Australia</p>
            <p>hello@igniteagency.com</p>
          </div>
        </div>
      )}
    </>
  );
}
