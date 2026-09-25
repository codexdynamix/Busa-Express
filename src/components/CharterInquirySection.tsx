import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Calendar, Users, Package, FileText, ArrowRight, Clock, ShieldCheck, Bus, Truck, Maximize2, Sparkles, Camera } from 'lucide-react';
import { BUSA_CONTACTS } from '@/data/busData';
import { useBusPhotos } from '@/context/PhotoContext';
import { DEFAULT_COACH_IMAGES } from '@/assets/images';

export const CharterInquirySection: React.FC = () => {
  const { photos, openUploadModal } = useBusPhotos();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'Private Coach Charter',
    origin: 'Johannesburg',
    destination: 'Harare',
    estimatedDate: '',
    groupSize: 'Full Bus (50 Seater)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [showFlyerModal, setShowFlyerModal] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setFormError('Please fill in your name, contact phone, and email address.');
      return;
    }
    setFormError(null);

    const ref = `BUSA-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryRef(ref);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Busachamone Luxury Desk!%0A%0A*Service Inquiry Reference:* ${inquiryRef}%0A*Name:* ${formData.fullName}%0A*Contact:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service Requested:* ${formData.serviceType}%0A*Route:* ${formData.origin} to ${formData.destination}%0A*Date:* ${formData.estimatedDate || 'Flexible'}%0A*Group Size / Cargo:* ${formData.groupSize}%0A*Details:* ${formData.message || 'Standard quote required.'}%0A%0APlease provide a quote.`;
    return `https://wa.me/${BUSA_CONTACTS.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="inquiries-section" className="py-20 bg-card border-b border-ink/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bg border border-ink/6 text-xs font-semibold text-muted shadow-sm mb-3">
            <span>Special Operations & Charters</span>
            <span>·</span>
            <span className="text-primary-deep">Rapid Response Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Service inquiries, bus charters & cross-border freight.
          </h2>
          <p className="mt-3 text-muted text-base leading-relaxed">
            Need an exclusive 50-seater VIP coach for a church convention, wedding, corporate retreat, or funeral? Or reliable cross-border commercial freight and parcel delivery between South Africa and Zimbabwe? Complete the inquiry form below for an immediate dispatch consultation.
          </p>
        </div>

        {/* Apple iOS Clean 2-Column Split: Actual Fleet Card + Inset Grouped Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean Charter Flyer / Fleet Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Apple Styled Presentation Card with Real Busachamone Bus Photo */}
            <div className="bg-bg rounded-3xl p-4 sm:p-6 border border-ink/6 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink/5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-deep" />
                  <span className="text-xs font-bold text-ink">Official Services Charter</span>
                </div>
                <span className="text-2xs font-mono text-success-bright font-bold uppercase">Busachamone Fleet</span>
              </div>

              {/* Real Busachamone 3-Axle Profile Photo or Schematic */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-bg border border-ink/6 group shadow-inner">
                <img
                  src={photos.sideProfile || photos.heroCoach || DEFAULT_COACH_IMAGES.sideProfile}
                  alt="Busachamone Integrated Services luxury coach side profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setShowFlyerModal(true)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-ink/60 backdrop-blur-md text-on-primary text-xxs font-medium border border-on-primary/20 hover:bg-ink/80 transition-all flex items-center gap-1.5 shadow-lg"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge Photo</span>
                </button>
                <div className="absolute bottom-3 left-3 text-on-primary text-xs font-semibold drop-shadow-sm">
                  Busachamone Scania Irizar i6S
                </div>
              </div>

              {/* Quick Service Highlights */}
              <div className="mt-4 space-y-2 text-xs text-ink">
                <div className="flex items-center gap-2 bg-card p-2.5 rounded-xl border border-ink/4">
                  <Bus className="w-4 h-4 text-primary-deep shrink-0" />
                  <span>50-Seater Executive Charters across SA & Zimbabwe</span>
                </div>
                <div className="flex items-center gap-2 bg-card p-2.5 rounded-xl border border-ink/4">
                  <Truck className="w-4 h-4 text-success-bright shrink-0" />
                  <span>Direct Beitbridge Commercial Freight Manifesting</span>
                </div>
                <div className="flex items-center gap-2 bg-card p-2.5 rounded-xl border border-ink/4">
                  <ShieldCheck className="w-4 h-4 text-warn shrink-0" />
                  <span>Full Cross-Border Insurance & Certified Double Drivers</span>
                </div>
              </div>

              {/* Direct Hotline Strip */}
              <div className="mt-4 pt-3 border-t border-ink/6">
                <div className="text-xxs font-semibold text-muted mb-2">Immediate Dispatch Telephone:</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href={`tel:${BUSA_CONTACTS.phoneSaPrimary}`}
                    className="p-2 rounded-xl bg-card hover:bg-surface border border-ink/6 text-center text-ink transition-colors"
                  >
                    SA: {BUSA_CONTACTS.phoneSaPrimary}
                  </a>
                  <a
                    href={`tel:${BUSA_CONTACTS.phoneZimPrimary}`}
                    className="p-2 rounded-xl bg-card hover:bg-surface border border-ink/6 text-center text-ink transition-colors"
                  >
                    ZIM: {BUSA_CONTACTS.phoneZimPrimary}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: iOS Grouped Inset Form (7 cols) */}
          <div className="lg:col-span-7 bg-bg rounded-3xl p-6 sm:p-8 border border-ink/6">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-success-bright/10 text-success-bright flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-primary-deep uppercase tracking-wider">
                    Inquiry Reference: {inquiryRef}
                  </span>
                  <h3 className="text-2xl font-bold text-ink">
                    Inquiry Received, {formData.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Our luxury charter and freight dispatch coordinator has received your details and is calculating your customized rate.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-4 border border-ink/6 text-xs text-left max-w-md mx-auto space-y-1.5 text-ink font-mono shadow-sm">
                  <div><strong>Service:</strong> {formData.serviceType}</div>
                  <div><strong>Route:</strong> {formData.origin} ➔ {formData.destination}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Volume/Group:</strong> {formData.groupSize}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-success-bright hover:bg-success text-on-primary font-semibold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Chat With Dispatch on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceType: 'Private Coach Charter',
                        origin: 'Johannesburg',
                        destination: 'Harare',
                        estimatedDate: '',
                        groupSize: 'Full Bus (50 Seater)',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-card text-ink border border-ink/8 hover:bg-surface text-xs font-semibold rounded-full transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-ink/6 pb-3">
                  <h3 className="text-base font-bold text-ink">
                    Submit Contact Details & Service Inquiries
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    Our team provides custom quotes for group charters and palletized freight within 60 minutes.
                  </p>
                </div>

                {/* Service Type Selector */}
                <div>
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Private Coach Charter',
                      'Express Cross-Border Freight',
                      'Group / Pilgrimage Tour',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: type })}
                        className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                          formData.serviceType === type
                            ? 'bg-ink text-on-primary border-transparent shadow-sm'
                            : 'bg-card text-ink border-ink/4 hover:bg-card/80'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Names & Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tendai Moyo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
                    />
                  </div>

                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 / +263 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
                    />
                  </div>

                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Estimated Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.estimatedDate}
                      onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Origin, Destination & Group Size */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Origin City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Johannesburg"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
                    />
                  </div>

                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Destination City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Harare / Bulawayo"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
                    />
                  </div>

                  <div className="bg-card rounded-2xl p-3 border border-ink/4">
                    <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                      Group Size / Cargo Volume
                    </label>
                    <select
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                      className="w-full bg-transparent text-xs font-semibold text-ink focus:outline-none cursor-pointer"
                    >
                      <option value="Full Bus (50 Seater)">Full Coach (50 Seater)</option>
                      <option value="Group 20-35 Persons">Medium Group (20-35 Pax)</option>
                      <option value="Small Group (10-19 Pax)">Small Group (10-19 Pax)</option>
                      <option value="Commercial Pallet / Boxes">Commercial Pallets / Boxes</option>
                      <option value="Vehicle / Equipment Spare">Machinery / Heavy Parts</option>
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="bg-card rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    Special Inquiries or Cargo Details
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specify any route stops, pickup points, return journey requests, or freight weight..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent text-xs font-medium text-ink focus:outline-none resize-none"
                  />
                </div>

                {formError ? (
                  <p className="text-xs font-medium text-danger">{formError}</p>
                ) : null}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-2xl shadow-primary-glow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry for Immediate Quote</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {showFlyerModal && (
        <div className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-ink rounded-3xl overflow-hidden border border-on-primary/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-on-primary/10 text-on-primary">
              <span className="text-xs font-semibold">Busachamone Scania Irizar i6S Charter Fleet</span>
              <button
                type="button"
                onClick={() => setShowFlyerModal(false)}
                className="text-on-primary/60 hover:text-on-primary px-3 py-1 bg-card/10 rounded-full text-xs font-semibold cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-ink flex items-center justify-center">
              <img
                src={photos.sideProfile || photos.heroCoach || DEFAULT_COACH_IMAGES.sideProfile}
                alt="Busachamone fleet"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-ink/80 flex items-center justify-between text-xs text-on-primary/90">
              <span>Collect contact details and service inquiries directly via the form.</span>
              <button
                type="button"
                onClick={() => setShowFlyerModal(false)}
                className="px-4 py-2 bg-primary-deep text-on-primary rounded-full font-semibold cursor-pointer"
              >
                Complete Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
