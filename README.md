# Dyo Sigma Website

Static multi-page website for Dyo Sigma — built for GitHub Pages hosting.

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | `/` | Home (Hero, Services, Pricing, FAQ, Testimonials) |
| `about.html` | `/about.html` | About & Team |
| `portfolio.html` | `/portfolio.html` | Client projects |
| `blog.html` | `/blog.html` | Articles & news |
| `contact.html` | `/contact.html` | Contact form |

## Features

- **Bilingual** — Greek / English with one-click toggle (persisted in localStorage)
- **Responsive** — mobile-first, hamburger nav
- **Shareable URLs** — each page is a standalone HTML file
- **Zero dependencies** — pure HTML + CSS + vanilla JS, no build step
- **GitHub Pages ready** — deploy in < 5 minutes

## Deploy to GitHub Pages

### Method A — GitHub UI (easiest)

1. Create a new repository on GitHub (e.g. `dyo-sigma`)
2. Upload all files (drag & drop in the GitHub UI)
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch, folder `/ (root)`
5. Click **Save** — your site is live at `https://yourusername.github.io/dyo-sigma/`

### Method B — Git CLI

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dyo-sigma.git
git push -u origin main
```

Then enable Pages in Settings → Pages → Source: `main / (root)`.

### Custom domain (e.g. dyo-sigma.com)

1. Add a file called `CNAME` in the root with just your domain:
   ```
   dyo-sigma.com
   ```
2. In your DNS registrar, add:
   - `A` record → `185.199.108.153` (and the other 3 GitHub IPs)
   - Or `CNAME` record → `yourusername.github.io`

## Contact Form

The contact form currently simulates submission (1s delay + success message).
To receive real emails, replace the form handler in `js/main.js` with one of:

- **Formspree** (free): `fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form) })`
- **EmailJS** (free tier)
- **Netlify Forms** (if you switch hosting to Netlify)

## File Structure

```
dyo-sigma/
├── index.html          # Home page
├── about.html          # About page
├── portfolio.html      # Portfolio page
├── blog.html           # Blog page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Language system + interactions
└── README.md
```
