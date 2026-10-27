'use client';

import { useState } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  'Web Design & Development',
  'Multi-Site Consolidation',
  'Digital Transformation',
  'Custom AI Integration',
  'UX/UI Audit & Strategy',
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff3454', '#ffffff', '#34ff48'],
    });
  };

  return (
    <section id="contact" className="section_form-embed py-24 md:py-36 px-6 md:px-12 bg-[#0c0c0c] text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Briefing details */}
        <div className="lg:col-span-5 space-y-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff3454]">
            [ 05 // LET&apos;S SUPERCHARGE ]
          </p>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Ready to build something <span className="text-[#ff3454]">extraordinary</span>?
          </h2>

          <p className="text-base text-white/70 leading-relaxed max-w-md">
            Whether you&apos;re planning a flagship school redesign, unifying multi-brand digital estates, or exploring generative AI tools — let&apos;s start a conversation.
          </p>

          <div className="pt-6 space-y-3 font-mono text-sm text-white/60">
            <p>Melbourne, Victoria, Australia</p>
            <p className="text-white hover:text-[#ff3454] transition-colors cursor-pointer">
              hello@igniteagency.com
            </p>
            <p>Direct: +61 3 9000 8888</p>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-[#141414] p-8 md:p-12 rounded-3xl border border-white/10">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#ff3454]/20 border border-[#ff3454] flex items-center justify-center text-[#ff3454]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">Inquiry Received!</h3>
              <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
                Thank you for reaching out. A Senior Digital Strategist from IGNITE® will review your inquiry and be in touch within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Badges Checkbox Grid */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                  How can we help? (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICE_OPTIONS.map((service) => {
                    const active = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                          active
                            ? 'bg-[#ff3454] border-[#ff3454] text-white shadow-[0_0_12px_rgba(255,52,84,0.4)]'
                            : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/50 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jack Roberts"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff3454] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/50 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jack@organisation.org.au"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff3454] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/50 mb-2">
                  Organisation or School Name
                </label>
                <input
                  type="text"
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  placeholder="e.g. Wesley College Melbourne"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff3454] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/50 mb-2">
                  Tell us about your project goals
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What challenges are you looking to solve? What is your target timeline?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff3454] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ff3454] hover:bg-[#ff1f43] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,52,84,0.4)] hover:scale-105 active:scale-95"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
