import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Layers3,
  Boxes,
  BadgeCheck,
  Truck,
} from 'lucide-react';
import { images } from '../data/site';

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
      duration: 0.35,
      delay,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  });

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy-deep"
    >
      {/* =========================================================
          DESKTOP HERO BACKGROUND IMAGE
          ========================================================= */}

      <img
        src={images.hero}
        alt="Electrical and industrial supplies at SM Enterprises in Hosur"
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
      />

      {/* Desktop dark overlay */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/20 lg:block" />

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}

      <div className="relative z-20 mx-auto max-w-shell px-5 pt-16 sm:px-8 lg:min-h-[700px] lg:px-8 lg:pt-28">
        <div className="max-w-xl lg:max-w-[680px]">
          {/* Eyebrow */}
          <motion.p
            {...rise(0)}
            className="text-xs font-bold uppercase tracking-[0.18em] text-gold sm:text-sm"
          >
            Your Partner in Industrial Procurement
          </motion.p>

          {/* Heading */}
          <motion.h1
            {...rise(0.05)}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]"
          >
            Reliable Supplies.
            <br />
            Stronger Operations.
          </motion.h1>

          {/* Description */}
          <motion.p
            {...rise(0.1)}
            className="mt-6 max-w-[560px] text-base leading-relaxed text-white/75 sm:text-lg"
          >
            We supply all kinds of Electrical and Hardware materials for large
            scale companies.
          </motion.p>

          {/* =====================================================
              CTA BUTTONS
              ===================================================== */}

          <motion.div
            {...rise(0.15)}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-gold px-7 text-base font-bold text-navy-deep transition hover:opacity-90"
            >
              Request a Quote
              <ArrowRight size={20} strokeWidth={2.5} />
            </a>

            <a
              href="#products"
              className="inline-flex min-h-[56px] items-center justify-center rounded-xl border border-white/35 px-7 text-base font-bold text-white transition hover:bg-white/10"
            >
              Explore Products
            </a>
          </motion.div>
        </div>

        {/* =========================================================
            MOBILE IMAGE
            ========================================================= */}

        <motion.div
          {...rise(0.2)}
          className="mt-12 lg:hidden"
        >
          <img
            src={images.hero}
            alt="Electrical and industrial supplies at SM Enterprises in Hosur"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      {/* =========================================================
          DESKTOP HIGHLIGHTS
          ========================================================= */}

      <div className="relative z-20 hidden border-t border-white/10 lg:block">
        <div className="mx-auto grid max-w-shell grid-cols-4 px-8">
          {/* Wide Range */}
          <div className="flex items-center gap-4 py-7 pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Layers3 size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Wide Range
              </h2>
              <p className="mt-1 text-sm text-white/60">
                All Electrical &amp; Hardware Products
              </p>
            </div>
          </div>

          {/* Bulk Supply */}
          <div className="flex items-center gap-4 border-l border-white/10 py-7 pl-6 pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Boxes size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Bulk Supply
              </h2>
              <p className="mt-1 text-sm text-white/60">
                For Projects &amp; Large Scale Needs
              </p>
            </div>
          </div>

          {/* Reliable Quality */}
          <div className="flex items-center gap-4 border-l border-white/10 py-7 pl-6 pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <BadgeCheck size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Reliable Quality
              </h2>
              <p className="mt-1 text-sm text-white/60">
                Products from Trusted Manufacturers
              </p>
            </div>
          </div>

          {/* Timely Delivery */}
          <div className="flex items-center gap-4 border-l border-white/10 py-7 pl-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Truck size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Timely Delivery
              </h2>
              <p className="mt-1 text-sm text-white/60">
                On-time Supply, Every Time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE HIGHLIGHTS
          ========================================================= */}

      <div className="relative z-20 mt-12 border-t border-white/10 lg:hidden">
        <div className="mx-auto max-w-shell px-5">
          {/* Wide Range */}
          <div className="flex items-center gap-4 border-b border-white/10 py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Layers3 size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Wide Range
              </h2>
              <p className="mt-1 text-sm text-white/60">
                All Electrical &amp; Hardware Products
              </p>
            </div>
          </div>

          {/* Bulk Supply */}
          <div className="flex items-center gap-4 border-b border-white/10 py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Boxes size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Bulk Supply
              </h2>
              <p className="mt-1 text-sm text-white/60">
                For Projects &amp; Large Scale Needs
              </p>
            </div>
          </div>

          {/* Reliable Quality */}
          <div className="flex items-center gap-4 border-b border-white/10 py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <BadgeCheck size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Reliable Quality
              </h2>
              <p className="mt-1 text-sm text-white/60">
                Products from Trusted Manufacturers
              </p>
            </div>
          </div>

          {/* Timely Delivery */}
          <div className="flex items-center gap-4 py-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Truck size={21} strokeWidth={1.7} />
            </div>

            <div>
              <h2 className="text-base font-bold text-white">
                Timely Delivery
              </h2>
              <p className="mt-1 text-sm text-white/60">
                On-time Supply, Every Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
