'use client'

import { Leaf, Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'

type MenuItem = {
  name: string
  price?: string
}

type MenuCategory = {
  title: string
  items: MenuItem[]
}

const menu: MenuCategory[] = [
  {
    title: 'Breakfast Menu',
    items: [
      { name: 'Pancakes & Scrambled Eggs', price: '₦3,500' },
      { name: 'Pancakes & Sausages', price: '₦4,000' },
      { name: 'Toasted Bread, Scrambled Eggs & Chips', price: '₦5,000' },
      { name: 'Chips & Eggs', price: '₦3,500' },
      { name: 'Plantain & Eggs', price: '₦4,000' },
      { name: 'Toasted Bread & Eggs', price: '₦3,000' },
      { name: 'Stir-fried Noodles & Eggs', price: '₦4,500' },
    ],
  },
  {
    title: 'Rice & Pasta',
    items: [
      { name: 'Jollof Rice (Small / Big)', price: '₦1,000 / ₦1,500' },
      { name: 'Fried Rice (Small / Big)', price: '₦1,200 / ₦1,600' },
      { name: 'Jollof Pasta (Small / Big)', price: '₦1,200 / ₦1,500' },
    ],
  },
  {
    title: 'Soups',
    items: [
      { name: 'Ogbono, Egusi, Okra, Vegetable or Edikang Ikong', price: '₦5,000 each' },
      { name: 'Add Goat Meat', price: '₦2,000 / ₦3,500' },
      { name: 'Add Chicken', price: '₦2,500 / ₦4,000' },
      { name: 'Add Turkey', price: '₦4,500 / ₦8,000' },
      { name: 'Add Beef', price: '₦1,000 / ₦2,000' },
      { name: 'Add Fish', price: '₦1,500 / ₦3,500' },
    ],
  },
  {
    title: 'Fruit Salads',
    items: [
      { name: 'Sweet Treat — banana, mango, pineapple & honey', price: '₦2,500' },
      { name: 'Nigerian Delight — pawpaw, watermelon, cucumber & ginger', price: '₦2,500' },
      { name: 'Mims Citrus — orange, guava, lemon, cucumber', price: '₦2,500' },
      { name: "Greatie's Delight — watermelon, pineapple, cucumber, honey", price: '₦2,500' },
      { name: "Symba's Elixir — watermelon, grape, honey, yogurt", price: '₦2,500' },
      { name: "iella's Magic (Parfait) — Greek yogurt, banana, strawberries, grapes, granola, nuts", price: '₦2,500' },
    ],
  },
  {
    title: 'Specialties',
    items: [
      { name: 'Yamarita & Sauce', price: '₦4,000' },
      { name: 'Bread & Goat Meat Peppersoup', price: '₦6,000' },
      { name: 'Grilled Plantain & Fish with Palm Oil Sauce', price: '₦6,000' },
      { name: 'French Toast & Sausages', price: '₦5,000' },
    ],
  },
  {
    title: 'Loaded Fries',
    items: [
      { name: 'Beef Loaded Fries', price: '₦6,500' },
      { name: 'Chicken Loaded Fries', price: '₦7,500' },
      { name: 'Sausage Loaded Fries', price: '₦6,000' },
      { name: 'Beef, Chicken & Sausage Loaded Fries (Combo)', price: '₦10,000' },
    ],
  },
  {
    title: 'Sides',
    items: [
      { name: 'Plantain', price: '₦1,000' },
      { name: 'Chips', price: '₦2,000' },
      { name: 'Beans', price: '₦1,500' },
      { name: 'Sausages', price: '₦500' },
      { name: 'Yam', price: '₦1,000' },
    ],
  },
  {
    title: 'Juices & Smoothies',
    items: [
      { name: 'Juices — orange, pineapple, watermelon, apple, berry current', price: '₦1,500 each' },
      { name: 'Tropical Mix — pineapple, mango, kiwi' },
      { name: "Emerald's Blast — strawberries, blueberries, raspberries" },
      { name: 'Nigerian Fave — pawpaw, pineapple, coconut' },
      { name: "Rose's Mix — apple, pear, grapes" },
      { name: "Dan's Duo — cucumber, lime" },
      { name: "Tom's Combo — banana, avocado, coconut" },
    ],
  },
  {
    title: 'Shawarma',
    items: [
      { name: 'Single Beef Shawarma', price: '₦3,000' },
      { name: 'Double Beef Shawarma', price: '₦3,600' },
      { name: 'Single Chicken Shawarma', price: '₦4,000' },
      { name: 'Double Chicken Shawarma', price: '₦5,000' },
      { name: 'Extra Sausage', price: '₦500' },
      { name: 'Extra Fries', price: '₦1,500' },
    ],
  },
]

const WHATSAPP_NUMBER = '2347078787475'
const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order.")}`

export function FoodMenu() {
  const { addItem } = useCart()

  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">The good stuff</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Our full menu.</h2>
        </div>
        <a href={orderUrl} target="_blank" rel="noreferrer" className="whatsapp-button">Order on WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
      <div className="columns-1 gap-6 lg:columns-2">
        {menu.map((category) => (
          <div key={category.title} className="menu-category mb-6 break-inside-avoid">
            <p className="menu-category-title">{category.title}</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {category.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3">
                  <span className="flex items-start gap-2 text-sm leading-6">
                    <Leaf className="mt-1 h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
                    {item.name}
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    {item.price && <span className="whitespace-nowrap font-mono text-xs font-semibold text-primary">{item.price}</span>}
                    <button type="button" onClick={() => addItem(item.name, item.price ?? '')} aria-label={`Add ${item.name} to order`} className="cart-add-button">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
