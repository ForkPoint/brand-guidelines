# Forkpoint Brand Guidelines

The official digital brand identity guidelines, design tokens, vector assets, and component showcase for **Forkpoint**.

Live Site: [https://forkpoint.github.io/brand-guidelines](https://forkpoint.github.io/brand-guidelines)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server (runs at http://localhost:3000)
npm start

# Create optimized production build
npm run build
```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automated Deployment via GitHub Actions (Recommended)
This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In your GitHub repository:
   * Go to **Settings** → **Pages**
   * Under **Build and deployment** → **Source**, select **GitHub Actions**
2. Push any changes to the `main` branch. GitHub Actions will automatically install dependencies, build the production bundle, and publish the site.

### Method 2: Manual Deployment via CLI
If you prefer deploying directly from your local terminal:

```bash
npm run deploy
```
This runs `npm run build` and uses `gh-pages` to publish the `./build` folder directly to the `gh-pages` branch.

---

## 📦 Features & Contents

- **Brand Overview:** Mission statement, core brand principles, and direct master PDF download (`Forkpoint_Guidelines.pdf`).
- **Vector Logos:** Full suite of SVG logos (Positive, Negative, Monochrome, Slogan, and Standalone Marks) with 1-click clipboard copy, download, and transparency preview grid.
- **Color System:** Brand green (`#8acf31`), dark neutral (`#575757`), pure black (`#000000`), gray, and white with verified RGB, CMYK, and HEX values.
- **Typography:** Showcase of official brand typeface **Open Sans** (weights 300, 400, 600, 700, 800) with interactive live text tester and type scale hierarchy.
- **Buttons & UI:** Interactive button variants (Solid, Outlined, Text Links) across light and dark themes.
- **Routing:** Built with React Router `<HashRouter>` for compatibility with static GitHub Pages hosting.
