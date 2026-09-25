import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { images } from '../data/site';
export function BulkQuote() {
  return <section id="bulk-quote" className="relative isolate overflow-hidden bg-navy-deep">
      <img src={images.bulk} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-navy-deep/80" />

      <div className="relative mx-auto max-w-shell px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Bulk & Corporate Procurement
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Have a Large Requirement?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Share your BOQ, material list or specifications and we will get back with the best
            quote.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-navy-deep transition-colors duration-150 ease-out hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Request Bulk Quotation
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>;
}