// Admin Panel JavaScript

const ADMIN_PASSWORD = 'admin123'; // Change this to your desired password
const DRAFTS_KEY = 'blogDrafts';
const POSTS_KEY = 'blogPosts';

// Check if user is logged in on page load
window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn) {
        showAdminPanel();
    }
});

// Password verification
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('loginError');

    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoggedIn', 'true');
        document.getElementById('passwordInput').value = '';
        errorMsg.style.display = 'none';
        showAdminPanel();
    } else {
        errorMsg.textContent = 'Incorrect password. Try again.';
        errorMsg.style.display = 'block';
        document.getElementById('passwordInput').value = '';
    }
}

// Allow Enter key to submit password
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

// Show admin panel
function showAdminPanel() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-section').style.display = 'block';
    loadDraft();
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLoggedIn');
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('admin-section').style.display = 'none';
        document.getElementById('passwordInput').value = '';
        clearForm();
    }
}

// Clear form
function clearForm() {
    document.getElementById('postTitle').value = '';
    document.getElementById('postExcerpt').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('postCategory').value = 'Tutorial';
    document.getElementById('postReadTime').value = '';
}

// Generate template
function generateTemplate() {
    const template = `<h2>Introduction</h2>
<p>Start your post with an engaging introduction.</p>

<h2>Main Section 1</h2>
<p>Provide detailed information about your topic.</p>

<ul>
    <li>Key point 1</li>
    <li>Key point 2</li>
    <li>Key point 3</li>
</ul>

<h2>Main Section 2</h2>
<p>Continue with more insights and examples.</p>

<ol>
    <li>First step or point</li>
    <li>Second step or point</li>
    <li>Third step or point</li>
</ol>

<h2>Conclusion</h2>
<p>Wrap up your post with a summary and call to action.</p>`;

    document.getElementById('postContent').value = template;
    document.getElementById('postContent').focus();
}

// Save draft to local storage
function saveDraft() {
    const draft = {
        title: document.getElementById('postTitle').value,
        excerpt: document.getElementById('postExcerpt').value,
        category: document.getElementById('postCategory').value,
        readTime: document.getElementById('postReadTime').value,
        content: document.getElementById('postContent').value,
        savedAt: new Date().toLocaleString()
    };
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(draft));
}

// Load draft from local storage
function loadDraft() {
    const draft = JSON.parse(localStorage.getItem(DRAFTS_KEY));
    if (draft) {
        document.getElementById('postTitle').value = draft.title || '';
        document.getElementById('postExcerpt').value = draft.excerpt || '';
        document.getElementById('postCategory').value = draft.category || 'Tutorial';
        document.getElementById('postReadTime').value = draft.readTime || '';
        document.getElementById('postContent').value = draft.content || '';
    }
}

// Auto-save draft every 30 seconds
setInterval(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn && document.getElementById('postTitle').value) {
        saveDraft();
    }
}, 30000);

// Preview post
function previewPost() {
    const title = document.getElementById('postTitle').value;
    const excerpt = document.getElementById('postExcerpt').value;
    const category = document.getElementById('postCategory').value;
    const readTime = document.getElementById('postReadTime').value;
    const content = document.getElementById('postContent').value;

    if (!title || !content) {
        alert('Please fill in the title and content fields.');
        return;
    }

    const previewHTML = `
        <div class="post-header">
            <h1>${escapeHtml(title)}</h1>
            <div class="post-meta">
                <span class="date">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span class="reading-time">${escapeHtml(readTime)} min read</span>
            </div>
        </div>
        <div class="post-content">
            ${content}
        </div>
        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #e2e8f0;">
            <p><strong>Category:</strong> ${escapeHtml(category)}</p>
            <p><strong>Excerpt:</strong> ${escapeHtml(excerpt)}</p>
        </div>
    `;

    document.getElementById('preview-body').innerHTML = previewHTML;
    document.getElementById('preview-modal').style.display = 'flex';
}

// Close preview
function closePreview() {
    document.getElementById('preview-modal').style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('preview-modal');
    if (e.target === modal) {
        closePreview();
    }
});

// Create post
function createPost() {
    const title = document.getElementById('postTitle').value;
    const excerpt = document.getElementById('postExcerpt').value;
    const category = document.getElementById('postCategory').value;
    const readTime = document.getElementById('postReadTime').value;
    const content = document.getElementById('postContent').value;

    if (!title || !excerpt || !content || !readTime) {
        alert('Please fill in all fields.');
        return;
    }

    // Generate filename from title
    const filename = title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') + '.html';

    // Generate the full HTML post file
    const postHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)} - m411h3wL</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="post-styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="/" class="logo">m411h3wL</a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="../blog.html">Blog</a></li>
                <li><a href="/#about">About</a></li>
            </ul>
        </div>
    </nav>

    <article class="blog-post">
        <div class="container">
            <div class="post-header">
                <h1>${escapeHtml(title)}</h1>
                <div class="post-meta">
                    <span class="date">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span class="reading-time">${escapeHtml(readTime)} min read</span>
                </div>
            </div>

            <div class="post-content">
                ${content}
            </div>

            <div class="post-footer">
                <a href="../blog.html" class="back-link">← Back to Blog</a>
            </div>
        </div>
    </article>

    <footer>
        <div class="container">
            <p>&copy; 2026 m411h3wL. All rights reserved.</p>
            <div class="social-links">
                <a href="https://github.com/m411h3wL" target="_blank">GitHub</a>
                <a href="https://x.com/mattslindley" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/matt-lindley/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </footer>
</body>
</html>`;

    // Generate the blog card HTML for blog.html
    const blogCardHTML = `<article class="blog-card">
    <div class="blog-header">
        <h2><a href="posts/${filename}">${escapeHtml(title)}</a></h2>
        <span class="date">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    </div>
    <p class="excerpt">${escapeHtml(excerpt)}</p>
    <div class="post-meta">
        <span class="category">${escapeHtml(category)}</span>
        <a href="posts/${filename}" class="read-more">Read More →</a>
    </div>
</article>`;

    // Save post to local storage
    const post = {
        title,
        excerpt,
        category,
        readTime,
        content,
        filename,
        postHTML,
        blogCardHTML,
        createdAt: new Date().toLocaleString(),
        slug: filename.replace('.html', '')
    };

    const posts = JSON.parse(localStorage.getItem(POSTS_KEY)) || [];
    posts.unshift(post); // Add to beginning
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));

    // Clear draft
    localStorage.removeItem(DRAFTS_KEY);
    clearForm();

    // Show success message
    showSuccessMessage(title, filename, postHTML, blogCardHTML);
}

// Show success message with instructions
function showSuccessMessage(title, filename, postHTML, blogCardHTML) {
    const message = `
✅ <strong>Post created successfully!</strong>

<strong>Post Title:</strong> ${title}
<strong>Filename:</strong> ${filename}

<strong>📋 Next Steps:</strong>

1. <strong>Create the post file:</strong>
   - Go to your GitHub repo
   - Click "Add file" → "Create new file"
   - Name it: <code>posts/${filename}</code>
   - Paste the HTML below into the file
   - Commit with message: "Add blog post: ${title}"

2. <strong>Update blog.html:</strong>
   - Go to blog.html in your repo
   - Find the closing &lt;/div class="posts-list"&gt; tag
   - Add the blog card HTML below BEFORE that closing tag

<strong>📄 Post HTML (paste into posts/${filename}):</strong>
<textarea style="width: 100%; height: 400px; margin: 1rem 0; font-family: monospace; font-size: 0.8rem;">${postHTML}</textarea>

<strong>🏷️ Blog Card HTML (add to blog.html):</strong>
<textarea style="width: 100%; height: 200px; margin: 1rem 0; font-family: monospace; font-size: 0.8rem;">${blogCardHTML}</textarea>
    `;

    alert('Post created! Check below for the HTML code to add to your repository.\n\nThe HTML code has been copied to your clipboard. You can also scroll down to see the code to paste.');
    
    // Copy to clipboard
    const html = postHTML + '\n\n---\n\n' + blogCardHTML;
    navigator.clipboard.writeText(html).catch(err => console.error('Failed to copy:', err));

    // Show modal with instructions
    const modal = document.getElementById('preview-modal');
    document.getElementById('preview-body').innerHTML = message;
    modal.style.display = 'flex';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
