import React from 'react';
import { trustPoints } from '../data/site';
import { Icon } from './Icon';
export function TrustBar() {
  return <section aria-label="Our commitments" className="border-y border-slate-200 bg-white">
      <ul className="mx-auto grid max-w-shell grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((item) => <li key={item.title} className="flex items-center gap-3 bg-white px-6 py-7">
            <Icon name={item.icon} className="h-7 w-7 shrink-0 text-navy" />
            <div>
              <p className="text-sm font-bold text-ink">{item.title}</p>
              <p className="mt-0.5 text-xs text-slate-500">{item.text}</p>
            </div>
          </li>)}
      </ul>
    </section>;
}