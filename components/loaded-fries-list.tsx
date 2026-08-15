'use client'

import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

const loadedFries = [
  { name: 'Beef Loaded Fries', price: '₦6,500' },
  { name: 'Chicken Loaded Fries', price: '₦7,500' },
  { name: 'Sausage Loaded Fries', price: '₦6,000' },
  { name: 'Beef, Chicken & Sausage Loaded Fries (Combo)', price: '₦10,000' },
]

export function LoadedFriesList() {
  const { addItem } = useCart()

  return (
    <div className="mt-7 flex max-w-md flex-col gap-2.5">
      {loadedFries.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-3 border-b border-border pb-2.5">
          <span className="text-sm font-medium">{item.name}</span>
          <span className="flex shrink-0 items-center gap-2">
            <span className="whitespace-nowrap font-mono text-sm font-semibold text-primary">{item.price}</span>
            <button type="button" onClick={() => addItem(item.name, item.price)} aria-label={`Add ${item.name} to order`} className="cart-add-button">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </span>
        </div>
      ))}
    </div>
  )
}
