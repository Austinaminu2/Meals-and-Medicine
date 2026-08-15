'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export type CartItem = {
  name: string
  price: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  addItem: (name: string, price: string) => void
  removeItem: (name: string) => void
  updateQty: (name: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((name: string, price: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.name === name)
      if (existing) {
        return prev.map((item) => (item.name === name ? { ...item, qty: item.qty + 1 } : item))
      }
      return [...prev, { name, price, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((item) => item.name !== name))
  }, [])

  const updateQty = useCallback((name: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((item) => item.name !== name)
      return prev.map((item) => (item.name === name ? { ...item, qty } : item))
    })
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const count = items.reduce((sum, item) => sum + item.qty, 0)

  const value = useMemo(
    () => ({ items, count, addItem, removeItem, updateQty, clear }),
    [items, count, addItem, removeItem, updateQty, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
