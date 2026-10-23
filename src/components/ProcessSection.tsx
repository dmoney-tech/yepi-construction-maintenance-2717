import React from 'react';
import { MessageSquareText, FileText, CalendarCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Project",
      description: "Contact the team and explain what needs to be done. Share drawings, photos, or schedule an on-site evaluation.",
      icon: MessageSquareText
    },
    {
      number: "02",
      title: "Receive Your Quote",
      description: "Review a quotation based on the project scope and requirements, with transparent material and labor allocations.",
      icon: FileText
    },
    {
      number: "03",
      title: "Schedule the Work",
      description: "Agree on the next steps and arrange the work with a clear timeline, milestone expectations, and dedicated oversight.",
      icon: CalendarCheck
    },
    {
      number: "04",
      title: "Review the Completed Work",
      description: "Walk through the completed job and confirm the agreed work meets your quality standards before final sign-off.",
      icon: CheckCircle2
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#D9A441]" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
              THE PROCESS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17191C] tracking-tight mb-4">
            From First Call to Completed Work.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A straightforward, organized approach that keeps your project on schedule and eliminates uncertainty.
          </p>
        </div>

        {/* 4-Step Process Layout (Desktop Horizontal with Connecting Hairline, Mobile Vertical) */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div 
                  key={step.number} 
                  className="bg-[#F6F4EF]/60 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between group hover:border-[#D9A441]/60 transition-colors"
                >
                  <div>
                    {/* Top Row: Number and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display font-extrabold text-2xl text-[#D9A441] font-mono-num">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-amber-700 shadow-xs transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-mono-num text-slate-400">
                    STAGE {step.number} OF 04
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
