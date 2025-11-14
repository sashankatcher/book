# images/

This folder is where you can add your photos for the gallery.

Recommended workflow

- From VS Code: open the Explorer, right-click this folder and choose *Reveal in File Explorer* / *Show in File Manager*, or drag & drop files directly into this folder.
- From the devcontainer shell (example):

```bash
cd /workspaces/bookstuff
mkdir -p images
# copy photos from another path available in the container
cp /path/to/your/photos/*.jpg images/
```

If you're copying files from your host machine into the container via VS Code, the easiest way is to drag the images into this folder in the Explorer view.

Naming & sizing tips

- Use a consistent naming scheme, e.g. `photo1.jpg`, `photo2.jpg`.
- You can add two versions for each image: a smaller thumbnail and a larger full-size file. Example:

  - `images/photo1-thumb.jpg` → set as the `<img src="...">`
  - `images/photo1.jpg` → set as the `data-full` attribute for the lightbox

How to reference images in `index.html`

Replace an example image element with your filenames:

```html
<figure>
  <img loading="lazy" src="images/photo1-thumb.jpg" data-full="images/photo1.jpg" alt="Photo 1">
  <figcaption>Photo 1</figcaption>
</figure>
```

Large files and Git LFS

If images are large (>50–100 MB) or you plan to store many originals, use Git LFS:

```bash
git lfs install
git lfs track "images/*"
git add .gitattributes images
git commit -m "Add images (tracked with LFS)"
git push
```

Serving & preview

- You can preview locally using the server already started:

```bash
cd /workspaces/bookstuff
python3 -m http.server 8000
# open http://localhost:8000
```

Security & privacy

- Be mindful before committing private photos to a public repository. For sensitive images, prefer a private repo or external private storage (S3, Cloudinary with restricted access, etc.).

Questions or want me to add example local images into this folder now? Reply and I can copy sample files or update `index.html` to point to specific filenames.
