import React from 'react';
import { ShieldCheck, Layers, PhoneCall, Check, ArrowRight } from 'lucide-react';

interface WhyChooseYEPIProps {
  onRequestQuote: () => void;
}

export const WhyChooseYEPI: React.FC<WhyChooseYEPIProps> = ({ onRequestQuote }) => {
  const pillars = [
    {
      title: "Transparent Quotations",
      description: "Understand the proposed work and associated costs before the project proceeds.",
      details: [
        "No hidden fees or unexpected post-demolition surcharges",
        "Clear distinction between material costs and craft labor",
        "Written scope specifications prior to deposit payment"
      ],
      icon: ShieldCheck
    },
    {
      title: "Multiple Services, One Contact",
      description: "Coordinate construction, maintenance and related property needs through one company.",
      details: [
        "Single point of accountability across building, electrical & plumbing",
        "Eliminate scheduling conflicts between separate contractors",
        "Consistent standard of finish across interior and exterior trades"
      ],
      icon: Layers
    },
    {
      title: "Emergency Support",
      description: "Find the appropriate contact option when urgent plumbing, electrical or other supported emergency work is required.",
      details: [
        "Fast dispatch for burst geysers and primary water leaks",
        "Qualified fault-finding for dangerous electrical tripping",
        "Direct phone line to dedicated local trade technicians"
      ],
      icon: PhoneCall
    }
  ];

  return (
    <section id="why-yepi" className="py-20 lg:py-28 bg-[#F6F4EF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#D9A441]" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
              WHY CHOOSE YEPI
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17191C] tracking-tight mb-4">
            One Team. Clear Communication. Work Done With Care.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We bridge the gap between heavy industrial precision and responsive domestic care, giving property owners complete peace of mind.
          </p>
        </div>

        {/* 3 Editorial Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:border-[#D9A441]/70 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#17191C] flex items-center justify-center text-[#D9A441] mb-6 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#17191C] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-slate-100">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onRequestQuote}
                    className="text-xs font-bold text-[#17191C] hover:text-amber-700 inline-flex items-center gap-1 group"
                  >
                    <span>Talk to our team</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
