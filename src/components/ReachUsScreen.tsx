import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Navigation
} from 'lucide-react';

export const ReachUsScreen: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="w-full py-10 sm:py-14 bg-[#faf8ff]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Banner */}
        <div className="bg-[#0b2545] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col gap-3">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
            Contact & Location Information
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Reach Pathankot District Swimming Association
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
            Get in touch with executive office bearers, enquire about coaching batches at Lamini Municipal Pool, or submit championship affiliation queries.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Registered Office */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#006399]">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#001026]">Administrative Office</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              C/o Deepak Agencies, Main Bazar,<br />
              Pathankot - 145001, Punjab, India
            </p>
            <div className="pt-2 text-xs font-semibold text-[#006399]">
              Reg No: DIC/PTK/16 of 2026-27
            </div>
          </div>

          {/* Card 2: Training Arena */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#006399]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#001026]">Aquatic Training Arena</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Municipal Swimming Pool, Lamini,<br />
              Near Model Town, Pathankot, Punjab
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Active Training & Championship Venue
            </div>
          </div>

          {/* Card 3: Training Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#006399]">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#001026]">Pool Operating Hours</h3>
            <div className="text-xs text-slate-600 space-y-1">
              <div><strong>Morning Batch:</strong> 06:00 HRS – 09:30 HRS</div>
              <div><strong>Evening Batch:</strong> 16:00 HRS – 19:30 HRS</div>
              <div className="text-slate-400">Open Monday through Saturday</div>
            </div>
          </div>
        </div>

        {/* Interactive Form & Map Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inquiry Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-extrabold text-[#001026] mb-1">
              Send an Official Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our secretarial team responds to athlete, school, and club inquiries within 24 to 48 hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-emerald-900 text-base">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you, {form.name}. Your message regarding "{form.subject || form.category}" has been registered with the General Secretary desk.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', category: 'General Inquiry', subject: '', message: '' });
                  }}
                  className="px-4 py-2 bg-[#006399] text-white text-xs font-bold rounded-lg shadow mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sumeet Sharma"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#006399]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#006399]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 98721 XXXXX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#006399]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Query Subject Category
                    </label>
                    <select
                      value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#006399] bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Tournament Enrollment">District Tournament Enrollment</option>
                      <option value="Club Affiliation">Unit / Club Affiliation</option>
                      <option value="Coaching Schemes">Coaching Clinic Admissions</option>
                      <option value="Press / Media">Press & Media Accreditations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Provide details about your query or swimmer information..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#006399]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#006399] hover:bg-[#004f7a] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Location & Arena Guide (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#001026] text-white rounded-2xl p-6 shadow-md space-y-4 border border-slate-800">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
                Venue Navigation Guide
              </span>
              <h4 className="font-extrabold text-lg text-white">
                How to Reach Lamini Municipal Pool
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located centrally in the Lamini sports complex of Pathankot, easily accessible via Dalhousie Road and Pathankot Junction railway station (approx. 3.5 km).
              </p>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-sky-300 font-semibold">
                  <Navigation className="w-4 h-4" />
                  <span>Nearest Transit Hubs:</span>
                </div>
                <div className="text-slate-300 pl-6 space-y-1">
                  <div>• Pathankot Cantt Station: 4.8 km</div>
                  <div>• Pathankot City Bus Stand: 2.2 km</div>
                  <div>• Airport Pathankot (IXP): 6.5 km</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Municipal+Swimming+Pool+Lamini+Pathankot"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#006399] text-white text-xs font-bold rounded-lg hover:bg-[#0077b6] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-[#001026]">Emergency & Security Protocol</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                First aid post and certified paramedic personnel are stationed on pool deck during all active morning/evening sessions and district championships.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
