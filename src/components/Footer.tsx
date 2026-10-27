'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="footer_component bg-[#050505] text-white pt-20 pb-12 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Giant Next Up Teaser Banner */}
        <div className="py-12 border-b border-white/10 mb-16 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff3454]">
              [ NEXT UP // DIVE DEEPER ]
            </span>
            <ArrowUpRight className="w-8 h-8 text-[#ff3454] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <Link href="#capabilities" className="block">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white group-hover:text-[#ff3454] transition-colors duration-300 font-sans">
              Capabilities
            </h2>
          </Link>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              PAGES
            </p>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="#work" className="hover:text-[#ff3454] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="hover:text-[#ff3454] transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#ff3454] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#ff3454] transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              SPECIALISMS
            </p>
            <ul className="space-y-2.5 text-sm font-medium text-white/70">
              <li>Independent Schools</li>
              <li>Catholic &amp; Systemic Education</li>
              <li>Not-For-Profit &amp; NGOs</li>
              <li>Future Tech &amp; Clean Energy</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              CONNECT
            </p>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff3454] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff3454] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@igniteagency.com"
                  className="hover:text-[#ff3454] transition-colors inline-flex items-center gap-1"
                >
                  <span>Email Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              MELBOURNE STUDIO
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Level 2, 100 Flinders Street, <br />
              Melbourne VIC 3000, Australia
            </p>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Q1 / Q2 Projects</span>
            </span>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 relative">
              <Image
                src="/images/661f63ba4c8721b8d46efdc5_ignite-bolt-icon_infrared_32x32.png"
                alt="IGNITE"
                fill
                className="object-contain opacity-70"
              />
            </div>
            <p>© 2006 - {currentYear} IGNITE Agency Pty Ltd. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#legal" className="hover:text-white transition-colors">
              Legal Stuff
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
