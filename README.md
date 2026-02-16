# AWS Study Center

AWS Study Center is a certification prep web app with a multi-certification course catalog, focused practice workflows, and structured study guidance.

Current status:
- Full implementations: `CLF-C02` and `MLA-C01`
- Scaffolded placeholders: all other certification courses in the catalog

## Features

- Powerful landing page with certification tracks and catalog overview
- Certification catalog covering foundational, associate, professional, and specialty routes
- Live course workspaces with:
  - domain study guide
  - timed practice simulator
  - scoring analytics
- Placeholder course pages for all not-yet-implemented certifications

## Local development

```bash
npm start
```

App URL:
- [http://localhost:4173](http://localhost:4173)

## Deploy to Vercel

This repository is deployment-ready for Vercel static hosting.

1. Import the repository into Vercel.
2. Deploy.

Vercel files included:
- `/vercel.json`

Optional local parity with Vercel runtime:

```bash
npm run dev:vercel
```

## Project structure

- `/index.html` - app shell
- `/styles.css` - visual system and responsive layout
- `/app.js` - SPA routing, course rendering, and practice engine
- `/data/content.js` - deep content and question bank for MLA-C01
- `/data/course-clf-c02.js` - deep content and question bank for CLF-C02
- `/data/certifications.js` - global certification catalog and placeholder scaffolds
- `/server.js` - local static server
