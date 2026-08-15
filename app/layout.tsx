import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { InlineScript } from '@/components/inline-script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meals & Medicine — Food worth talking about',
  description: 'Big flavor, crispy edges, and no boring bites. Order fresh food from Meals & Medicine on WhatsApp.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <InlineScript html={`(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`} />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
