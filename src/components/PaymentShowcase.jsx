import React from 'react';
import { ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

const PaymentShowcase = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Smooth, Secure Checkout</h2>
        <p className="mt-2 text-slate-300">Delightful micro-animations guide you from cart to confirmation.</p>
      </div>

      <div className="mt-10 grid items-center gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
          <div className="flex items-center justify-between rounded-xl bg-slate-900/60 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                <CreditCard size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-300">Order total</p>
                <p className="text-xl font-bold">$299.00</p>
              </div>
            </div>
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow shadow-emerald-500/30 transition">
              <span className="relative z-10">Pay now</span>
              <Sparkles size={16} className="relative z-10" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition group-hover:translate-x-0" />
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-sm text-slate-300">Real-time validation</p>
              <p className="text-slate-200">Inputs glow subtly as you type, with clear success and error states.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-sm text-slate-300">Micro-interactions</p>
              <p className="text-slate-200">Buttons ripple, cards lift, and confirmations sparkle on success.</p>
            </div>
          </div>
        </div>

        <ul className="grid gap-4">
          <li className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-semibold">Bank‑level security</p>
              <p className="text-slate-300">All transactions are encrypted and protected with industry best practices.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-semibold">One‑tap payments</p>
              <p className="text-slate-300">Save your details securely for instant checkout next time.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-semibold">Global cards supported</p>
              <p className="text-slate-300">We accept major credit and debit cards across regions.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PaymentShowcase;
