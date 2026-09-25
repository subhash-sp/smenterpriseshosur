import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { contact, navLinks, productCategories } from '../data/site';
export function Footer() {
  return <footer className="bg-navy-deep">
      <div className="mx-auto grid max-w-shell gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold leading-none tracking-tight text-white">
              S<span className="text-gold">M</span>
            </span>
            <span className="border-l border-white/25 pl-2 text-[11px] font-semibold uppercase leading-none tracking-[0.22em] text-white/85">
              Enterprises
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Supplying electrical, hardware and industrial materials to businesses, contractors and
            industries.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold text-white">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition-colors duration-150 ease-out hover:text-gold">
                  {link.label}
                </a>
              </li>)}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-white">Products</h2>
          <ul className="mt-4 space-y-2.5">
            {productCategories.map((cat) => <li key={cat.name}>
                <a href="#products" className="text-sm text-white/60 transition-colors duration-150 ease-out hover:text-gold">
                  {cat.name}
                </a>
              </li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Get in Touch</h2>
          <ul className="mt-4 space-y-3.5 text-sm text-white/60">
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} SM Enterprises. All rights reserved.</p>
          <p>Electrical · Hardware · Industrial Supply</p>
        </div>
      </div>
    </footer>;
}