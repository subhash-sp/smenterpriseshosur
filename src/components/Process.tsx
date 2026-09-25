import React from 'react';
import { processSteps } from '../data/site';
import { Icon } from './Icon';
export function Process() {
  return <section id="process" className="bg-navy py-16 lg:py-20">
      <div className="mx-auto grid max-w-shell gap-12 px-5 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Our Process</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Simple Process.
            <br />
            Reliable Supply.
          </h2>
        </div>

        <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => <li key={step.step} className="relative flex flex-col items-center text-center">
              {i < processSteps.length - 1 ? <span aria-hidden="true" className="absolute left-[calc(50%+40px)] right-[calc(-50%+40px)] top-8 hidden border-t border-dashed border-white/25 lg:block" /> : null}
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-navy">
                <Icon name={step.icon} className="h-6 w-6 text-white" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy-deep">
                  {step.step}
                </span>
              </span>
              <h3 className="mt-5 max-w-[160px] text-sm font-bold leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-white/60">
                {step.text}
              </p>
            </li>)}
        </ol>
      </div>
    </section>;
}