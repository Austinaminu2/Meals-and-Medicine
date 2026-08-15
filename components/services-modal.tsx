'use client'

import { Dialog } from '@base-ui/react/dialog'
import { Salad, Stethoscope, X } from 'lucide-react'

const WHATSAPP_NUMBER = '2347078787475'
const inquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to learn more about your medical services.")}`

const services = [
  { icon: Stethoscope, title: 'Consultation', description: 'One-on-one sessions to talk through your health goals and get guidance that fits your life.' },
  { icon: Salad, title: 'Dietary Plans', description: 'Custom meal plans built around your body, your goals, and what you actually like to eat.' },
]

export function ServicesModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="nav-link">Services</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-foreground/40 transition-opacity duration-200 data-closed:opacity-0 data-open:opacity-100" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-border bg-card p-7 text-card-foreground shadow-2xl outline-none transition-all duration-200 data-closed:scale-95 data-closed:opacity-0 data-open:scale-100 data-open:opacity-100">
          <Dialog.Close aria-label="Close" className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <X className="h-4 w-4" />
          </Dialog.Close>
          <p className="eyebrow">Beyond the plate</p>
          <Dialog.Title className="mt-2 text-3xl font-semibold tracking-tight">Medical services, too.</Dialog.Title>
          <Dialog.Description className="mt-3 text-sm leading-6 text-muted-foreground">
            Meals & Medicine also offers real health support — because nourishing today means healing tomorrow.
          </Dialog.Description>
          <div className="mt-6 flex flex-col gap-4">
            {services.map((service) => (
              <div key={service.title} className="flex items-start gap-4 rounded-2xl border border-border p-4">
                <service.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Have something specific in mind? Ask us on WhatsApp.</p>
          <a href={inquiryUrl} target="_blank" rel="noreferrer" className="whatsapp-button mt-4 w-full">Book on WhatsApp <span aria-hidden="true">↗</span></a>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
