# Waleed Tahir — Portfolio

React + Vite + TypeScript + Tailwind portfolio.
Saara content `src/data/waleed.ts` me hai (projects, skills, experience, education, links).

## Run

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build -> dist/
npm run preview
```

## Edit karna

- Content / links / phone / email: `src/data/waleed.ts`
- Project screenshots: `public/screenshots/<project>/` (paths `waleed.ts` ke `images` me)
- Favicon: `public/favicon.svg`
- Pages: `src/pages` (Home, About, Portfolio, Contact) · Navbar/Footer: `src/components`

## Deploy

Vercel / Netlify par repo connect karo — build command `npm run build`, output `dist`.
