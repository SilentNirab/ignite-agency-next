'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrubIntro from '@/components/ScrubIntro';
import FeaturedWork from '@/components/FeaturedWork';
import DelightSection from '@/components/DelightSection';
import HomeTabs from '@/components/HomeTabs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [isSupercharged, setIsSupercharged] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Loader />
      <Navbar
        isSupercharged={isSupercharged}
        onToggleSupercharge={() => setIsSupercharged((prev) => !prev)}
      />
      <main className="min-h-screen bg-white dark:bg-[#080808]">
        <Hero isSupercharged={isSupercharged} />
        <ScrubIntro />
        <FeaturedWork />
        <DelightSection />
        <HomeTabs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
