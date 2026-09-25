import React from 'react';
import { industries } from '../data/site';
export function Industries() {
  return <section id="industries" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Industries We Serve
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Supporting Businesses Across Industries
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {industries.map((item) => <li key={item.name} className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-200 ease-out hover:shadow-md">
              <img src={item.image} alt={item.name} className="h-40 w-full object-cover xl:h-32" />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold leading-snug text-ink">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{item.text}</p>
              </div>
            </li>)}
        </ul>
      </div>
    </section>;
}