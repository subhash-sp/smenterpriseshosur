import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { navLinks } from '../data/site';
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out ${scrolled ? 'bg-navy-deep/95 shadow-lg shadow-navy-deep/20 backdrop-blur' : 'bg-navy-deep'}`}>
      <div className="mx-auto flex h-[72px] max-w-shell items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="SM Enterprises home">
          <span className="text-2xl font-extrabold leading-none tracking-tight text-white">
            S<span className="text-gold">M</span>
          </span>
          <span className="border-l border-white/25 pl-2 text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/85">
            Enterprises
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-150 ease-out hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
              {link.label}
            </a>)}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep transition-colors duration-150 ease-out hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-block">
            Request a Quote
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-md p-2 text-white transition-colors duration-150 ease-out hover:bg-white/10 lg:hidden">
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-navy-deep px-5 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-base font-medium text-white/85 transition-colors duration-150 ease-out hover:text-gold">
                  {link.label}
                </a>
              </li>)}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 block rounded-md bg-gold px-5 py-3 text-center text-sm font-bold text-navy-deep sm:hidden">
            Request a Quote
          </a>
        </nav> : null}
    </header>;
}