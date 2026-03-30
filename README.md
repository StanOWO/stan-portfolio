# Stan Wang — Personal Portfolio

A modular React + Vite personal portfolio site, ready to deploy on GitHub Pages.

## Project Structure

```
stan-portfolio/
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite config (base path for GH Pages)
├── public/                     # Static assets (images, favicon, etc.)
└── src/
    ├── main.jsx                # React entry — mounts <App />
    ├── index.css               # Global CSS variables, reset, shared styles
    ├── App.jsx                 # Root component — assembles all sections
    ├── data/
    │   └── portfolioData.js    # All content in one place — edit here
    ├── hooks/
    │   └── useFadeIn.js        # Intersection Observer custom hook
    └── components/
        ├── FadeIn.jsx          # Reusable scroll-fade wrapper
        ├── SectionHeader.jsx   # Reusable label + title
        ├── TagRow.jsx          # Reusable tag pills
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx / .css
        ├── Awards.jsx / .css
        ├── Courses.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deploy to GitHub Pages

### Option A: `gh-pages` package (recommended)

1. Create a GitHub repo (e.g. `stan-portfolio`)

2. Edit `vite.config.js` — set `base` to match your repo name:
   ```js
   base: '/stan-portfolio/',
   ```
   If deploying to `https://<username>.github.io/` (user site), set `base: '/'`

3. Push code to GitHub:
   ```bash
   git init
   git remote add origin https://github.com/<username>/stan-portfolio.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

5. In GitHub → Settings → Pages, set Source to `gh-pages` branch, `/ (root)`.

6. Visit `https://<username>.github.io/stan-portfolio/`

### Option B: GitHub Actions (auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Then in GitHub → Settings → Pages, set Source to "GitHub Actions".

## Customizing Content

All portfolio data lives in `src/data/portfolioData.js`. Edit that file to update your name, projects, skills, awards, courses, etc. No need to touch any component files.
