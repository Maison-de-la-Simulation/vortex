# VORTEX Workshop

Static Astro site for the 14 December 2026 workshop at the Maison de la Simulation, Saclay. The site content is in English.

## Run locally

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Build and deploy

Run `npm run build` and publish the contents of `dist/` on a static host. Run `npm run preview` to check a local build.

Set `ASTRO_SITE_URL` to the deployment origin to generate canonical and social sharing URLs. If deploying below a path, such as a GitHub Pages project site, also set `ASTRO_BASE_PATH` to that path.

```sh
ASTRO_SITE_URL=https://example.github.io ASTRO_BASE_PATH=/vortex/ npm run build
```

## Edit workshop information

- Shared date, venue, links, contacts, and topics are in `src/data/workshop.ts`.
- Update `src/pages/programme.astro` when the schedule is ready.
- The two institutional logos are served locally. The flow illustration shows streamlines of a synthetic two-dimensional field.

## Logo sources

- [NumPEx project site](https://numpex.org/exadi-development-and-integration/)
- [Official France 2030 graphic identity](https://www.info.gouv.fr/organisation/secretariat-general-pour-l-investissement-sgpi/logos-france-2030)
