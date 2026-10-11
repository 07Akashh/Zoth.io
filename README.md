# Token sale demo

A responsive Next.js App Router application matching the supplied Figma design.

## Run locally

Requires Node.js 20.9+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. For a production preview:

```sh
pnpm build
pnpm start
```

## Implementation decisions

- TypeScript, Tailwind CSS, shadcn-style components built on Radix primitives, lucide-react, Framer Motion, TanStack Query, sonner, `cn`, and `cva`.
- Tailwind utilities handle responsive timeline layout and dialog styling; custom CSS preserves the precise grid background, decorative borders, spacing, and motion tokens.
- `/` uses static generation with 60-second revalidation. `/sale/demo-ido-001` renders fresh data per request. A server-only repository shares the mock fixture with `/api/sale`; TanStack Query hydrates the initial snapshot and refreshes live values every 30 seconds.
- The countdown updates every second after hydration. Connect Wallet and Connect Sonar open accessible placeholder dialogs. No Web3 integration or real transactions are performed.
- The four timeline milestones remain in one horizontal row. Narrow containers use compact typography; screens below the supported 375px minimum can scroll the timeline without overflowing the page.
- Partner logos are complete local SVG exports. Icons and artwork use descriptive camelCase filenames. Arial is the fallback because the licensed Roobert font was not supplied.
- Loading, error, and not-found boundaries handle unavailable sale data. Motion respects reduced-motion preferences; Radix handles keyboard navigation and focus management.
- Set `NEXT_PUBLIC_SITE_URL` to the deployed origin for canonical metadata.

## Checks

```sh
pnpm typecheck
pnpm format:check
pnpm build
```

The API is a mock data source and resource links remain within the demo. GitHub publishing requires a target repository; deployment requires an authenticated Vercel account.
