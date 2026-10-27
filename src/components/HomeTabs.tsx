'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface TabItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  points: string[];
  deliverables: string;
}

const TABS: TabItem[] = [
  {
    id: 'strategy',
    name: '01. Strategy & Vision',
    headline: 'Grounding every digital decision in research and measurable outcomes.',
    description:
      'We run stakeholder discovery workshops, user interviews, and competitive landscape audits to build digital architectures that scale for decades.',
    points: [
      'Digital Roadmapping & Audience Personas',
      'Information Architecture & UX Wireframing',
      'SEO & Content Governance Strategy',
      'Multi-site Consolidation Frameworks',
    ],
    deliverables: 'Architecture blueprint • Strategy manifesto • Tech stack recommendation',
  },
  {
    id: 'design',
    name: '02. Digital Design & UI/UX',
    headline: 'Distinctive brand design systems that establish prestige and command attention.',
    description:
      'We craft bespoke visual languages with obsessive attention to typography, micro-interactions, accessibility (WCAG 2.1 AA), and fluid responsive layout.',
    points: [
      'Complete Multi-Brand Design Systems',
      'Interactive High-Fidelity Prototypes',
      'Conversion-Optimized Inquiry Pathways',
      'Motion Design & 3D WebGL Craft',
    ],
    deliverables: 'Figma Tokenized UI System • Component Library • Micro-Interaction Specs',
  },
  {
    id: 'engineering',
    name: '03. Web Engineering & Next.js',
    headline: 'High-speed, production-grade code built for resilience and zero-lag performance.',
    description:
      'Blazing fast Next.js applications, headless CMS architectures (Sanity, Strapi, Webflow), robust APIs, and enterprise-grade security.',
    points: [
      'Next.js (App Router) & React Architecture',
      'Headless CMS Integrations & Workflows',
      'Full TypeScript type safety & automated CI/CD',
      'Sub-second Core Web Vitals optimization',
    ],
    deliverables: 'Production Repository • Lighthouse 95+ Score • Automated Deployment',
  },
  {
    id: 'ai-tools',
    name: '04. AI Tools & Automation',
    headline: 'Supercharging organizational workflows with tailored generative AI capabilities.',
    description:
      'From custom school admissions chatbots to intelligent internal document search and automated CRM syncs, we bring modern AI to life.',
    points: [
      'Custom AI Knowledge & Admissions Bots',
      'Intelligent Search & Filtering Systems',
      'Automated Multi-Channel Form Ingestion',
      'Private & Secure LLM Integrations',
    ],
    deliverables: 'Trained AI Agents • Custom API Integrations • Analytics Dashboard',
  },
];

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className="section_home-tabs py-24 md:py-36 px-6 md:px-12 bg-white dark:bg-[#080808]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-black/10 dark:border-white/10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff3454] mb-3">
            [ 03 // CORE CAPABILITIES ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
            End-to-End Digital Transformation
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                activeTab === idx
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-lg'
                  : 'bg-[#f7f7f7] dark:bg-[#121212] text-black/70 dark:text-white/70 border-black/5 dark:border-white/5 hover:border-black/20'
              }`}
            >
              <span className="text-xs font-mono block font-bold mb-1 opacity-60">
                0{idx + 1}
              </span>
              <span className="text-sm font-semibold tracking-tight block">
                {tab.name.split('. ')[1]}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="p-8 md:p-14 rounded-3xl bg-[#f7f7f7] dark:bg-[#111111] border border-black/5 dark:border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-black dark:text-white leading-tight">
                {TABS[activeTab].headline}
              </h3>
              <p className="text-base text-black/70 dark:text-white/70 leading-relaxed">
                {TABS[activeTab].description}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TABS[activeTab].points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff3454] mt-1 shrink-0" />
                    <span className="text-sm font-medium text-black/80 dark:text-white/80">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-white dark:bg-[#181818] border border-black/5 dark:border-white/10 space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#ff3454]">
                KEY DELIVERABLES
              </p>
              <p className="text-sm font-medium text-black/80 dark:text-white/80 leading-relaxed">
                {TABS[activeTab].deliverables}
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:text-[#ff3454] transition-colors"
                >
                  <span>Explore in detail</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
