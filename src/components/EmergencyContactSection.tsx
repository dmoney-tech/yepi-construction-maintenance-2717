import React from 'react';
import { Phone, ShieldAlert, AlertTriangle, MessageSquare, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const EmergencyContactSection: React.FC = () => {
  return (
    <section id="emergency" className="py-14 sm:py-16 bg-[#1A1818] border-y border-[#3A2222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#241B1C] to-[#1C1718] rounded-2xl border border-rose-900/60 p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Side: Context & Urgency */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B42318] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-display">
                RAPID-RESPONSE EMERGENCY ASSISTANCE
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
              Urgent Property Problem?
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Contact YEPI about supported emergency plumbing, electrical and other urgent maintenance needs across Johannesburg South and Alberton.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-rose-200/90 font-mono-num">
              <span>· Burst geysers &amp; high-pressure leaks</span>
              <span>· Complete electrical trip faults</span>
              <span>· Critical structural security repairs</span>
            </div>
          </div>

          {/* Right Side: Emergency Dispatch Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href={COMPANY_INFO.telLink}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#B42318] hover:bg-[#991B1B] text-white font-display font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Emergency Assistance</span>
            </a>

            <a
              href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                "URGENT EMERGENCY: I need immediate assistance with an urgent plumbing/electrical property problem."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#25292D] hover:bg-[#32373C] text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
