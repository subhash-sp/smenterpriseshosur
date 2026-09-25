import React from 'react';
import { productCategories } from '../data/site';
import { Icon } from './Icon';
export function ProductRange() {
  return <section id="products" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Our Product Range
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Everything You Need.
            <br />
            One Reliable Supplier.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            A comprehensive range of electrical, hardware and industrial materials for every
            business need.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {productCategories.map((cat) => <li key={cat.name} className="group flex flex-col">
              <div className="relative">
                <img src={cat.image} alt={cat.name} className="aspect-square w-full rounded-lg object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]" />
                <span className="absolute -bottom-5 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent ring-4 ring-slate-50">
                  <Icon name={cat.icon} className="h-4 w-4 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-sm font-bold leading-snug text-ink">{cat.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{cat.blurb}</p>
            </li>)}
        </ul>
      </div>
    </section>;
}