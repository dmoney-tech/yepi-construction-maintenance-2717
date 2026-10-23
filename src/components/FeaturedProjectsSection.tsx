import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, X, Check, ShieldCheck, Filter } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/companyData';
import { ProjectGraphic } from './ArchitecturalVisuals';

interface FeaturedProjectsSectionProps {
  onRequestQuote: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ onRequestQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Renovations', 'Steel Fabrication', 'Property Maintenance', 'Plumbing & Electrical'];

  const filteredProjects = activeFilter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#D9A441]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
                OUR WORK
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#17191C] tracking-tight mb-4">
              Quality Work You Can See.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore examples of construction, renovation, fabrication and property improvement work.
            </p>
          </div>

          {/* Functional Category Filter Tabs (Zero-Pill Discipline: Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F6F4EF] rounded-xl border border-slate-200/80 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-[#17191C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F6F4EF]/50 rounded-2xl border border-slate-200 overflow-hidden hover:border-[#D9A441]/70 transition-all duration-200 flex flex-col group"
            >
              {/* Project Card Graphic / Header */}
              <div className="relative overflow-hidden">
                <ProjectGraphic category={project.category} className="h-48 group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="absolute bottom-3 left-3 bg-[#17191C]/85 backdrop-blur-sm text-slate-300 text-[11px] font-mono-num px-2.5 py-1 rounded border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-[11px] font-mono-num text-slate-500">
                    Handover: {project.duration}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#17191C] hover:text-amber-700 group/btn"
                  >
                    <span>View Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine portfolio transparency */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Verified Workmanship:</strong> We provide site references and address verifications for major building works during quotation consultations.
            </span>
          </div>
          <button
            onClick={onRequestQuote}
            className="text-xs font-bold text-amber-700 hover:text-amber-900 underline whitespace-nowrap self-start sm:self-auto"
          >
            Inquire About Similar Work
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono-num uppercase text-amber-700">
                  {activeProject.category} · {activeProject.location}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close project view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeProject.description}
              </p>

              <div className="p-3.5 rounded-xl bg-[#F6F4EF] border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                  Scope of Work Delivered:
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {activeProject.scopeSummary}
                </p>
                <ul className="space-y-1.5">
                  {activeProject.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Project Duration</span>
                  <span className="font-bold text-slate-900 font-mono-num">{activeProject.duration}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Suburban Zone</span>
                  <span className="font-bold text-slate-900">{activeProject.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onRequestQuote();
                }}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-[#D9A441] text-[#17191C] hover:bg-[#C59336] transition-colors"
              >
                Request Quotation for Similar Work
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
