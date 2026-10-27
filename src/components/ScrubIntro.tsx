'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrubIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = textRefs.current.filter(Boolean) as HTMLParagraphElement[];

    // Set initial states
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0.25, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.8,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (containerRef.current && containerRef.current.contains(t.trigger as Node)) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="section_scrub-intro py-28 md:py-44 px-6 md:px-12 bg-[#090909] text-white"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-28">
        <p
          ref={(el) => { textRefs.current[0] = el; }}
          className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.18] text-white"
        >
          Your website looks like everyone else&apos;s, is frustrating users and slowly eroding your brand.
        </p>

        <p
          ref={(el) => { textRefs.current[1] = el; }}
          className="text-4xl sm:text-7xl md:text-8xl font-black text-[#ff3454] tracking-tighter uppercase"
        >
          Brutal.
        </p>

        <p
          ref={(el) => { textRefs.current[2] = el; }}
          className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.18] text-white/90"
        >
          For two decades, IGNITE® has elevated Australia&apos;s most ambitious schools and mission-driven organisations online.
        </p>

        <p
          ref={(el) => { textRefs.current[3] = el; }}
          className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.18]"
        >
          Ready for your{' '}
          <span className="text-[#ff3454] underline decoration-[#ff3454]/40 decoration-4 underline-offset-8">
            Supercharged Digital™
          </span>{' '}
          reinvention?
        </p>
      </div>
    </section>
  );
}
