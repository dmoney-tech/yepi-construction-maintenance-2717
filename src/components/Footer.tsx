import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface FooterProps {
  onRequestQuote: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote, onOpenEmergency }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121416] text-slate-400 text-xs border-t border-[#25292D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#D9A441] text-[#17191C] font-display font-black text-lg flex items-center justify-center">
                Y
              </div>
              <div>
                <span className="font-display font-bold text-base text-white tracking-tight block">
                  YEPI Construction &amp; Maintenance
                </span>
                <span className="text-[11px] text-[#D9A441] font-mono-num tracking-wider uppercase">
                  Build · Manage · Maintain
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Comprehensive property solutions across construction, renovations, plumbing, electrical installations, steel fabrication, and emergency maintenance throughout Johannesburg South, Alberton, and Ekurhuleni.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a 
                href={COMPANY_INFO.telLink}
                className="flex items-center gap-2 text-white hover:text-[#D9A441] font-mono-num font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a 
                href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent("Hello YEPI, I'd like to ask about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono-num font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Braai Stands
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Tools */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navigation &amp; Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#estimator" className="hover:text-[#D9A441] transition-colors flex items-center gap-1.5">
                  <span>Cost Estimator</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-900/60 text-amber-300">Tool</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-yepi" className="hover:text-white transition-colors">
                  Why Choose YEPI
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEmergency}
                  className="text-rose-400 hover:text-rose-300 transition-colors text-left"
                >
                  Emergency Assistance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas Covered */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>· Alberton Central &amp; New Redruth</li>
              <li>· Meyersdal &amp; Brackendowns</li>
              <li>· Glenvista, Mondeor &amp; Mulbarton</li>
              <li>· Bassonia &amp; Oakdene</li>
              <li>· Rosettenville &amp; Turffontein</li>
              <li>· Ekurhuleni &amp; East Rand hubs</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="px-3.5 py-2 rounded-lg bg-[#D9A441] hover:bg-[#C59336] text-[#17191C] font-bold text-xs transition-colors"
              >
                Request Quotation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</span>
            <span>·</span>
            <span>Tagline: Build · Manage · Maintain</span>
            <span>·</span>
            <span>Serving Gauteng South</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            title="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
