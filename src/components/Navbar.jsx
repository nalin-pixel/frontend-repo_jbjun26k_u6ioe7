import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-white font-bold">K</span>
          <span className="text-sm font-semibold tracking-wide">KeyLabs</span>
        </a>
        <nav className="hidden items-center gap-6 text-slate-200 sm:flex">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#checkout" className="hover:text-white">Checkout</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">
          <ShoppingBag size={16} />
          Cart
        </button>
      </div>
    </header>
  );
};

export default Navbar;
