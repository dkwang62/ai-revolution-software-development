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

## Publishing Checklist

Publishing is simple once the correct sources are used:

1. Edit public pages in `content/`.
2. Update `content/index.md` for the home-page table of contents.
3. Update `quartz/components/bookStructure.ts` for the sidebar and previous/next navigation.
4. Run `npm run quartz -- build`.
5. Commit and push to `main`.
6. Confirm the GitHub Pages workflow succeeds.
7. Check the live URL returns the expected page.

The Obsidian vault is the drafting space. This repository is the public reading edition.
