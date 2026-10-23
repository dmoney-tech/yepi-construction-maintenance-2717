import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone, ArrowRight, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderNavbarProps {
  onRequestQuote: () => void;
  onOpenEmergency: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ onRequestQuote, onOpenEmergency }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'How It Works', href: '#process' },
    { label: 'Why YEPI', href: '#why-yepi' },
    { label: 'Service Areas', href: '#areas' },
  ];

  return (
    <header 
      className={`sticky top-0 z-30 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'border-slate-300 shadow-sm' : 'border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly 3-Zone Desktop Navigation Bar */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-amber-600 rounded-md">
            <div className="w-10 h-10 rounded-lg bg-[#17191C] flex items-center justify-center text-[#D9A441] font-display font-extrabold text-xl tracking-tight shadow-md group-hover:bg-[#25292D] transition-colors">
              Y
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-[#17191C] tracking-tight leading-none">
                YEPI
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1">
                Construction &amp; Maintenance
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single line, text only, clean hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#17191C] hover:underline underline-offset-8 decoration-2 decoration-[#D9A441] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & WhatsApp Chat */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent("Hello YEPI, I'd like to ask about your construction and maintenance services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-emerald-600"
              title="Chat on WhatsApp with YEPI"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#17191C] bg-[#D9A441] hover:bg-[#C59336] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-amber-800"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRequestQuote}
              className="px-3 py-1.5 text-xs font-bold text-[#17191C] bg-[#D9A441] rounded-lg"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#17191C] text-[#D9A441] font-display font-bold flex items-center justify-center">
                    Y
                  </div>
                  <div>
                    <div className="font-display font-bold text-slate-900">YEPI</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Build · Manage · Maintain</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-700 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEmergency();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold hover:bg-rose-100 transition-colors"
                >
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>24/7 Emergency Assistance</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent("Hello YEPI, I'd like to ask about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.telLink}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3.5 rounded-lg bg-[#D9A441] text-[#17191C] font-bold text-sm hover:bg-[#C59336] transition-colors shadow-sm"
              >
                Request a Detailed Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
