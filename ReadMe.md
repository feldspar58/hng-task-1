# Profile Card — hng-task-1

A small, responsive profile-card project built with plain HTML, CSS and JavaScript.  
Includes a profile card, boxed bio, about sections, a contact form with basic client-side validation, mobile navigation, and a live timestamp.

## Files

- `index.html` — Profile card / main page
- `about.html` — About / reflection page (optional)
- `contact.html` — Contact form page (optional)
- `style.css` — Styles (layout, responsive rules, profile card, bio box, shadows)
- `app.js` — Client-side behavior (timestamp, mobile nav, form validation, about slides)
- `image/` — Avatar and icon assets

## Preview

Open `index.html` in your browser to view the profile card. The page is responsive and will adapt for small screens.

## Timestamp formatting

By default `app.js` sets the `#time` element using `Date.now()` every second.

## Running locally

1. Clone or copy the repository to your computer.
2. Open `index.html` in a browser (double-click or right-click -> Open with...).

You can also serve it locally using:

```bash
python -m http.server
# then open http://localhost:8000
```

## License & credits

This project is provided as-is. Images included in `image/` are part of the repository.

## Features

- Live timestamp in `#time` (uses `Date.now()` by default).
- Responsive header with hamburger menu and sidebar.
- Profile card with boxed bio and subtle box-shadow + hover lift.
- Contact form validation:
  - required text and email inputs,
  - message textarea must be ≥ 10 characters,
  - inline `.error-message` elements show validation feedback,
  - `.success` element displayed on successful submit.
- About sections navigable with previous / next arrows.

## Required DOM elements (so app.js works)

Make sure these exist in your HTML (matching class/id names):

- `#time`
- `.hamburger`, `.sidebar`, `.close`, `.inspo-mobile`
- `.btn` (submit), `.success`
- `input[type="text"]`, `input[type="email"]`
- one `textarea`
- one `.error-message` per input/textarea (same order as inputs)
- one or more `.about-section`, plus `.arrow-left` and `.arrow-right`
