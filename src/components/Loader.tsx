'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [year, setYear] = useState('2025');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());

    // Check if user already saw the loader in this session or has query param
    const urlParams = new URLSearchParams(window.location.search);
    const skipLoader = sessionStorage.getItem('is-loader-shown') === 'true' || urlParams.has('no-loader');

    if (skipLoader) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    sessionStorage.setItem('is-loader-shown', 'true');

    // Number animation
    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Exit animation
        gsap.to('.home-loader_component', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: () => {
            setIsDone(true);
            onComplete?.();
          },
        });
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        setProgress(Math.round(obj.val));
      },
    });

    // Safety timeout: dismiss loader after 3.5s max
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 3500);

    return () => {
      clearTimeout(safetyTimer);
      tl.kill();
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className="home-loader_component fixed inset-0 z-[999999] bg-[#080808] text-white flex flex-col justify-between p-6 md:p-12 select-none overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Top Corners */}
      <div className="flex justify-between items-start text-xs font-mono tracking-widest text-[#888]">
        <p className="home-loader_top-left">DESIGN</p>
        <p className="home-loader_top-right">TECHNOLOGY</p>
      </div>

      {/* Center Bolt & Counter */}
      <div className="relative flex flex-col items-center justify-center my-auto">
        <div className="home-loader_center-bolt-wrap mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 193"
            className="w-12 h-36 md:w-16 md:h-48 drop-shadow-[0_0_20px_rgba(255,52,84,0.6)] animate-pulse"
            fill="none"
          >
            <path
              d="M2.60875 0.5L16.1823 90.3916H0L52.5308 192.5L52.5308 192.5L38.8487 102.75H55.2329L2.60875 0.5Z"
              fill="#ff3454"
              stroke="#ff3454"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="text-5xl md:text-7xl font-bold font-mono tracking-tighter text-white">
          <span>{progress}</span>
          <span className="text-[#ff3454]">%</span>
        </div>
      </div>

      {/* Bottom Corners */}
      <div className="flex justify-between items-end text-xs font-mono tracking-widest text-[#888]">
        <p className="home-loader_bottom-left font-bold text-white tracking-wider">IGNITE®</p>
        <p className="home-loader_bottom-right">
          <span>© 2006 - </span>
          <span>{year}</span>
        </p>
      </div>
    </div>
  );
}
