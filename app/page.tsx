import { CartProvider } from '@/components/cart-provider'
import { CartWidget } from '@/components/cart-widget'
import { FoodMenu } from '@/components/food-menu'
import { LoadedFriesList } from '@/components/loaded-fries-list'
import { ServicesModal } from '@/components/services-modal'
import { ThemeToggle } from '@/components/theme-toggle'

const featured = {
  name: 'Beef, Chicken & Sausage Loaded Fries (Combo)',
  price: '₦10,000',
}

function orderUrl(item: typeof featured) {
  const message = `Hi! I'd like to order the ${item.name} (${item.price}).`
  return `https://wa.me/2347078787475?text=${encodeURIComponent(message)}`
}

export default function Page() {
  return (
    <CartProvider>
      <main>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center" aria-label="Meals & Medicine home">
          <img src="/logo.png" alt="Meals & Medicine" className="h-14 w-auto dark:hidden" />
          <img src="/logo-dark.png" alt="Meals & Medicine" className="hidden h-14 w-auto dark:block" />
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#story" className="nav-link">Our story</a>
          <ServicesModal />
          <a href="#visit" className="nav-link">Find us</a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href={orderUrl(featured)} target="_blank" rel="noreferrer" className="nav-order">Order now <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="hero-grid">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Small kitchen. Big appetite.</p>
            <h1 className="mt-5 max-w-3xl text-balance text-6xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-8xl">Food worth<br /><em>talking about.</em></h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">Big flavor, crispy edges, and absolutely no boring bites. Made fresh in our little corner of Kaduna.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={orderUrl(featured)} target="_blank" rel="noreferrer" className="whatsapp-button">Order on WhatsApp <span aria-hidden="true">↗</span></a>
              <a href="#menu" className="text-link">See the menu <span aria-hidden="true">↓</span></a>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">Open 24/7</p>
          </div>
          <div className="hero-image-wrap">
            <img src="/food-hero.jpg" alt="Crispy fried chicken sandwich with fries" className="hero-image" />
            <div className="hero-stamp" aria-hidden="true"><span>Good food</span><strong>GOOD MOOD</strong></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>CRISPY · JUICY · MESSY · MADE FRESH · CRISPY · JUICY · MESSY · MADE FRESH · </span></div>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div className="best-seller-image-wrap">
            <img src="/best-seller.jpg" alt="Loaded fries topped with beef, chicken, and sausage" className="best-seller-image" />
            <div className="hero-stamp" aria-hidden="true"><span>Best</span><strong>SELLER</strong></div>
          </div>
          <div>
            <p className="eyebrow">Best seller</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">The Loaded Fries everyone orders.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Crispy fries piled high with beef, chicken, and sausage, finished with our signature sauce drizzle. This is the one people keep coming back for.</p>
            <LoadedFriesList />
            <a href={orderUrl(featured)} target="_blank" rel="noreferrer" className="whatsapp-button mt-7">Order on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <FoodMenu />

      <section id="story" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div className="about-image-wrap">
            <img src="/about.jpg" alt="Founder of Meals & Medicine" className="about-image" />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">The face behind the flavor.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Meals & Medicine started with a simple idea: food should make you feel as good as it tastes. Every dish is made fresh, right here in Kaduna, by hands that care about what goes into your body — not just what's on your plate.</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Nourishing today, healing tomorrow — that's the promise behind every order we send out.</p>
          </div>
        </div>
      </section>

      <footer id="visit" className="border-t border-border px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <a href="#top" className="flex items-center">
              <img src="/logo.png" alt="Meals & Medicine" className="h-20 w-auto dark:hidden" />
              <img src="/logo-dark.png" alt="Meals & Medicine" className="hidden h-20 w-auto dark:block" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Kaduna, Nigeria<br />Come hungry.</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="#menu" className="nav-link w-fit">Menu</a>
              <a href="#story" className="nav-link w-fit">Our story</a>
              <a href="#visit" className="nav-link w-fit">Find us</a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Get in touch</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="https://wa.me/2347078787475" target="_blank" rel="noreferrer" className="nav-link w-fit">+234 707 878 7475</a>
              <p className="text-muted-foreground">Delivery available</p>
              <p className="text-muted-foreground">Open 24/7</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">© 2026 Meals & Medicine</p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Nourishing today, healing tomorrow</p>
        </div>
      </footer>
      </main>
      <CartWidget />
    </CartProvider>
  )
}
