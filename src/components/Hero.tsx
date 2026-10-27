'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const INDUSTRIES = [
  { text: 'Future Tech.', color: '#34ff48' },
  { text: 'Education.', color: '#ff7e36' },
  { text: 'Not-For-Profit.', color: '#ff3454' },
];

const LOGOS = [
  { src: '/images/680865638396fad97fb9387b_ba-logo.svg', alt: 'BA Logo' },
  { src: '/images/6a0563a852cf066d8ed6fb75_6a0563a6b7daefdb6295e187_wesley-college-logo-maroon.png', alt: 'Wesley College' },
  { src: '/images/69eacf7cbe19bb8248519151_69eacf79ed89a712142d100a_navyLogo0_bf819dc6.png', alt: 'Melbourne Girls Grammar' },
  { src: '/images/66cfd6e33144702977de46d9_ncslogo.svg', alt: 'Newstead Christian School' },
  { src: '/images/66cfcf62003ff20fedd6794a_archipelago-logo 1.svg', alt: 'Archipelago' },
  { src: '/images/66e8d1dcede37e2f770204e6_BHC_Logo_V_1_Clr_NT.webp', alt: 'BHC' },
  { src: '/images/66ac3417ab0331f61b297f08_urbis-logo.svg', alt: 'Urbis' },
  { src: '/images/66ac2b3e99bf3da415431fc9_KRB.svg', alt: 'KRB' },
  { src: '/images/66ac2b01d5ff37a6b1fed2f3_Fairtrade.svg', alt: 'Fairtrade' },
  { src: '/images/66cfd24de3329e87feb86757_chargefox-logo.svg', alt: 'Chargefox' },
  { src: '/images/66cfd313ddf1563101779cfd_adf-logo.99c44c48.svg', alt: 'ADF' },
  { src: '/images/69e6e6ae87801cbb31b38869_66cfd1da2d1b9c4995c532ce_aboundlogo.webp', alt: 'Abound' },
  { src: '/images/69eac8cfa46a08dd28907189_69eac8cc8b63458c2c1fb7d4_edmund-rice-college-wollongong-logo.svg', alt: 'Edmund Rice' },
  { src: '/images/69eac624efbf4af6551ba252_69eac621d875d21fae5591fe_salesian-college-logo.png', alt: 'Salesian College' },
  { src: '/images/69eac8d30a78a7d1b7a22401_69eac8d00a78a7d1b7a221e7_international-grammar-school-logo.svg', alt: 'International Grammar' },
  { src: '/images/66ac2bbae976fe24936a20b1_Mondo.svg', alt: 'Mondo' },
  { src: '/images/66ac2ab3c150f3355c66d1f0_AFLPA.svg', alt: 'AFLPA' },
];

export default function Hero({ isSupercharged }: { isSupercharged: boolean }) {
  const [industryIndex, setIndustryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-supercharge={isSupercharged ? 'true' : 'false'}
      className="section-home-hero relative pt-36 md:pt-44 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden transition-colors duration-700"
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <h2 className="home-hero_subtitle text-base md:text-xl text-[#666] dark:text-[#999] font-normal leading-relaxed mb-6 max-w-2xl">
            IGNITE® creates high-performing websites, AI tools and digital experiences for schools and mission-driven organisations.
          </h2>

          {/* Main Title with Cycling Highlight */}
          <h1 className="home-hero_title text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#111] dark:text-white leading-[1.08] font-sans">
            Websites for Mission-Driven Organisations in{' '}
            <span
              className="inline-block transition-all duration-500 font-extrabold"
              style={{
                color: INDUSTRIES[industryIndex].color,
                textShadow: isSupercharged ? `0 0 25px ${INDUSTRIES[industryIndex].color}` : 'none',
              }}
            >
              {INDUSTRIES[industryIndex].text}
            </span>
          </h1>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-20 md:mt-28 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-4">
          <p className="home-hero_logo-marquee-subtitle text-xs md:text-sm font-mono uppercase tracking-wider text-[#888]">
            Like these leaders 👉
          </p>
        </div>

        <div className="relative w-full overflow-hidden whitespace-nowrap py-4 border-y border-black/5 dark:border-white/5">
          <div className="inline-flex gap-12 md:gap-16 items-center animate-[marquee_35s_linear_infinite]">
            {LOGOS.concat(LOGOS).map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center h-10 w-24 md:w-32 opacity-65 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <div className="relative w-full h-8">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
