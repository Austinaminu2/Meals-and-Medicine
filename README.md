# Meals & Medicine

Landing page and ordering site for Meals & Medicine, a Kaduna-based kitchen. Built with Next.js, React, and Tailwind CSS. Orders are placed via WhatsApp — there's no checkout or payment backend.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- [Base UI](https://base-ui.com/) primitives (dialog) via `components/ui`

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start the dev server     |
| `pnpm build` | Build for production     |
| `pnpm start` | Run the production build |
| `pnpm lint`  | Run ESLint               |

## Project structure

```
app/            Root layout, global styles, and the single page (app/page.tsx)
components/     Page sections and UI (cart, food menu, services modal, theme toggle)
components/ui/  Base UI-backed primitives (button, dialog)
lib/            Shared utilities
public/         Images, icons, and logos
```

## Notes

- Orders link out to WhatsApp (`wa.me`) with a prefilled message — no server-side order handling.
- Dark mode is a `class`-based toggle, initialized inline before hydration to avoid a flash of the wrong theme.
