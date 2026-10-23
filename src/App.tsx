/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopEmergencyStrip } from './components/TopEmergencyStrip';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { CostEstimatorFeature } from './components/CostEstimatorFeature';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseYEPI } from './components/WhyChooseYEPI';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { EmergencyContactSection } from './components/EmergencyContactSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { EmergencyModal } from './components/EmergencyModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceTitle, setQuoteServiceTitle] = useState('Construction & Renovations');
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const [appliedEstimate, setAppliedEstimate] = useState<{
    category: string;
    scope: string;
    grade: string;
    minPrice: number;
    maxPrice: number;
  } | null>(null);

  const handleOpenQuote = (serviceTitle = 'Construction & Renovations') => {
    setQuoteServiceTitle(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const handleApplyEstimate = (estimateData: {
    category: string;
    scope: string;
    grade: string;
    minPrice: number;
    maxPrice: number;
  }) => {
    setAppliedEstimate(estimateData);
    // Smoothly scroll down to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#17191C] flex flex-col font-body selection:bg-[#D9A441] selection:text-[#17191C]">
      {/* 1. Top Local & Emergency Information Strip */}
      <TopEmergencyStrip 
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)} 
      />

      {/* 2. Refined Navigation Bar (Strict 3-Zone Contract) */}
      <HeaderNavbar
        onRequestQuote={() => handleOpenQuote()}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection 
          onRequestQuote={() => handleOpenQuote()} 
        />

        {/* 4. Trust & Business Advantages Strip */}
        <TrustStrip />

        {/* 5. Services Section (6 Core Trades + Scope Modals) */}
        <ServicesSection 
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(serviceTitle)} 
        />

        {/* 6. Featured Projects Section */}
        <FeaturedProjectsSection 
          onRequestQuote={() => handleOpenQuote()} 
        />

        {/* 7. Cost Estimator Feature (Realistic ZAR Indicative Budget Tool) */}
        <CostEstimatorFeature 
          onApplyEstimateToQuote={handleApplyEstimate} 
        />

        {/* 8. Process Section ("How It Works") */}
        <ProcessSection />

        {/* 9. Why Choose YEPI Section */}
        <WhyChooseYEPI 
          onRequestQuote={() => handleOpenQuote()} 
        />

        {/* 10. Service Area Section (Johannesburg South, Alberton, Ekurhuleni) */}
        <ServiceAreaSection 
          onRequestQuote={() => handleOpenQuote()} 
        />

        {/* 11. Emergency Contact Feature */}
        <EmergencyContactSection />

        {/* 12. Final Contact / Quotation Section */}
        <ContactSection 
          initialEstimate={appliedEstimate} 
        />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer
        onRequestQuote={() => handleOpenQuote()}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* Accessible Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={quoteServiceTitle}
      />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />
    </div>
  );
}
