'use client'

import { Dialog } from '@base-ui/react/dialog'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

const WHATSAPP_NUMBER = '2347078787475'

function buildOrderMessage(items: { name: string; price: string; qty: number }[]) {
  const lines = items.map((item) => `- ${item.qty}x ${item.name}${item.price ? ` (${item.price})` : ''}`)
  return `Hi! I'd like to order:\n${lines.join('\n')}\n\nPlease confirm the total. Thank you!`
}

export function CartWidget() {
  const { items, count, removeItem, updateQty, clear } = useCart()
  const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(items))}`
  const genericUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order.")}`

  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label={count > 0 ? `Open order, ${count} item${count === 1 ? '' : 's'}` : 'Open order'}
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
      >
        <ShoppingBag className="h-6 w-6" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-foreground text-xs font-bold text-background">
            {count}
          </span>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-foreground/40 transition-opacity duration-200 data-closed:opacity-0 data-open:opacity-100" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-border bg-card p-7 text-card-foreground shadow-2xl outline-none transition-all duration-200 data-closed:scale-95 data-closed:opacity-0 data-open:scale-100 data-open:opacity-100">
          <Dialog.Close aria-label="Close" className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <X className="h-4 w-4" />
          </Dialog.Close>
          <p className="eyebrow">Your order</p>
          <Dialog.Title className="mt-2 text-3xl font-semibold tracking-tight">
            {items.length > 0 ? 'Ready to send?' : 'Nothing added yet'}
          </Dialog.Title>

          {items.length > 0 ? (
            <>
              <div className="mt-6 flex max-h-72 flex-col gap-4 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-3 border-b border-border pb-4">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      {item.price && <p className="mt-0.5 font-mono text-xs text-primary">{item.price}</p>}
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <button type="button" onClick={() => updateQty(item.name, item.qty - 1)} aria-label={`Decrease ${item.name} quantity`} className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-4 text-center text-sm font-semibold">{item.qty}</span>
                      <button type="button" onClick={() => updateQty(item.name, item.qty + 1)} aria-label={`Increase ${item.name} quantity`} className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground">
                        <Plus className="h-3 w-3" />
                      </button>
                      <button type="button" onClick={() => removeItem(item.name)} aria-label={`Remove ${item.name}`} className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">Prices shown are per item — some vary by size or add-ons. We&apos;ll confirm your total on WhatsApp.</p>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={clear} className="rounded-full border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-foreground">Clear</button>
                <a href={orderUrl} target="_blank" rel="noreferrer" className="whatsapp-button flex-1">Send order <span aria-hidden="true">↗</span></a>
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">Tap the <Plus className="inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" /> next to any menu item to add it here, then send everything to us in one message.</p>
              <a href={genericUrl} target="_blank" rel="noreferrer" className="whatsapp-button mt-6">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
            </>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
