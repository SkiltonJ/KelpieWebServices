# Kelpie Web Services - Production Build

## Development Workflow

### First Time Setup
```bash
npm install
```

### Build Production CSS
```bash
npm run build
```

This creates `dist/output.css` - a minified CSS file with only the Tailwind classes you actually use.

### Development Mode (Auto-rebuild on save)
```bash
npm run dev
```

This watches your HTML/JS files and rebuilds CSS automatically when you save changes.

---

## File Structure

```
KelpieWebServices/
├── index.html
├── pages/           # All page HTML files
├── css/
│   ├── input.css    # Source CSS (Tailwind + custom styles)
│   └── custom.css   # OLD - no longer used, kept for reference
├── dist/
│   └── output.css   # GENERATED - production CSS (commit to Git)
├── js/              # JavaScript files
├── assets/          # Images and other assets
├── tailwind.config.js  # Tailwind configuration
└── package.json     # Build scripts
```

---

## Deploying to GitHub Pages

1. **Build the CSS:**
   ```bash
   npm run build
   ```

2. **Commit everything (including dist/):**
   ```bash
   git add .
   git commit -m "Production build"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

Your site will be live at: `https://skiltonj.github.io/KelpieWebServices/`

---

## Important Notes

- ✅ **DO commit `dist/output.css`** to Git (required for GitHub Pages)
- ✅ Always run `npm run build` before pushing to GitHub
- ✅ All HTML files now reference `dist/output.css` instead of CDN
- ✅ Custom brand colors are in `tailwind.config.js`
- ✅ Your accessibility styles are in `css/input.css`

---

## Making Style Changes

1. Edit colors in `tailwind.config.js`
2. Edit custom CSS in `css/input.css`
3. Run `npm run build`
4. Commit and push

---

**Your Digital Working Partner** 🐕
