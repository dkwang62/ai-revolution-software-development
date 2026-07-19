# The AI Revolution in Software Development - Public Website

This repository publishes the public reading draft of _The AI Revolution in Software Development: The Genie in the Bottle: When Ideas Magically Become Software_ using Quartz and GitHub Pages.

The source manuscript lives in the Obsidian vault. The `content/` folder contains the public website edition only.

## Local Preview

```bash
npm install
npm run quartz -- build --serve
```

## Build

```bash
npm run quartz -- build
```

## GitHub Pages

The workflow in `.github/workflows/deploy-github-pages.yml` builds the Quartz site and deploys the generated `public/` folder to GitHub Pages whenever changes are pushed to `main`.
