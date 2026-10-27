'use client';

import { useState } from 'react';
import { Heart, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organisation: string;
  likes: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "IGNITE® delivered a transformative digital experience that truly represents Wesley's vibrant heritage and progressive ethos. The feedback from prospective families and our leadership team has been phenomenal.",
    author: 'Jacky Roberts',
    role: 'Director of Marketing & Engagement',
    organisation: 'Wesley College Melbourne',
    likes: 42,
  },
  {
    quote:
      'Working with IGNITE was a masterclass in collaboration. They understood our complex NGO storytelling and transformed it into a clear, compelling digital narrative that drives real ethical impact.',
    author: 'Steph Smith',
    role: 'Head of Communications',
    organisation: 'Fairtrade Australia & New Zealand',
    likes: 38,
  },
  {
    quote:
      "Our website performance, user engagement, and enrollment inquiries surged immediately after launch. The team's attention to typography, speed, and subtle interaction is second to none.",
    author: 'Lauren French',
    role: 'Executive Director of Community',
    organisation: 'Melbourne Girls Grammar School',
    likes: 51,
  },
];

export default function Testimonials() {
  const [likes, setLikes] = useState<number[]>(TESTIMONIALS.map((t) => t.likes));
  const [likedMap, setLikedMap] = useState<{ [key: number]: boolean }>({});

  const handleLike = (index: number) => {
    setLikes((prev) => {
      const next = [...prev];
      if (likedMap[index]) {
        next[index] -= 1;
      } else {
        next[index] += 1;
        confetti({
          particleCount: 25,
          spread: 40,
          origin: { y: 0.7 },
          colors: ['#ff3454', '#ffffff'],
        });
      }
      return next;
    });

    setLikedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="testimonials" className="section_testimonials py-24 md:py-36 px-6 md:px-12 bg-[#090909] text-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#ff3454] mb-3">
              [ 04 // TRUST &amp; PARTNERSHIP ]
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Loved by Industry Leaders
            </h2>
          </div>
          <p className="text-sm font-medium text-white/60 max-w-sm mt-4 md:mt-0">
            Real outcomes and enduring relationships forged with education and mission-driven leaders across Australia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-2xl bg-[#131313] border border-white/10 relative group hover:border-[#ff3454]/40 transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[#ff3454] mb-6 opacity-80" />
                <p className="text-base text-white/85 leading-relaxed italic mb-8 font-serif">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-white/50">{item.role}</p>
                  <p className="text-xs font-mono text-[#ff3454] mt-0.5">{item.organisation}</p>
                </div>

                <button
                  onClick={() => handleLike(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    likedMap[idx]
                      ? 'bg-[#ff3454] text-white scale-105'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label="React with heart"
                >
                  <Heart className={`w-3.5 h-3.5 ${likedMap[idx] ? 'fill-white' : ''}`} />
                  <span>{likes[idx]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
