# ROBER.

Personal project hub for Rober: apps, webs and digital experiments presented as individual product experiences.

## Development

```bash
npm install
npm run dev
```

The project uses Next.js App Router, TypeScript, Tailwind CSS, Motion, Lucide and Vercel Analytics.

## Content

- Projects: `src/data/projects.ts`
- Site details and social links: `src/data/site.ts`

Adding a project only requires a new typed object in the project dataset. Social links remain hidden until their URL is configured.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical and social metadata resolve against the final domain.
