import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Printer, 
  Download, 
  User, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_EVENTS = [
  { id: '50m_free', label: '50m Freestyle Sprint' },
  { id: '100m_free', label: '100m Freestyle' },
  { id: '50m_breast', label: '50m Breaststroke' },
  { id: '100m_breast', label: '100m Breaststroke' },
  { id: '50m_fly', label: '50m Butterfly' },
  { id: '100m_back', label: '100m Backstroke' },
  { id: '200m_im', label: '200m Individual Medley (IM)' },
  { id: 'relay_4x50', label: '4x50m Club Relay (Nomination)' }
];

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    swimmerName: '',
    dob: '2012-05-14',
    gender: 'Boys',
    division: 'Sub-Junior',
    club: 'Lamini Swimming Center',
    coachName: '',
    phone: '',
    email: '',
    aadhaarNo: '',
    psaUid: '',
    selectedEvents: ['50m_free'],
    medicalAccepted: true
  });

  const [submittedPass, setSubmittedPass] = useState<{
    regId: string;
    date: string;
    swimmerName: string;
    division: string;
    gender: string;
    club: string;
    phone: string;
    events: string[];
  } | null>(null);

  if (!isOpen) return null;

  const handleEventToggle = (eventId: string) => {
    if (formData.selectedEvents.includes(eventId)) {
      if (formData.selectedEvents.length === 1) return; // keep at least 1
      setFormData({
        ...formData,
        selectedEvents: formData.selectedEvents.filter(e => e !== eventId)
      });
    } else {
      if (formData.selectedEvents.length >= 4) {
        alert('A maximum of 4 individual events can be entered as per PDSA tournament bylaws.');
        return;
      }
      setFormData({
        ...formData,
        selectedEvents: [...formData.selectedEvents, eventId]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.swimmerName.trim()) {
      alert('Please enter swimmer full name.');
      return;
    }
    if (!formData.phone.trim()) {
      alert('Please enter guardian / coach phone number.');
      return;
    }

    const regNumber = `PDSA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedPass({
      regId: regNumber,
      date: new Date().toLocaleDateString('en-GB'),
      swimmerName: formData.swimmerName,
      division: formData.division,
      gender: formData.gender,
      club: formData.club,
      phone: formData.phone,
      events: formData.selectedEvents.map(
        id => AVAILABLE_EVENTS.find(e => e.id === id)?.label || id
      )
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-scaleUp">
        
        {/* Header */}
        <div className="bg-[#0b2545] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#006399] flex items-center justify-center text-white font-bold">
              <ShieldCheck className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">District Swimming Championship 2026-27</h3>
              <p className="text-xs text-sky-200">Official Swimmer Entry & Gate Pass Portal</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedPass ? (
          /* Confirmation / Entry Pass Slip */
          <div className="p-6 space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <h4 className="font-bold text-emerald-900 text-sm">Registration Successfully Confirmed!</h4>
                <p className="text-xs text-emerald-700">
                  Swimmer gate pass generated. Please carry a digital or physical copy to the marshaling area on 09 OCT at Municipal Pool Lamini.
                </p>
              </div>
            </div>

            {/* Official Entry Pass Card */}
            <div className="border-2 border-dashed border-[#006399] rounded-xl p-5 bg-[#faf8ff] space-y-4">
              <div className="flex items-start justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#006399] uppercase block">
                    Pathankot District Swimming Association
                  </span>
                  <h4 className="font-extrabold text-lg text-[#001026]">Official Athlete Meet Pass</h4>
                  <p className="text-xs text-slate-500">Reg: DIC/PTK/16 of 2026-27 • Lamini Center</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Registration Code</span>
                  <span className="font-mono font-bold text-base text-[#006399] bg-white px-2 py-0.5 rounded border border-sky-200 inline-block">
                    {submittedPass.regId}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Athlete Name:</span>
                  <strong className="text-slate-800 text-sm font-bold">{submittedPass.swimmerName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Division & Gender:</span>
                  <strong className="text-slate-800 font-semibold">{submittedPass.division} ({submittedPass.gender})</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Affiliated Club:</span>
                  <strong className="text-slate-800 font-semibold">{submittedPass.club}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Meet Date:</span>
                  <strong className="text-[#006399] font-bold">09 OCT, Friday (08:00 HRS)</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Reporting Venue:</span>
                  <strong className="text-slate-800 font-semibold">Municipal Pool Lamini</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Contact Phone:</span>
                  <strong className="text-slate-800 font-semibold">{submittedPass.phone}</strong>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-3">
                <span className="text-xs font-semibold text-slate-700 block mb-1">
                  Enrolled Events ({submittedPass.events.length}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {submittedPass.events.map((evt, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-[#eaedff] text-[#006399] rounded text-xs font-medium border border-sky-200"
                    >
                      {evt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded border border-slate-200">
                ⚠️ Swimmers must report at the clerk of course 30 minutes before heat start. Original Aadhaar card / School ID is mandatory for verification.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Pass</span>
              </button>
              <button
                type="button"
                onClick={() => setSubmittedPass(null)}
                className="px-4 py-2 border border-[#006399] text-[#006399] rounded-lg text-sm font-semibold hover:bg-sky-50"
              >
                New Entry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 bg-[#0b2545] text-white rounded-lg text-sm font-semibold hover:bg-[#006399]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="bg-sky-50/70 border border-sky-100 rounded-lg p-3 text-xs text-sky-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#006399] shrink-0" />
              <span>
                Affiliated with Punjab Swimming Association & SFI. Open to all registered clubs, academies, and student athletes in Pathankot.
              </span>
            </div>

            {/* Row 1: Swimmer Name & DOB */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Swimmer Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Aarav Mahajan"
                  value={formData.swimmerName}
                  onChange={e => setFormData({ ...formData, swimmerName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date of Birth *
                </label>
                <input 
                  type="date" 
                  required
                  value={formData.dob}
                  onChange={e => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399]"
                />
              </div>
            </div>

            {/* Row 2: Gender, Division & Club */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gender *
                </label>
                <select 
                  value={formData.gender}
                  onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399] bg-white"
                >
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Age Division *
                </label>
                <select 
                  value={formData.division}
                  onChange={e => setFormData({ ...formData, division: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399] bg-white"
                >
                  <option value="Sub-Junior">Sub-Junior (Under 12)</option>
                  <option value="Junior">Junior (Under 17)</option>
                  <option value="Senior">Senior (18 & Above)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Affiliated Club / School *
                </label>
                <select 
                  value={formData.club}
                  onChange={e => setFormData({ ...formData, club: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399] bg-white"
                >
                  <option value="Lamini Swimming Center">Lamini Swimming Center</option>
                  <option value="Pathankot Swim Club">Pathankot Swim Club</option>
                  <option value="Model Town Aquatics">Model Town Aquatics</option>
                  <option value="St. Paul's Academy">St. Paul's Academy</option>
                  <option value="DAV Public School">DAV Public School</option>
                  <option value="Independent / District Club">Independent / Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Guardian/Coach Phone & Aadhaar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Coach / Guardian Phone *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98721 XXXXX"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  SFI UID / PSA Registration (Optional)
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. SFI-PB-2026-904"
                  value={formData.psaUid}
                  onChange={e => setFormData({ ...formData, psaUid: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006399]"
                />
              </div>
            </div>

            {/* Event Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Select Competitive Events (Max 4 events) *
                </label>
                <span className="text-[11px] text-[#006399] font-medium">
                  {formData.selectedEvents.length} selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-2 border border-slate-200 rounded-lg bg-slate-50/50">
                {AVAILABLE_EVENTS.map(evt => {
                  const isChecked = formData.selectedEvents.includes(evt.id);
                  return (
                    <label 
                      key={evt.id}
                      className={`flex items-center gap-2 p-2 rounded border cursor-pointer transition-colors text-xs ${
                        isChecked 
                          ? 'bg-sky-50 border-[#006399] text-[#001026] font-semibold' 
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleEventToggle(evt.id)}
                        className="rounded text-[#006399] focus:ring-[#006399]"
                      />
                      <span>{evt.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Verification Check */}
            <label className="flex items-start gap-2 cursor-pointer pt-1">
              <input 
                type="checkbox" 
                required
                checked={formData.medicalAccepted}
                onChange={e => setFormData({ ...formData, medicalAccepted: e.target.checked })}
                className="mt-0.5 rounded text-[#006399]"
              />
              <span className="text-xs text-slate-600">
                I hereby declare that the swimmer is medically fit to take part in competitive aquatic races and will follow the rules and code of conduct formulated by PDSA.
              </span>
            </label>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-5 py-2 bg-[#006399] hover:bg-[#004f7a] text-white rounded-lg text-sm font-semibold shadow-md transition-colors"
              >
                Confirm & Generate Gate Pass
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
