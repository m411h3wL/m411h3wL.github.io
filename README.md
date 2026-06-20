# m411h3wL - Portfolio & Blog

This is my personal portfolio and blog website built with HTML, CSS, and vanilla JavaScript.

## Structure

```
.
├── index.html              # Main homepage (hero, featured projects, about)
├── blog.html               # Blog listing page
├── theatre.html            # Theatre photos, by show
├── styles.css              # Main stylesheet
├── blog-styles.css         # Blog-specific styles
├── theatre-styles.css      # Theatre page styles
├── posts/
│   ├── TEMPLATE.html       # copy this to start a new post
│   ├── first-thoughts-on-bci.html
│   ├── opening-pandoras-box-in-packard-lab.html
│   ├── her-window-my-window.html
│   └── post-styles.css     # Blog post styles
├── projects/
│   ├── TEMPLATE.html       # copy this to start a new project write-up
│   ├── job-grabber.html
│   ├── outreach-graph.html
│   ├── giulio-camilo.html  # exists here, intentionally not linked from index.html
│   └── project-styles.css  # research-paper styling for project write-ups
├── assets/
│   ├── headshot/           # homepage hero photo
│   ├── theatre/             # show photos, used by theatre.html
│   ├── og-image.jpg          # default social-preview image (Open Graph/Twitter Card)
│   └── projects/            # screenshots/figures used in project write-ups
├── sitemap.xml                # pages search engines should index
├── robots.txt                 # crawler rules, points to sitemap.xml
├── CONTENT.md                # manifest of what's shown vs hidden, and where
└── README.md                # This file
```

## Curation

Not every post or project gets linked from the homepage or blog listing. `posts/` and
`projects/` can hold more pages than are referenced in `blog.html` / `index.html` — a
page only becomes "published" once something links to it. See `CONTENT.md` for the
current list of what's shown vs hidden.

## SEO / link previews

Every real page has a `<meta name="description">`, a canonical URL, and Open
Graph/Twitter Card tags (title, description, image) so links posted to Substack,
X, LinkedIn, etc. render as a preview card instead of a bare URL. Pages that are
intentionally hidden (`TEMPLATE.html` files, `projects/giulio-camilo.html`) carry
`<meta name="robots" content="noindex">` and are left out of `sitemap.xml`.

When adding a new post/project page, copy the meta block from an existing page of
the same type and update the title/description/url/image.

## Publishing a new post

1. Copy `posts/TEMPLATE.html` to `posts/your-slug.html` and fill it in.
2. Add a `<article class="blog-card">` entry to `blog.html` (copy the existing one).
3. Add a row to `CONTENT.md`.
4. Add the page to `sitemap.xml` and remove the `noindex` meta tag.

## Publishing a new project

1. Copy `projects/TEMPLATE.html` to `projects/your-slug.html` and fill it in.
2. To feature it on the homepage, add a `.project-card` to `index.html`'s Featured
   Projects grid. To leave it intentionally hidden, skip this step.
3. Add a row to `CONTENT.md`.
4. If featured, add the page to `sitemap.xml` and remove the `noindex` meta tag.



