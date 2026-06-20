# m411h3wL - Portfolio & Blog

This is my personal portfolio and blog website built with HTML, CSS, and vanilla JavaScript.

## Structure

```
.
├── index.html              # Main homepage (hero, featured projects, about)
├── blog.html               # Blog listing page
├── styles.css              # Main stylesheet
├── blog-styles.css         # Blog-specific styles
├── posts/
│   ├── TEMPLATE.html       # copy this to start a new post
│   ├── first-thoughts-on-bci.html
│   └── post-styles.css     # Blog post styles
├── projects/
│   ├── TEMPLATE.html       # copy this to start a new project write-up
│   ├── job-grabber.html
│   ├── outreach-graph.html
│   ├── giulio-camilo.html  # exists here, intentionally not linked from index.html
│   └── project-styles.css  # research-paper styling for project write-ups
├── CONTENT.md                # manifest of what's shown vs hidden, and where
└── README.md                # This file
```

## Curation

Not every post or project gets linked from the homepage or blog listing. `posts/` and
`projects/` can hold more pages than are referenced in `blog.html` / `index.html` — a
page only becomes "published" once something links to it. See `CONTENT.md` for the
current list of what's shown vs hidden.

## Publishing a new post

1. Copy `posts/TEMPLATE.html` to `posts/your-slug.html` and fill it in.
2. Add a `<article class="blog-card">` entry to `blog.html` (copy the existing one).
3. Add a row to `CONTENT.md`.

## Publishing a new project

1. Copy `projects/TEMPLATE.html` to `projects/your-slug.html` and fill it in.
2. To feature it on the homepage, add a `.project-card` to `index.html`'s Featured
   Projects grid. To leave it intentionally hidden, skip this step.
3. Add a row to `CONTENT.md`.



