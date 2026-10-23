import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Phone } from 'lucide-react';
import { SUBURB_AREAS, COMPANY_INFO } from '../data/companyData';

interface ServiceAreaSectionProps {
  onRequestQuote: () => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onRequestQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const filteredSuburbs = SUBURB_AREAS.filter((area) => {
    const matchesSearch = area.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || area.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section id="areas" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#D9A441]" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
              WHERE WE WORK
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17191C] tracking-tight mb-4">
            Local Service. Practical Solutions.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            YEPI serves Johannesburg South, Alberton, and surrounding communities with dedicated on-site teams and rapid transit capability.
          </p>
        </div>

        {/* Interactive Search & Suburb Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Suburb Search & Filter Bar (col-span-12 lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search your suburb (e.g., Glenvista, Meyersdal, New Redruth)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-[#F6F4EF]/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center gap-1.5 p-1 bg-[#F6F4EF] rounded-xl border border-slate-200 shrink-0">
                {['All', 'Alberton', 'Johannesburg South', 'Ekurhuleni'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      selectedRegion === region
                        ? 'bg-[#17191C] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* Suburb Badges Grid (Zero-Pill: Clean unboxed cards with border) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredSuburbs.map((area) => (
                <div
                  key={area.name}
                  className="p-3 rounded-xl border border-slate-200 bg-[#F6F4EF]/40 hover:bg-white hover:border-[#D9A441] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {area.name}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono-num">
                    {area.region}
                  </div>
                </div>
              ))}
            </div>

            {filteredSuburbs.length === 0 && (
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                No exact match found for "{searchQuery}". We also serve adjacent communities in the broader South Rand. Contact our team to confirm dispatch to your location.
              </div>
            )}
          </div>

          {/* Local Dispatch Box (col-span-12 lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#17191C] text-white rounded-2xl border border-slate-700 p-6 sm:p-7 shadow-lg space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Clock className="w-4 h-4 text-[#D9A441]" />
              <span className="font-display font-bold text-sm text-white">
                LOCAL DISPATCH LOGISTICS
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>
                  <strong>Daily Site Coverage:</strong> Our crews are deployed daily across Alberton and JHB South, enabling convenient on-site consultations and measurements.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>
                  <strong>Material Sourcing:</strong> Direct ties with top South African building merchants in the South Rand for swift material delivery.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs text-slate-400 mb-1">Direct Local Line:</div>
              <a
                href={COMPANY_INFO.telLink}
                className="text-lg font-bold font-mono-num text-[#D9A441] hover:text-amber-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={onRequestQuote}
              className="w-full py-2.5 rounded-lg bg-[#D9A441] hover:bg-[#C59336] text-[#17191C] font-bold text-xs transition-colors"
            >
              Check Availability in My Suburb
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
