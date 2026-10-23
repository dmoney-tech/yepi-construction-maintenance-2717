import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Info, AlertTriangle, Shield, RefreshCw } from 'lucide-react';
import { ESTIMATOR_CATEGORIES, COMPANY_INFO } from '../data/companyData';

interface CostEstimatorProps {
  onApplyEstimateToQuote: (estimateDetails: {
    category: string;
    scope: string;
    grade: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export const CostEstimatorFeature: React.FC<CostEstimatorProps> = ({ onApplyEstimateToQuote }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [scopeSize, setScopeSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [specificationGrade, setSpecificationGrade] = useState<'standard' | 'premium' | 'architectural'>('standard');
  const [includeDisposal, setIncludeDisposal] = useState(true);
  const [urgentTurnaround, setUrgentTurnaround] = useState(false);

  const currentCategory = ESTIMATOR_CATEGORIES[selectedCategoryIndex];

  // Calculate realistic indicative ZAR estimates
  const baseRate = scopeSize === 'small' 
    ? currentCategory.baseRateSmall 
    : scopeSize === 'medium' 
      ? currentCategory.baseRateMedium 
      : currentCategory.baseRateLarge;

  const gradeMultiplier = specificationGrade === 'standard' ? 1.0 : specificationGrade === 'premium' ? 1.25 : 1.5;
  const disposalCost = includeDisposal ? (scopeSize === 'small' ? 1200 : scopeSize === 'medium' ? 2400 : 4500) : 0;
  const urgencyMultiplier = urgentTurnaround ? 1.15 : 1.0;

  const estimatedBase = Math.round((baseRate * gradeMultiplier * urgencyMultiplier) + disposalCost);
  const minEstimate = Math.round(estimatedBase * 0.92);
  const maxEstimate = Math.round(estimatedBase * 1.12);

  const materialsBracket = Math.round(estimatedBase * 0.55);
  const laborBracket = Math.round(estimatedBase * 0.35);
  const siteManagementBracket = estimatedBase - materialsBracket - laborBracket;

  const formatZAR = (val: number) => {
    return 'R ' + val.toLocaleString('en-ZA');
  };

  const handleApplyEstimate = () => {
    onApplyEstimateToQuote({
      category: currentCategory.label,
      scope: scopeSize.toUpperCase(),
      grade: specificationGrade.toUpperCase(),
      minPrice: minEstimate,
      maxPrice: maxEstimate
    });
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#F6F4EF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#D9A441]" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
              PLAN WITH MORE CLARITY
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17191C] tracking-tight mb-4">
            Planning a Project? Start With a Cost Estimate.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Get an initial indication of your construction or renovation budget before deciding on your next steps.
          </p>
        </div>

        {/* Split Section Layout: Interactive Controls on Left, Calculation Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Estimator Configuration (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* 1. Project Category Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Trade / Project Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ESTIMATOR_CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      selectedCategoryIndex === idx
                        ? 'border-[#D9A441] bg-[#D9A441]/10 text-slate-900 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="font-semibold text-xs text-slate-900">{cat.label}</span>
                    <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">{cat.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Project Scale &amp; Scope Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'small', label: 'Small', desc: 'Minor repair / touch-up' },
                  { id: 'medium', label: 'Medium', desc: 'Single room / standard' },
                  { id: 'large', label: 'Large', desc: 'Multi-area / extensive' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScopeSize(s.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      scopeSize === s.id
                        ? 'border-[#17191C] bg-[#17191C] text-white shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold">{s.label}</div>
                    <div className={`text-[10px] mt-0.5 ${scopeSize === s.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {s.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Finish Grade */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Materials &amp; Finish Specification
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard Trade', desc: 'Durable quality materials' },
                  { id: 'premium', label: 'Premium Grade', desc: 'High-end fixtures & tiles' },
                  { id: 'architectural', label: 'Heavy-Duty / Luxury', desc: 'Bespoke steel & finishes' }
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSpecificationGrade(g.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      specificationGrade === g.id
                        ? 'border-[#D9A441] bg-amber-50 text-amber-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{g.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{g.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Practical Add-ons */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={includeDisposal}
                  onChange={(e) => setIncludeDisposal(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span>Include rubble &amp; site debris clearing</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={urgentTurnaround}
                  onChange={(e) => setUrgentTurnaround(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span>Expedited timeline priority</span>
              </label>
            </div>

          </div>

          {/* Right Column: Calculated Breakdown & Conversion Card (col-span-5) */}
          <div className="lg:col-span-5 bg-[#17191C] text-white rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#D9A441]" />
                  <span className="font-display font-bold text-sm tracking-wide text-white">
                    INDICATIVE COST SUMMARY
                  </span>
                </div>
                <span className="text-[11px] font-mono-num text-slate-400">EST-ZAR</span>
              </div>

              {/* Primary Calculated Bracket */}
              <div className="my-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-mono-num">
                  Estimated Bracket Range:
                </div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#D9A441] font-mono-num tracking-tight">
                  {formatZAR(minEstimate)} – {formatZAR(maxEstimate)}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Selected: <span className="text-white font-medium">{currentCategory.label}</span> ({scopeSize} scope · {specificationGrade} grade)
                </div>
              </div>

              {/* Transparent Estimated Cost Composition */}
              <div className="p-4 rounded-xl bg-[#25292D] border border-white/5 space-y-2.5 text-xs text-slate-300 mb-6">
                <div className="flex justify-between items-center">
                  <span>Materials &amp; Fixtures (approx. 55%):</span>
                  <span className="font-mono-num text-white font-semibold">{formatZAR(materialsBracket)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Skilled Trade Workmanship (approx. 35%):</span>
                  <span className="font-mono-num text-white font-semibold">{formatZAR(laborBracket)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Site Supervision &amp; Waste Handling:</span>
                  <span className="font-mono-num text-white font-semibold">{formatZAR(siteManagementBracket)}</span>
                </div>
              </div>

              {/* Crucial Disclaimer (as required by prompt) */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-200/90 leading-relaxed mb-6">
                <Info className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>
                  <strong>Indicative estimate.</strong> Final pricing depends on on-site inspection, structural conditions, and verified bill of quantities.
                </span>
              </div>
            </div>

            {/* Direct Conversion Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleApplyEstimate}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#D9A441] hover:bg-[#C59336] text-[#17191C] font-display font-bold text-sm transition-colors shadow-md group"
              >
                <span>Calculate &amp; Request Official Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  `Hi YEPI, I ran your online cost estimator for ${currentCategory.label} (${scopeSize} scope) with an indicative range of ${formatZAR(minEstimate)} - ${formatZAR(maxEstimate)}. I'd like to discuss a site visit.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25292D] hover:bg-[#2E3338] text-white border border-slate-600 text-xs font-semibold transition-colors"
              >
                <span>Send Estimate via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
