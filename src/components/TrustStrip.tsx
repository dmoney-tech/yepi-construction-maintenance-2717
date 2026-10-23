import React from 'react';
import { Layers, FileCheck, MapPin, AlertCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Layers,
      title: "Multiple Trades, One Team",
      description: "Construction, plumbing, electrical, welding & repairs handled without juggling separate sub-contractors."
    },
    {
      icon: FileCheck,
      title: "Transparent Quotations",
      description: "Itemized scope specifications and clear material allocations before any on-site work commences."
    },
    {
      icon: MapPin,
      title: "Local Coverage",
      description: "Based in Johannesburg South and Alberton with prompt transit across Ekurhuleni suburbs."
    },
    {
      icon: AlertCircle,
      title: "Urgent Call-Outs",
      description: "Dedicated assistance for critical water burst emergencies, geyser faults, and electrical failures."
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.title} 
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F4EF]/70 border border-slate-200/80 hover:border-[#D9A441]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#17191C] flex items-center justify-center shrink-0 text-[#D9A441]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-display font-bold text-slate-900 mb-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
