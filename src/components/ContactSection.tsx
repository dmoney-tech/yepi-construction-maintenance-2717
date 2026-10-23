import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, AlertCircle, ArrowRight, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SUBURB_AREAS } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
  initialEstimate?: {
    category: string;
    scope: string;
    grade: string;
    minPrice: number;
    maxPrice: number;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService = '', 
  initialEstimate = null 
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'Construction & Renovations');
  const [suburb, setSuburb] = useState('Alberton');
  const [projectNotes, setProjectNotes] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState<any>(null);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialEstimate) {
      setSelectedService(initialEstimate.category);
      setProjectNotes(
        `Estimated with Online Cost Estimator: ${initialEstimate.category} (${initialEstimate.scope} scope, ${initialEstimate.grade} grade). Indicative Bracket: R${initialEstimate.minPrice.toLocaleString()} - R${initialEstimate.maxPrice.toLocaleString()}.`
      );
    }
  }, [initialEstimate]);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your name';
    if (!phone.trim()) {
      errors.phone = 'Please enter a contact telephone number';
    } else if (phone.trim().length < 8) {
      errors.phone = 'Please enter a valid South African phone number';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate reliable client-side submission with immediate feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionPayload({
        name: fullName,
        phone,
        email,
        service: selectedService,
        suburb,
        notes: projectNotes,
        isUrgent
      });
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const text = `Hi YEPI, I just submitted a quote request on your website:\nName: ${fullName}\nPhone: ${phone}\nService: ${selectedService}\nArea: ${suburb}\nNotes: ${projectNotes || 'Standard quote request'}`;
    window.open(`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#17191C] text-white border-b border-[#25292D] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid-dark pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-0.5 w-6 bg-[#D9A441]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441] font-display">
              LET'S GET YOUR PROJECT MOVING
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Ready to Talk About Your Project?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us what you need, discuss your options, and take the next step toward your property project.
          </p>
        </div>

        {/* Split Grid: Left Information & Direct Contacts, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries & Trust Points (col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#22272D] rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={COMPANY_INFO.telLink}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#17191C] border border-slate-700/80 hover:border-[#D9A441] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Telephone &amp; Emergency Line</span>
                    <span className="font-mono-num font-bold text-white text-base group-hover:text-[#D9A441] transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Click to call immediately</span>
                  </div>
                </a>

                <a
                  href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent("Hello YEPI, I'd like to discuss a property project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#17191C] border border-slate-700/80 hover:border-emerald-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp Fast Dispatch</span>
                    <span className="font-mono-num font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Send photos &amp; scope description</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-700 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Johannesburg South · Alberton · Ekurhuleni</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Mon–Sat 07:00–17:30 · 24/7 Priority Emergency Support</span>
                </div>
              </div>
            </div>

            {/* Quick reassurance box */}
            <div className="p-4 rounded-xl bg-[#22272D]/50 border border-white/5 text-xs text-slate-400 leading-relaxed">
              We respect your privacy. Your contact details are only used to prepare your quotation and coordinate on-site site visits.
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form (col-span-7) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Quote Request Received
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{submissionPayload?.name}</strong>. Our team will review your project details for <strong className="text-slate-900">{submissionPayload?.service}</strong> in <strong className="text-slate-900">{submissionPayload?.suburb}</strong> and get in touch shortly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 max-w-md mx-auto space-y-1 font-mono-num">
                  <div><strong>Phone:</strong> {submissionPayload?.phone}</div>
                  <div><strong>Area:</strong> {submissionPayload?.suburb}</div>
                  <div><strong>Service:</strong> {submissionPayload?.service}</div>
                  {submissionPayload?.notes && (
                    <div className="text-slate-500 line-clamp-2"><strong>Notes:</strong> {submissionPayload?.notes}</div>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppForward}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Speed up via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setProjectNotes('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Request a Quotation
                  </h3>
                  <span className="text-[11px] font-mono-num text-slate-500">Free Assessment</span>
                </div>

                {initialEstimate && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      Estimator applied: <strong>{initialEstimate.category}</strong> (indicative R{initialEstimate.minPrice.toLocaleString()} - R{initialEstimate.maxPrice.toLocaleString()}).
                    </span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Peter Khumalo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm ${
                        formErrors.fullName ? 'border-rose-500 bg-rose-50' : 'border-slate-300 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    />
                    {formErrors.fullName && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{formErrors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 076 835 3490"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono-num ${
                        formErrors.phone ? 'border-rose-500 bg-rose-50' : 'border-slate-300 bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    />
                    {formErrors.phone && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Email (Optional) & Suburb */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Suburb / Area *
                    </label>
                    <select
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Alberton">Alberton (General)</option>
                      <option value="New Redruth">New Redruth</option>
                      <option value="Meyersdal">Meyersdal</option>
                      <option value="Brackendowns">Brackendowns</option>
                      <option value="Glenvista">Glenvista</option>
                      <option value="Mondeor">Mondeor</option>
                      <option value="Rosettenville">Rosettenville</option>
                      <option value="Turffontein">Turffontein</option>
                      <option value="Johannesburg South">Johannesburg South (Other)</option>
                      <option value="Ekurhuleni">Ekurhuleni (Other)</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Service Required *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Custom Braai Stand">Custom Braai Stand Fabrication</option>
                    <option value="Emergency Call-Out">Emergency Plumbing / Electrical Call-Out</option>
                    <option value="Multiple Combined Trades">Multiple Combined Trades</option>
                  </select>
                </div>

                {/* Project Description Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Scope &amp; Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what needs to be done, approximate dimensions, or existing issues..."
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Urgent Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="urgent-check"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300"
                  />
                  <label htmlFor="urgent-check" className="text-xs text-slate-700 cursor-pointer">
                    This is an urgent request (leak, power failure, or security breach)
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#D9A441] hover:bg-[#C59336] text-[#17191C] font-display font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Details...</span>
                  ) : (
                    <>
                      <span>Submit Quotation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
