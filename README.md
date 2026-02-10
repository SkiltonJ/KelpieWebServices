# Kelpie Web Services Website

**Your Digital Working Partner**

Premium web solutions for South Australian government agencies and medium businesses.

---

## Project Structure

```
kelpie-web-services/
│
├── index.html              # Homepage
│
├── pages/                  # All other pages
│   ├── services.html
│   ├── about.html
│   ├── how-we-work.html
│   ├── contact.html
│   └── faq.html
│
├── css/
│   └── custom.css         # Custom styles beyond Tailwind
│
├── js/
│   ├── main.js            # Mobile menu and general interactions
│   └── contact-form.js    # Contact form handling (to be created)
│
├── assets/
│   └── images/
│       ├── logo-circle.webP       # Kelpie logo
│       └── (other images as needed)
│
└── README.md              # This file
```

---

## Tech Stack

- **HTML5** - Semantic, accessible markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **Google Fonts** - Inter font family

---

## Brand Colours

- **Deep Teal**: `#006B7D` - Headers, CTAs, monitor frames
- **Slate/Charcoal**: `#3E4A5B` - Body text, sophistication
- **Warm Sand**: `#D4A574` - Australian landscape, warmth
- **Sunset Orange**: `#E67E33` - Energy, secondary CTAs, tagline
- **Off-White**: `#F7F5F2` - Backgrounds, clean contrast

---

## Accessibility (WCAG 2.2 AA Compliance)

This site is built with accessibility as a priority:

- ✅ Semantic HTML5 elements
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Skip to main content link
- ✅ ARIA labels where needed
- ✅ Focus indicators on all interactive elements
- ✅ Keyboard navigation fully supported
- ✅ Alt text on all images
- ✅ Colour contrast ratios meet WCAG standards
- ✅ Mobile responsive (desktop-first approach)

---

## Development

### Local Development

1. Open `index.html` in a browser
2. Or use a local server:
   ```bash
   python3 -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`

### Deployment Options

- **GitHub Pages**: Free, easy setup
- **Netlify**: Better than GitHub Pages, free tier available
- **Vercel**: Similar to Netlify
- **Traditional hosting**: VentraIP, etc.

---

## To-Do

- [x] Create remaining pages (Services, About, How We Work, Contact, FAQ)
- [ ] Add photo of Muffin to About page
- [ ] Implement contact form with Formspree or EmailJS
- [ ] Set up favicon
- [ ] Add Google Analytics (if desired)
- [ ] Test across browsers (Chrome, Firefox, Safari, Edge)
- [ ] Run accessibility audit (WAVE, axe DevTools)
- [ ] Optimize images for web
- [ ] Set up custom domain

---

**Location**: Adelaide, South Australia

---

## Copyright

© 2026 Kelpie Web Services. All rights reserved.
