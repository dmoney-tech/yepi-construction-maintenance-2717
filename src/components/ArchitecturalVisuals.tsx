import React from 'react';
import { 
  Hammer, 
  Layers, 
  Wrench, 
  Droplet, 
  Zap, 
  Flame, 
  CheckCircle2, 
  Compass, 
  Ruler, 
  HardHat, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

interface VisualCardProps {
  type: string;
  className?: string;
  title?: string;
}

export const ServiceGraphic: React.FC<VisualCardProps> = ({ type, className = "h-48" }) => {
  switch (type) {
    case 'construction-renovations':
      return (
        <div className={`relative w-full ${className} bg-[#1D2125] overflow-hidden flex items-center justify-center p-6 border-b border-[#2D3339]`}>
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-renov" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D9A441" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-renov)" />
            </svg>
          </div>
          {/* Subtle architectural elevation preview */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#25292D] border border-[#D9A441]/30 flex items-center justify-center shadow-lg mb-3">
              <Building2 className="w-7 h-7 text-[#D9A441]" />
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D9A441] font-semibold mb-1">Structural & Interior</div>
            <div className="text-sm text-slate-300 font-medium">Masonry · Extensions · Remodeling</div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono-num text-slate-500">REF: STR-01</div>
        </div>
      );

    case 'project-management':
      return (
        <div className={`relative w-full ${className} bg-[#17191C] overflow-hidden flex items-center justify-center p-6 border-b border-[#2D3339]`}>
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#D9A441" strokeDasharray="4 4" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#D9A441" strokeDasharray="4 4" />
              <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#D9A441" strokeDasharray="4 4" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#25292D] border border-slate-600 flex items-center justify-center shadow-lg mb-3">
              <Layers className="w-7 h-7 text-amber-300" />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Site Oversight & Planning</div>
            <div className="text-sm text-slate-300 font-medium">Budgets · Scheduling · Quality Control</div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono-num text-slate-500">REF: MGT-02</div>
        </div>
      );

    case 'property-maintenance':
      return (
        <div className={`relative w-full ${className} bg-[#1D2125] overflow-hidden flex items-center justify-center p-6 border-b border-[#2D3339]`}>
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50%" cy="50%" r="60" stroke="#D9A441" strokeWidth="1" fill="none" />
              <circle cx="50%" cy="50%" r="100" stroke="#D9A441" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#25292D] border border-[#D9A441]/30 flex items-center justify-center shadow-lg mb-3">
              <Hammer className="w-7 h-7 text-[#D9A441]" />
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D9A441] font-semibold mb-1">Preventative Care</div>
            <div className="text-sm text-slate-300 font-medium">Roofing · Painting · Damp Proofing</div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono-num text-slate-500">REF: MAINT-03</div>
        </div>
      );

    case 'plumbing':
      return (
        <div className={`relative w-full ${className} bg-[#161B22] overflow-hidden flex items-center justify-center p-6 border-b border-[#2D3339]`}>
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 50 Q 50 20, 100 50 T 200 50 T 300 50" fill="none" stroke="#38BDF8" strokeWidth="1" />
              <path d="M 0 80 Q 50 50, 100 80 T 200 80 T 300 80" fill="none" stroke="#38BDF8" strokeWidth="1" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#21262D] border border-sky-500/30 flex items-center justify-center shadow-lg mb-3">
              <Droplet className="w-7 h-7 text-sky-400" />
            </div>
            <div className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-1">Water & Pressure Reticulation</div>
            <div className="text-sm text-slate-300 font-medium">Geysers · Pipework · Valves · Unblocking</div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono-num text-slate-500">REF: PLUMB-04</div>
        </div>
      );

    case 'electrical':
      return (
        <div className={`relative w-full ${className} bg-[#1A1815] overflow-hidden flex items-center justify-center p-6 border-b border-[#2D3339]`}>
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="0" x2="20" y2="100%" stroke="#F59E0B" strokeWidth="0.8" />
              <line x1="60" y1="0" x2="60" y2="100%" stroke="#F59E0B" strokeWidth="0.8" />
              <line x1="100" y1="0" x2="100" y2="100%" stroke="#F59E0B" strokeWidth="0.8" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#252420] border border-amber-500/40 flex items-center justify-center shadow-lg mb-3">
              <Zap className="w-7 h-7 text-amber-400" />
            </div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">Power & Distribution</div>
            <div className="text-sm text-slate-300 font-medium">DB Overhauls · Fault Finding · Inverter Prep</div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono-num text-slate-500">REF: ELEC-05</div>
        </div>
      );

    case 'welding-steel':
      return (
        <div className={`relative w-full ${className} bg-[#1C1A18] overflow-hidden flex items-center justify-center p-6 border-b border-[#2D3339]`}>
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="steel-lines" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="16" stroke="#D9A441" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#steel-lines)" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#262422] border border-[#D9A441]/40 flex items-center justify-center shadow-lg mb-3">
              <Flame className="w-7 h-7 text-[#D9A441]" />
            </div>
            <div className="text-xs uppercase tracking-wider text-[#D9A441] font-semibold mb-1">Steel Fabrication & Welding</div>
            <div className="text-sm text-slate-300 font-medium">Custom Braai Stands · Gates · Steelwork</div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono-num text-slate-500">REF: STL-06</div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full ${className} bg-[#1D2125] flex items-center justify-center p-6`}>
          <Wrench className="w-8 h-8 text-[#D9A441]" />
        </div>
      );
  }
};

export const ProjectGraphic: React.FC<{ category: string; className?: string }> = ({ category, className = "h-52" }) => {
  return (
    <div className={`relative w-full ${className} bg-[#1A1D20] overflow-hidden flex items-center justify-center p-6`}>
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="proj-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#proj-grid)" />
        </svg>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-lg bg-[#25292D] border border-slate-700 flex items-center justify-center mb-3">
          {category === 'Renovations' && <Building2 className="w-6 h-6 text-[#D9A441]" />}
          {category === 'Steel Fabrication' && <Flame className="w-6 h-6 text-amber-400" />}
          {category === 'Plumbing & Electrical' && <Zap className="w-6 h-6 text-sky-400" />}
          {category === 'Property Maintenance' && <Hammer className="w-6 h-6 text-emerald-400" />}
        </div>
        <span className="text-xs font-mono-num text-slate-400 tracking-wider uppercase">{category}</span>
        <span className="text-xs text-slate-500 mt-1">Verified Craftsmanship</span>
      </div>

      <div className="absolute top-3 right-3 text-[10px] font-mono-num px-2 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5">
        SPEC LOG
      </div>
    </div>
  );
};

export const HeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl bg-gradient-to-br from-[#1E2328] via-[#17191C] to-[#121416] border border-[#2D3339] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-8">
      {/* Background Architectural Grid & Guidelines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-architectural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D9A441" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-architectural-grid)" />
          {/* Elevation lines */}
          <line x1="10%" y1="75%" x2="90%" y2="75%" stroke="#D9A441" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="25%" y1="20%" x2="25%" y2="85%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="75%" y1="20%" x2="75%" y2="85%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Top Card Bar with Clean Blueprint Status */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#D9A441]/10 border border-[#D9A441]/40 flex items-center justify-center">
            <Compass className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white tracking-wide">YEPI PROPERTY EXECUTION FRAMEWORK</div>
            <div className="text-[11px] text-slate-400 font-mono-num">JOHANNESBURG SOUTH · ALBERTON HUB</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono-num text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
          <span>ESTABLISHED TRADES</span>
        </div>
      </div>

      {/* Middle Interactive Architectural Schematic */}
      <div className="relative z-10 my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#22272D]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#D9A441]">Phase 01</span>
              <Ruler className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="text-sm font-semibold text-white">Structural Integrity</div>
            <p className="text-xs text-slate-400 mt-1">Foundation, brickwork, load assessment & walls.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#22272D]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#D9A441]">Phase 02</span>
              <HardHat className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="text-sm font-semibold text-white">Systems & Reticulation</div>
            <p className="text-xs text-slate-400 mt-1">Certified plumbing, geysers, wiring & DB board.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#22272D]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[11px] uppercase font-semibold tracking-wider text-[#D9A441]">Phase 03</span>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="text-sm font-semibold text-white">Steel & Precision Care</div>
            <p className="text-xs text-slate-400 mt-1">Custom braai units, security gates & finishes.</p>
          </div>
        </div>

        {/* Central visual statement box */}
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#2A3038] to-[#202428] border border-[#D9A441]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-1.5 rounded-md bg-[#D9A441]/20 text-[#D9A441]">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Comprehensive Property Coverage</div>
              <div className="text-[11px] text-slate-300">Eliminate coordinating six different contractors. One accountable team from quote to sign-off.</div>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-mono-num text-[#D9A441] font-semibold">076 835 3490</span>
            <div className="text-[10px] text-slate-400">Direct Line & WhatsApp</div>
          </div>
        </div>
      </div>

      {/* Bottom specs telemetry bar */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono-num">
        <div className="flex items-center gap-3">
          <span>ALBERTON</span>
          <span className="text-slate-600">/</span>
          <span>JHB SOUTH</span>
          <span className="text-slate-600">/</span>
          <span>EKURHULENI</span>
        </div>
        <div className="text-[#D9A441]">BUILD · MANAGE · MAINTAIN</div>
      </div>
    </div>
  );
};
