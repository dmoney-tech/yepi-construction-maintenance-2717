import React from 'react';
import { Phone, AlertCircle, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface TopEmergencyStripProps {
  onOpenEmergencyModal?: () => void;
}

export const TopEmergencyStrip: React.FC<TopEmergencyStripProps> = ({ onOpenEmergencyModal }) => {
  return (
    <div className="bg-[#17191C] text-slate-300 text-xs border-b border-[#25292D] relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left: Service Area Coverage */}
        <div className="flex items-center gap-2 truncate">
          <span className="text-slate-400 hidden sm:inline">Local Coverage:</span>
          <span className="font-medium text-slate-200 tracking-tight">
            Serving Johannesburg South · Alberton · Ekurhuleni
          </span>
        </div>

        {/* Right: Emergency Hotline */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 text-rose-400">
            <span className="w-2 h-2 rounded-full bg-[#B42318]" />
            <span className="font-semibold tracking-tight text-white hidden md:inline">24/7 Emergency Assistance</span>
            <span className="font-semibold tracking-tight text-white md:hidden">Emergency</span>
          </div>

          <a 
            href={COMPANY_INFO.telLink} 
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono-num font-semibold transition-colors group"
            title="Call YEPI Emergency Line"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>

          {onOpenEmergencyModal && (
            <button
              onClick={onOpenEmergencyModal}
              className="hidden lg:inline-flex text-[11px] px-2 py-0.5 rounded bg-rose-950/70 text-rose-300 border border-rose-800/50 hover:bg-rose-900 transition-colors"
            >
              Emergency Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
