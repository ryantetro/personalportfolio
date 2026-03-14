import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, Clock, Github, Linkedin, Twitter, ExternalLink, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { contactInfo } from '../data/social';

const socialIconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      window.location.href = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
      setStatus('idle');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // #2 — Shared input classes with rounded-lg + focus ring
  const inputClasses = "w-full bg-white dark:bg-[#0f1117] border border-black/[0.1] dark:border-white/[0.1] rounded-lg px-4 py-3 text-[#1a1d27] dark:text-[#f1f5f9] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-[#9ca3af]";

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-[980px] mx-auto">
        {/* #10 — Break the section header pattern: Contact uses a bigger, more direct headline */}
        <ScrollReveal>
          <div className="section-label">05 &mdash; Contact</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9] mb-3 leading-tight">
            Let's build something<br /><span className="text-primary">together.</span>
          </h2>
          <p className="section-sub dark:text-[#9ca3af]">
            {contactInfo.message}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.1}>
          <div className="card dark:bg-[#161922] dark:border-white/[0.06]">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full py-3 inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'sending' && <><Loader2 size={14} className="animate-spin" /> Sending...</>}
                {status === 'sent' && <><CheckCircle size={14} /> Message sent!</>}
                {status === 'error' && <><AlertCircle size={14} /> Failed — try again</>}
                {status === 'idle' && <>Send message <Send size={14} /></>}
              </button>
            </form>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
          <div className="space-y-4">
            <div className="card-sm dark:bg-[#161922] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={14} className="text-primary" />
                <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Email</div>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-[#1a1d27] dark:text-[#f1f5f9] text-sm font-medium hover:text-primary transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="card-sm dark:bg-[#161922] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-primary" />
                <div className="font-mono text-[11px] uppercase tracking-wider text-primary">Availability</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-[#1a1d27] dark:text-[#f1f5f9] text-sm">{contactInfo.availability}</span>
              </div>
            </div>

            <div className="card-sm dark:bg-[#161922] dark:border-white/[0.06]">
              <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">Connect</div>
              <div className="flex flex-col gap-2">
                {contactInfo.social.map((s, i) => {
                  const Icon = socialIconMap[s.icon];
                  return (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-[13px] py-2 inline-flex items-center justify-center gap-2 dark:text-[#f1f5f9] dark:border-white/[0.12] dark:hover:bg-[#161922]"
                    >
                      {Icon && <Icon size={14} />}
                      {s.platform}
                      <ExternalLink size={11} className="text-[#9ca3af] ml-auto" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
