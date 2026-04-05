import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useLang } from '@/i18n/LangContext';

const EMAILJS_SERVICE_ID = 'service_0g5cjcr';
const EMAILJS_TEMPLATE_ID = 'template_dxj1bkc';
const EMAILJS_CONFIRMATION_TEMPLATE_ID = 'template_idmwp0l';
const EMAILJS_PUBLIC_KEY = 'VQAkqo4FdwATUAuHB';

export const CateringPage = () => {
  const { t } = useLang();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    const form = formRef.current;
    Promise.all([
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY),
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_CONFIRMATION_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY),
    ])
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = ['corporate', 'weddings', 'private'] as const;
  const steps = ['contact', 'plan', 'enjoy'] as const;

  return (
    <div className="pb-12">
      <title>{t.seo.catering.title}</title>
      <meta name="description" content={t.seo.catering.description} />
      <link rel="canonical" href="https://hungry-birds.no/catering" />
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-hb-gold mb-4">{t.catering.heading}</h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.catering.subtitle}</p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hb-gold text-center mb-10">{t.catering.services.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service} className="bg-white/5 border border-white/10 hover:border-hb-gold/30 rounded-2xl p-6 transition-colors">
              <div className="w-12 h-12 bg-hb-gold/10 rounded-xl flex items-center justify-center mb-6 text-hb-gold">
                {service === 'corporate' && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {service === 'weddings' && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
                {service === 'private' && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.catering.services.items[service].title}</h3>
              <p className="text-white/60">{t.catering.services.items[service].description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hb-gold text-center mb-10">{t.catering.howItWorks.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={step} className="text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-hb-navy border-2 border-hb-gold text-hb-gold flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.catering.howItWorks.steps[step].title}</h3>
              <p className="text-white/60">{t.catering.howItWorks.steps[step].description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hb-gold mb-6">{t.catering.menuInspiration.heading}</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-lg">{t.catering.menuInspiration.description}</p>
          <Link to="/menu" className="inline-block px-8 py-3 border-2 border-hb-gold bg-hb-gold text-hb-navy hover:bg-transparent hover:text-hb-gold rounded-full font-bold transition-all">
            {t.catering.menuInspiration.cta}
          </Link>
        </div>
      </section>

      <section className="py-12 max-w-3xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-hb-gold mb-4 text-center">{t.catering.form.heading}</h2>
          <p className="text-white/60 mb-8 text-center">{t.catering.form.subtitle}</p>
          
          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-8 rounded-xl text-center">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-medium">{t.catering.form.success}</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-center">
                  <p>{t.catering.form.error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="name">{t.catering.form.name}</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="email">{t.catering.form.email}</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="phone">{t.catering.form.phone}</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="eventDate">{t.catering.form.eventDate}</label>
                  <input required type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="guests">{t.catering.form.guests}</label>
                  <input required type="number" min="1" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="eventType">{t.catering.form.eventType}</label>
                  <select required id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors">
                    <option value="" disabled className="bg-gray-900"></option>
                    <option value="corporate" className="bg-gray-900">{t.catering.form.eventTypes.corporate}</option>
                    <option value="wedding" className="bg-gray-900">{t.catering.form.eventTypes.wedding}</option>
                    <option value="birthday" className="bg-gray-900">{t.catering.form.eventTypes.birthday}</option>
                    <option value="other" className="bg-gray-900">{t.catering.form.eventTypes.other}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="message">{t.catering.form.message}</label>
                <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-black/40 border border-white/10 text-white focus:border-hb-gold focus:outline-none rounded-lg p-3 transition-colors resize-none"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" disabled={status === 'sending'} className="w-full px-8 py-4 border-2 border-hb-gold bg-hb-gold text-hb-navy hover:bg-transparent hover:text-hb-gold rounded-full font-bold transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' ? t.catering.form.sending : t.catering.form.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
