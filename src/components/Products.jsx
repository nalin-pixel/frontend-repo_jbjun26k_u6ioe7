import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nova65 - Aluminum Case',
    price: 219,
    rating: 5,
    colors: ['#94a3b8', '#0ea5e9', '#f59e0b'],
    image: null,
  },
  {
    id: 2,
    name: 'Aurora75 - Gasket Mount',
    price: 299,
    rating: 5,
    colors: ['#22c55e', '#60a5fa', '#ef4444'],
    image: null,
  },
  {
    id: 3,
    name: 'Pixel40 - Compact',
    price: 159,
    rating: 4,
    colors: ['#f472b6', '#a78bfa', '#38bdf8'],
    image: null,
  },
];

const Products = () => {
  return (
    <section id="products" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Keyboards</h2>
          <p className="mt-2 text-slate-300">Choose your layout, switches, and colors.</p>
        </div>
        <a href="#contact" className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10 sm:block">
          Need help? Contact us
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur transition hover:shadow-lg hover:shadow-sky-500/10">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,.25),transparent_60%)]" />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h3 className="font-semibold tracking-tight">{p.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: p.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {p.colors.map((c, i) => (
                    <span
                      key={i}
                      className="inline-block h-4 w-4 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-300">Starting at</p>
                <p className="text-xl font-bold">${p.price}</p>
              </div>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2 font-semibold text-white shadow shadow-sky-500/25 transition group-hover:bg-sky-400">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
