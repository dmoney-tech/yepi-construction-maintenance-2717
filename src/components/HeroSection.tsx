import React, { useState } from 'react';
import { ArrowRight, MessageSquare, MapPin, CheckCircle2, ShieldCheck, HardHat, Camera } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2160&q=85",
    title: "Residential Construction & Structural Renovation",
    subtitle: "Skilled masonry, framing, and full property improvements",
    tag: "Active Project Showcase"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2160&q=85",
    title: "Modern Architectural Home Extension",
    subtitle: "Completed open-plan living, patio & boundary masonry",
    tag: "Completed Transformation"
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2160&q=85",
    title: "Property Care & Systems Upgrades",
    subtitle: "Roofing, plumbing, electrical reticulation & upkeep",
    tag: "Multi-Trade Execution"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const activeImage = HERO_IMAGES[activeImageIndex];

  const handleImageError = () => {
    // If current image fails, automatically try the next image
    if (activeImageIndex < HERO_IMAGES.length - 1) {
      setActiveImageIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <section className="relative bg-[#17191C] text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden border-b border-[#25292D]">
      
      {/* 1. Large, High-Resolution Construction & Renovation Photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={activeImage.url}
          alt="YEPI residential construction, renovation, and property maintenance in progress"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          fetchPriority="high"
          decoding="async"
          className={`w-full h-full object-cover object-center lg:object-right transition-opacity duration-500 scale-100 ${
            imageLoaded ? 'opacity-100' : 'opacity-80'
          }`}
        />

        {/* 2. Carefully Controlled Contrast Overlay Scrim:
            - Left (0% - 40%): Deep charcoal gradient ensures 100% WCAG AA text legibility for headline and buttons
            - Center to Right (40% - 100%): 65-75% of the construction image remains completely visible, bright, and vibrant
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#17191C] via-[#17191C]/85 via-35% md:via-45% to-[#17191C]/25 to-90% pointer-events-none" 
        />
        
        {/* Subtle vertical vignette for mobile readability and top/bottom grounding */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#17191C]/70 via-transparent to-[#17191C]/90 md:to-transparent pointer-events-none" 
        />
      </div>

      {/* 3. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Headings (col-span-12 lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col items-start max-w-3xl">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4 bg-[#17191C]/70 backdrop-blur-xs px-3 py-1 rounded-md border border-white/10">
              <span className="h-0.5 w-5 bg-[#D9A441]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D9A441] font-display">
                CONSTRUCTION · RENOVATION · PROPERTY CARE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] mb-6 text-balance drop-shadow-md">
              Built Right. Maintained Better.{" "}
              <span className="text-[#D9A441]">One Team You Can Trust.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8 drop-shadow-sm font-normal">
              From renovations and construction to plumbing, electrical work and property maintenance, YEPI helps you manage your property with confidence.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#D9A441] hover:bg-[#C59336] text-[#17191C] font-display font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent("Hi YEPI, I'd like to ask about getting a quotation for my property.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25292D]/90 hover:bg-[#25292D] text-white border border-slate-600/80 backdrop-blur-sm font-display font-semibold text-sm sm:text-base transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Service-Area Note (Restrained trust anchor) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 border-t border-white/20 pt-4 w-full bg-[#17191C]/40 backdrop-blur-xs rounded-b-md">
              <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
              <span>Serving Johannesburg South, Alberton &amp; surrounding areas.</span>
            </div>

          </div>

          {/* Right Column: Floating Architectural Project Verification Card (col-span-12 lg:col-span-4) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end w-full">
            <div className="bg-[#17191C]/85 backdrop-blur-md rounded-2xl border border-white/15 p-5 shadow-2xl max-w-sm w-full space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                  <span className="text-[11px] font-mono-num uppercase tracking-wider text-amber-400 font-semibold">
                    {activeImage.tag}
                  </span>
                </div>
                <span className="text-[10px] font-mono-num text-slate-400">JHB SOUTH · ALBERTON</span>
              </div>

              <div>
                <h4 className="font-display font-bold text-white text-base leading-snug">
                  {activeImage.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {activeImage.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-num text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                  <span>SABS Materials</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Inspected Work</span>
                </div>
              </div>

              {/* Photo Switcher Controls */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Camera className="w-3 h-3 text-[#D9A441]" />
                  <span>Project Views:</span>
                </span>
                <div className="flex items-center gap-1">
                  {HERO_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-6 h-5 rounded text-[10px] font-mono-num font-bold transition-all ${
                        activeImageIndex === idx
                          ? 'bg-[#D9A441] text-[#17191C]'
                          : 'bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Photo Badge */}
      <div className="lg:hidden absolute bottom-3 right-3 z-10">
        <div className="bg-[#17191C]/80 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded text-[10px] font-mono-num text-slate-300">
          YEPI Property Projects
        </div>
      </div>

    </section>
  );
};
