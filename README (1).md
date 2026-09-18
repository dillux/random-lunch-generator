# 🍽️ Random Lunch Generator

A tiny web app that picks a random lunch for you with one click.
Week 1 homework for the LLM-4-RecSys course (HSE).

**Live demo:** https://YOUR-USERNAME.github.io/random-lunch-generator/

## How it works
1. Click **Pick my lunch**.
2. `script.js` picks a random dish from the `menu` array with `Math.random()` (never the same dish twice in a row).
3. The page shows the dish, its emoji and a short note.

## Image fix (TODO from the slides)
The first AI-generated version used generic icon-font images, so the picture often didn't match
the dish (e.g. a fish icon for sushi) and external image links could break.
The prompt was changed to: *"Every menu item must have its own matching image stored together
with its name in one object; do not use external image URLs or icon fonts — use emoji."*
Now each dish is `{ name, emoji, note }`, so the image always matches and nothing loads from outside.

## Structure
```
index.html   – page structure
style.css    – design
script.js    – random pick logic
```

## Run locally
Open `index.html` in a browser.

## Deploy to GitHub Pages
Settings → Pages → Deploy from a branch → `main` / `root` → Save.

## Next step
Replace random choice with a personalized recommendation (user history / LLM).
