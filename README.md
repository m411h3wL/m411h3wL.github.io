# m411h3wL - Portfolio & Blog

This is my personal portfolio and blog website built with HTML, CSS, and vanilla JavaScript.

## Features

- 🏠 Clean, modern homepage
- 📁 Projects showcase section
- 📝 Blog with multiple posts
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🎨 Beautiful gradient design

## Structure

```
.
├── index.html          # Main homepage
├── blog.html           # Blog listing page
├── styles.css          # Main stylesheet
├── blog-styles.css     # Blog-specific styles
├── posts/
│   ├── first-post.html # Example blog post
│   └── post-styles.css # Blog post styles
└── README.md           # This file
```

## How to Use

1. **Edit Your Content**
   - Update `index.html` with your information
   - Edit the hero section, projects, and about me
   - Add your social links in the footer

2. **Add Projects**
   - Edit the projects section in `index.html`
   - Add project cards with descriptions and links

3. **Write Blog Posts**
   - Create new `.html` files in the `posts/` directory
   - Follow the structure of `first-post.html`
   - Add links to them in `blog.html`

4. **Customize Styling**
   - Edit `styles.css` to change colors, fonts, and layouts
   - Update the CSS variables at the top for quick theme changes

## Deployment

This site is deployed on GitHub Pages at `https://m411h3wL.github.io`

To update:
1. Make changes locally or in GitHub
2. Push to the `main` branch
3. Your site updates automatically!

## Customization Guide

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #2563eb;       /* Change this to your favorite color */
    --primary-dark: #1e40af;
    --secondary: #64748b;
    --light: #f8fafc;
    --dark: #1e293b;
    --border: #e2e8f0;
}
```

### Update Social Links
Find the footer section and update the links:
```html
<a href="https://your-github.com" target="_blank">GitHub</a>
```

## Tips

- Keep content fresh - update your blog regularly
- Use clear, descriptive project titles and descriptions
- Keep the design clean and readable
- Test on mobile devices to ensure responsiveness

Happy coding! 🚀