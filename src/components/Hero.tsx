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
 return <section
  id="home"
  className="relative isolate overflow-hidden bg-navy-deep pt-[72px]"
>
  <img
    src={images.hero}
    alt="Electrical and industrial supplies at SM Enterprises in Hosur"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/10 lg:block z-10" />

  <div className="relative z-20 mx-auto max-w-shell px-5 pb-10 pt-14 lg:px-8 lg:pb-0 lg:pt-24">

    <div className="lg:max-w-[560px]">

      <motion.p
        {...rise(0)}
        className="text-xs font-bold uppercase tracking-[0.18em] text-gold"
      >
        Your Partner in Industrial Procurement
      </motion.p>

      <motion.h1
        {...rise(0.05)}
        className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[56px]"
      >
        Reliable Supplies.
        <br />
        Stronger Operations.
      </motion.h1>

      <motion.p
        {...rise(0.1)}
        className="mt-5 max-w-md text-base leading-relaxed text-white/70"
      >
        We supply all kinds of Electrical and Hardware materials for large scale companies.
      </motion.p>

      {/* buttons... */}

    </div>
  </div>

  {/* highlights... */}

</section>;
