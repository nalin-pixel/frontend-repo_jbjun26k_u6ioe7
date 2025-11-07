import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a quick submission animation/state
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent! We will get back to you shortly.');
    }, 800);
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-slate-300">Questions about layouts, switches, or bulk orders? We’re here to help.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-slate-300">Name</label>
              <input type="text" required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300">Email</label>
              <input type="email" required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none" placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-slate-300">Message</label>
              <textarea rows={5} required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none" placeholder="Tell us about your dream build..." />
            </div>
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white shadow shadow-sky-500/25 transition hover:bg-sky-400 active:scale-95">
            <Send size={18} />
            Send message
          </button>
          {status && <p className="mt-3 text-sm text-emerald-300">{status}</p>}
        </form>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-300">Email us</p>
              <p className="font-semibold">hello@yourkeys.shop</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-sm text-slate-300">Call</p>
              <p className="font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
            Our studio is open Mon–Fri, 9am–6pm PST. We aim to reply within one business day.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
