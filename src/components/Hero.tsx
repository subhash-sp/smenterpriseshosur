import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { heroHighlights, images } from '../data/site';
import { Icon } from './Icon';
export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? {} : {
      opacity: 0,
      y: 16
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.28,
      delay,
      ease: [0.23, 1, 0.32, 1] as const
    }
  });
  return <section id="home" className="relative isolate overflow-hidden bg-navy-deep pt-[72px]">
      <img src={images.hero} alt="" className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover lg:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/10 lg:block" />

      <div className="relative mx-auto max-w-shell px-5 pb-10 pt-14 lg:px-8 lg:pb-0 lg:pt-24">
        <div className="lg:max-w-[560px]">
          <motion.p {...rise(0)} className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Your Partner in Industrial Procurement
          </motion.p>
          <motion.h1 {...rise(0.05)} className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[56px]">
            Reliable Supplies.
            <br />
            Stronger Operations.
          </motion.h1>
          <motion.p {...rise(0.1)} className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            We supply all kinds of Electrical and Hardware materials for large scale companies.
          </motion.p>
          <motion.div {...rise(0.15)} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-navy-deep transition-colors duration-150 ease-out hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Request a Quote
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#products" className="inline-flex items-center rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
              Explore Products
            </a>
          </motion.div>
        </div>

        <div className="mt-10 lg:hidden">
          <img src={images.hero} alt="Electrical supplies including cable drums, breakers, enclosures and wire coils" className="h-56 w-full rounded-lg object-cover sm:h-72" />
        </div>
      </div>

      <div className="relative mt-10 border-t border-white/10 lg:mt-20">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-x-8 gap-y-7 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {heroHighlights.map((item) => <div key={item.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25">
                <Icon name={item.icon} className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{item.text}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}