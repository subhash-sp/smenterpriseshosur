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
          y: 20,
        },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.4,
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
          DESKTOP HERO IMAGE
          ========================================================= */}

      <img
        src={images.hero}
        alt="Electrical and industrial supplies at SM Enterprises in Hosur"
        className="absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover lg:block"
      />

      {/* Desktop overlay */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20 lg:block" />

      {/* =========================================================
          MAIN HERO CONTENT
          ========================================================= */}

      <div className="relative z-10 mx-auto max-w-shell px-5 pt-12 sm:px-8 lg:min-h-[620px] lg:px-8 lg:pt-24">
        <div className="max-w-xl lg:max-w-[700px]">

          {/* Eyebrow */}
          <motion.p
            {...rise(0)}
            className="text-xs font-bold uppercase tracking-[0.18em] text-gold sm:text-sm"
          >
            Your Partner in Industrial Procurement
          </motion.p>

          {/* Main heading */}
          <motion.h1
            {...rise(0.05)}
            className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[64px]"
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

          {/* CTA buttons */}
          <motion.div
            {...rise(0.15)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-lg bg-gold px-7 text-base font-bold text-navy-deep transition-all duration-200 hover:opacity-90"
            >
              Request a Quote
              <ArrowRight
                size={20}
                strokeWidth={2.5}
              />
            </a>

            <a
              href="#products"
              className="inline-flex min-h-[54px] items-center justify-center rounded-lg border border-white/35 px-7 text-base font-bold text-white transition-all duration-200 hover:bg-white/10"
            >
              Explore Products
            </a>
          </motion.div>
        </div>

        {/* =======================================================
            MOBILE IMAGE
            ======================================================= */}

        <motion.div
          {...rise(0.2)}
          className="mt-10 lg:hidden"
        >
          <img
            src={images.hero}
            alt="Electrical and industrial supplies at SM Enterprises in Hosur"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      {/* =========================================================
          FEATURE HIGHLIGHTS
          ========================================================= */}

      <div className="relative z-20 border-t border-white/10">
        <div className="mx-auto max-w-shell">

          {/* ================= DESKTOP ================= */}

          <div className="hidden grid-cols-4 lg:grid">

            {/* Wide Range */}
            <div className="flex items-center gap-4 px-8 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                <Layers3
                  size={21}
                  strokeWidth={1.7}
                />
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
            <div className="flex items-center gap-4 border-l border-white/10 px-8 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                <Boxes
                  size={21}
                  strokeWidth={1.7}
                />
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
            <div className="flex items-center gap-4 border-l border-white/10 px-8 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                <BadgeCheck
                  size={21}
                  strokeWidth={1.7}
                />
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
            <div className="flex items-center gap-4 border-l border-white/10 px-8 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                <Truck
                  size={21}
                  strokeWidth={1.7}
                />
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

          {/* ================= MOBILE ================= */}

          <div className="px-5 lg:hidden">

            {/* Wide Range */}
            <div className="flex items-center gap-4 border-b border-white/10 py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                <Layers3 size={21} />
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
                <Boxes size={21} />
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
                <BadgeCheck size={21} />
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
                <Truck size={21} />
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
      </div>
    </section>
  );
}
