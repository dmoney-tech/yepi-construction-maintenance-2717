import React from 'react';
import { X, Phone, MessageSquare, AlertTriangle, ShieldAlert, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#17191C] text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-rose-900/80 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B42318] animate-pulse" />
            <div>
              <span className="text-xs font-mono-num uppercase tracking-wider text-rose-400">
                24/7 EMERGENCY TRIAGE
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Urgent Property Assistance
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            For critical property failures that cannot wait for regular business hours, connect immediately to our on-call trade dispatcher.
          </p>

          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 space-y-2">
            <div className="text-xs font-bold text-rose-300 uppercase tracking-wider">
              Priority Supported Emergencies:
            </div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Burst geysers, ceiling flooding &amp; high-pressure mainline fractures</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Critical electrical faults, burning smell from DB board or total power trips</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Damaged perimeter security gates or broken structural steel locks</span>
              </li>
            </ul>
          </div>

          <div className="text-xs text-slate-400">
            Emergency coverage includes Alberton, Johannesburg South, Ekurhuleni and surrounding areas.
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <a
            href={COMPANY_INFO.telLink}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#B42318] hover:bg-[#991B1B] text-white font-bold text-sm transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call 076 835 3490</span>
          </a>

          <a
            href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent("URGENT EMERGENCY: I need immediate assistance at my property.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25292D] hover:bg-[#2F343A] text-white border border-slate-700 text-xs font-bold transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Dispatch</span>
          </a>
        </div>
      </div>
    </div>
  );
};
