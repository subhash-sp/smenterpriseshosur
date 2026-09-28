import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { heroHighlights, images } from '../data/site';
import { Icon } from './Icon';

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce
      ? {}
      : {
          opacity: 0,
          y: 16,
        },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.28,
      delay,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy-deep pt-[72px] lg:min-h-[620px]"
    >
      {/* Background image */}
      <img
        src={images.hero}
        alt="Electrical and industrial supplies at SM Enterprises in Hosur"
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      />

      {/* Desktop dark gradient */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/20 lg:block" />

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-shell px-5 pb-10 pt-14 lg:px-8 lg:pb-0 lg:pt-28">
        <div className="lg:max-w-[680px]">
          <motion.p
            {...rise(0)}
            className="text-xs font-bold uppercase tracking-[0.18em] text-gold"
          >
            Your Partner in Industrial Procurement
          </motion.p>

          <motion.h1
            {...rise(0.05)}
            className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[56px]"
          >
            Reliable Supplies.
            <br />
            Stronger Operations.
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
          >
            We supply all kinds of Electrical and Hardware materials for large
            scale companies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...rise(0.15)}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gold px-7 py-4 text-base font-bold text-navy-deep transition hover:opacity-90"
            >
              Request a Quote
              <ArrowRightIcon size={20} />
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Explore Products
            </a>
          </motion.div>
        </div>

        {/* Mobile image */}
        <div className="mt-10 lg:hidden">
          <img
            src={images.hero}
            alt="Electrical and industrial supplies at SM Enterprises in Hosur"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Bottom highlights */}
      <div className="relative z-20 border-t border-white/10 bg-navy-deep/80">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-6 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {heroHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              {...rise(0.2 + index * 0.05)}
              className="flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                <Icon name={item.icon} size={20} />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
