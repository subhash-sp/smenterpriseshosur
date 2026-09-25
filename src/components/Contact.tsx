import React, { useState } from 'react';
import { CheckCircle2Icon, ClockIcon, Loader2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { contact } from '../data/site';
import { useScreenInit } from '../useScreenInit.js';
type Status = 'idle' | 'submitting' | 'success' | 'error';
const details = [{
  icon: PhoneIcon,
  label: 'Phone',
  value: contact.phone
}, {
  icon: MailIcon,
  label: 'Email',
  value: contact.email
}, {
  icon: MapPinIcon,
  label: 'Address',
  value: contact.address
}];
export function Contact() {
  const screenInit = useScreenInit();
  const [status, setStatus] = useState<Status>(screenInit.status as Status ?? 'idle');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!company.trim() || !email.trim() || !requirement.trim()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };
  return <section id="contact" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-shell gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact Us</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Tell Us What You Need.
            <br />
            We&apos;ll Quote It.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
            Send across your material list or requirement and our team will respond with pricing and
            availability.
          </p>

          <ul className="mt-10 space-y-6">
            {details.map(({
            icon: DetailIcon,
            label,
            value
          }) => <li key={label} className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft">
                  <DetailIcon className="h-4 w-4 text-accent" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{value}</p>
                </div>
              </li>)}
          </ul>
        </div>

        
      </div>
    </section>;
}