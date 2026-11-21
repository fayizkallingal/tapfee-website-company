# TapFee Website

Static, dependency-free marketing site (HTML + CSS + JS). No build step.

## Run locally
Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

## Deploy
Upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, S3, or your own server) with `index.html` at the root.

## Structure
- `index.html` — all sections (hero, features, app showcase, how it works, WhatsApp, industries, AI Voice Agent, Get Started, footer)
- `css/style.css` — styling and responsive layout
- `js/main.js` — nav, scroll animations, Get Started form
- `public/images/` — logo, favicons, your app screenshots, illustrations and backgrounds

## Before going live
Open `js/main.js` and edit `CONFIG`:
- `contactEmail` — where Get Started enquiries are sent (currently the placeholder `hello@tapfee.in`)
- `whatsappNumber` — optional, e.g. `919876543210`; if set, the form opens WhatsApp instead of email
