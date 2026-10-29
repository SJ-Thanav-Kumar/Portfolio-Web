# Portfolio Website

Personal portfolio built with React, Vite and Tailwind CSS v4. A migration of a static HTML design into components; the layout and look are unchanged.

**Live:** https://portfolio-web-eight-chi-47.vercel.app/

## Run locally
Requires Node.js 20+ and npm.

    npm install
    npm run dev      # development server
    npm run build    # production build into dist/
    npm run preview  # serve the production build locally

## Editing content
All content lives in `src/data/` (skills, projects, experience, certifications, publications). Edit those files; the sections update automatically. Replace the `[placeholders]` in certifications and publications when you have real entries. Your resume is `public/resume.pdf`.

## Structure
- `src/sections/`: one component per page section
- `src/components/`: shared pieces (navbar, divider, section header, floating toggle, footer)
- `src/data/`: content as plain JavaScript arrays
- `src/index.css`: Tailwind import, theme colours and fonts, custom CSS

## Deployment
Static site: `npm run build` produces `dist/`, hosted on Vercel.

## External assets
Font Awesome 6.4 icons (cdnjs) and the Inter and Space Grotesk fonts (Google Fonts) load from CDNs in `index.html`.
