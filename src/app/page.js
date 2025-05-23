'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';

import HeroSection from '@/components/organisms/Hero';
import WhyChooseUs from '@/components/organisms/WhyChoose';
import ServicesSection from '@/components/organisms/Services';
import Solutions from '@/components/organisms/Solutions';
import TestimonialCarousel from '@/components/organisms/Testimonials';
import ProductSection from '@/components/organisms/Products';
import ValuesSection from '@/components/organisms/Values';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <ValuesSection />
      <ProductSection />
      <Solutions />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
}
