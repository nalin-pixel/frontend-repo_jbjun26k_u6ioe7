import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import PaymentShowcase from './components/PaymentShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <main>
        <Products />
        <section id="checkout" className="bg-gradient-to-b from-slate-950 to-slate-900/60">
          <PaymentShowcase />
        </section>
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} KeyLabs — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
