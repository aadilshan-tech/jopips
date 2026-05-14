import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { TrialProcess } from './components/TrialProcess';
import { Features } from './components/Features';
import { TrustBadges } from './components/TrustBadges';
import { TradingAccountCTA } from './components/TradingAccountCTA';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-[#0B0F19] overflow-x-hidden max-w-[100vw]">
        <Header />
        <main className="w-full max-w-[100vw]">
          <Hero />
          <TrustSection />
          <TrialProcess />
          <Features />
          <TrustBadges />
          <TradingAccountCTA />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}