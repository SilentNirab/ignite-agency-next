'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  stats: string;
  tag: string;
  accentColor: string;
  logo: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Wesley College',
    category: 'Education & Schools',
    description: "A bold, modern digital presence for Australia's largest co-educational IB World School.",
    year: '2024',
    stats: '+140% Inquiries',
    tag: 'Web Design • Strategy • Next.js',
    accentColor: '#800020',
    logo: '/images/6a0563a852cf066d8ed6fb75_6a0563a6b7daefdb6295e187_wesley-college-logo-maroon.png',
  },
  {
    title: 'Brisbane Catholic Education',
    category: 'System & Architecture',
    description: 'Transforming 146 school websites into a unified, high-performing digital ecosystem.',
    year: '2024',
    stats: '146 Unified Sites',
    tag: 'Design System • Headless CMS',
    accentColor: '#1d4ed8',
    logo: '/images/66e8d1dcede37e2f770204e6_BHC_Logo_V_1_Clr_NT.webp',
  },
  {
    title: 'Melbourne Girls Grammar',
    category: 'Independent Education',
    description: 'Empowering young women through a reimagined, conversion-focused digital experience.',
    year: '2023',
    stats: 'Top Independent School',
    tag: 'Digital Brand • Custom UX',
    accentColor: '#0f172a',
    logo: '/images/69eacf7cbe19bb8248519151_69eacf79ed89a712142d100a_navyLogo0_bf819dc6.png',
  },
  {
    title: 'Fairtrade ANZ',
    category: 'Not-For-Profit & Impact',
    description: 'Championing ethical consumerism and farmer livelihoods across Australia and New Zealand.',
    year: '2024',
    stats: 'Global NGO Impact',
    tag: 'Interactive Storytelling • eCommerce',
    accentColor: '#0284c7',
    logo: '/images/66ac2b01d5ff37a6b1fed2f3_Fairtrade.svg',
  },
  {
    title: 'Chargefox Network',
    category: 'Future Tech & Clean Energy',
    description: "Digital acceleration for Australia's largest electric vehicle charging infrastructure.",
    year: '2023',
    stats: '4,000+ Plugs',
    tag: 'Web Platform • Live API Maps',
    accentColor: '#16a34a',
    logo: '/images/66cfd24de3329e87feb86757_chargefox-logo.svg',
  },
  {
    title: 'Urbis Group',
    category: 'Urban Planning & Design',
    description: 'Shaping cities and communities with an intuitive, award-winning knowledge platform.',
    year: '2024',
    stats: 'National Enterprise',
    tag: 'Enterprise Web • Research Portal',
    accentColor: '#ea580c',
    logo: '/images/66ac3417ab0331f61b297f08_urbis-logo.svg',
  },
];

export default function FeaturedWork() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="work" className="section_featured-work py-24 md:py-36 px-6 md:px-12 bg-white dark:bg-[#080808]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10 dark:border-white/10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff3454] mb-3">
              [ 01 // FEATURED WORK ]
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Selected Impact Case Studies
            </h2>
          </div>
          <p className="text-sm font-medium text-black/60 dark:text-white/60 max-w-sm mt-4 md:mt-0">
            Crafting world-class digital flagship experiences that transform organisations and inspire communities.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#f7f7f7] dark:bg-[#121212] border border-black/5 dark:border-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer overflow-hidden min-h-[380px]"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="h-10 w-28 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-black/40 dark:text-white/40">
                    {project.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#ff3454]">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white group-hover:text-[#ff3454] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed pt-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="pt-8 mt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-black dark:text-white">
                    {project.stats}
                  </span>
                  <p className="text-[11px] font-mono text-black/40 dark:text-white/40">
                    {project.tag}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-[#ff3454] group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Hover background tint accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${project.accentColor}18 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
