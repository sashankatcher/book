# Simple Photo Gallery

This is a minimal webpage that displays a series of photos in a responsive grid with a lightbox.

Files added:

- `index.html` — gallery markup
- `styles.css` — gallery and lightbox styles
- `script.js` — lightbox behavior (open, next, previous, keyboard)

How to view:

1. Open `index.html` directly in your browser (works for most browsers).
2. Or serve with a simple HTTP server (recommended):

```bash
cd /workspaces/bookstuff
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Replace photos:

- The gallery uses sample images from `https://picsum.photos`.
- To use local images, edit `index.html` and replace the `src` and `data-full` attributes with paths under an `images/` folder (create it and add files).

Want improvements?

- Add captions, lazy-loading, or thumbnails optimization
- Add upload UI to let others add photos
- Integrate a lightbox library for transitions

If you want, I can wire up local image support (create an `images/` folder and sample files), or add captions and download buttons.
# bookstuff