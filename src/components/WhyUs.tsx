import React from 'react';
import { advantages } from '../data/site';
import { Icon } from './Icon';
export function WhyUs() {
  return <section id="why-us" className="bg-navy-deep py-16 lg:py-20">
      <div className="mx-auto grid max-w-shell gap-10 px-5 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 lg:px-8">
        <div className="lg:py-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Why Choose SM Enterprises?
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            One Supplier.
            <br />
            Multiple Advantages.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            We focus on quality products, competitive pricing and reliable service for your
            business.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => <li key={item.title} className="bg-navy-deep px-6 py-8 text-center transition-colors duration-150 ease-out hover:bg-white/[0.04]">
              <Icon name={item.icon} className="mx-auto h-7 w-7 text-accent" />
              <h3 className="mt-4 text-sm font-bold text-white">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60">{item.text}</p>
            </li>)}
        </ul>
      </div>
    </section>;
}