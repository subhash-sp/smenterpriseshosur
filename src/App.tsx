import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductRange } from './components/ProductRange';
import { WhyUs } from './components/WhyUs';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { BulkQuote } from './components/BulkQuote';
import { TrustBar } from './components/TrustBar';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen w-full bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductRange />
        <WhyUs />
        <Industries />
        <Process />
        <BulkQuote />
        <TrustBar />
        <Contact />
      </main>
      <Footer />
    </div>;
}