import React from 'react';
import { Building2Icon, HandshakeIcon, ShieldCheckIcon } from 'lucide-react';
import { images } from '../data/site';
const pillars = [{
  icon: Building2Icon,
  label: 'Serving Businesses'
}, {
  icon: HandshakeIcon,
  label: 'Wide Range of Products'
}, {
  icon: ShieldCheckIcon,
  label: 'Reliable & Trusted'
}];
export function About() {
  return <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-shell items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <img src={images.warehouse} alt="Warehouse aisle with racked inventory and a forklift" className="h-64 w-full rounded-lg object-cover sm:h-80 lg:h-[420px]" />

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            About SM Enterprises
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Your Reliable Industrial
            <br className="hidden sm:block" /> Supply Partner
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            SM Enterprises provides a comprehensive range of electrical, hardware and industrial
            materials to businesses, contractors and industries.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            Our focus is on reliable sourcing, competitive pricing and timely delivery to support
            your operations.
          </p>

          <ul className="mt-10 grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-8">
            {pillars.map(({
            icon: PillarIcon,
            label
          }) => <li key={label} className="flex flex-col items-center px-2 text-center">
                <PillarIcon className="h-7 w-7 text-navy" strokeWidth={1.6} aria-hidden="true" />
                <span className="mt-3 text-sm font-bold leading-snug text-ink">{label}</span>
              </li>)}
          </ul>
        </div>
      </div>
    </section>;
}