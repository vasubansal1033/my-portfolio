# Blog Management System

This directory contains markdown files for blog posts. Each blog post is a separate `.md` file with frontmatter metadata.

## Creating a New Blog Post

1. Create a new `.md` file in this directory
2. Use the filename as the URL slug (e.g., `my-awesome-post.md` → `/blog/my-awesome-post`)
3. Add frontmatter at the top of the file

## Frontmatter Fields

```yaml
---
title: "Your Blog Post Title"                    # Required
excerpt: "A brief description of the post"       # Required
author: "Vasu Bansal"                            # Optional (defaults to "Vasu Bansal")
publishedAt: "2024-01-15T10:00:00Z"             # Required (ISO 8601 format)
updatedAt: "2024-01-15T10:00:00Z"               # Optional (defaults to publishedAt)
tags: ["React", "JavaScript", "Tutorial"]        # Optional (array of strings)
category: "web-development"                       # Optional (string)
featured: true                                   # Optional (boolean, defaults to false)
published: true                                  # Optional (boolean, defaults to true)
readTime: 8                                      # Optional (auto-calculated if not provided)
coverImage: "https://example.com/image.jpg"     # Optional (URL to cover image)
metaTitle: "SEO-optimized title"                 # Optional (defaults to title)
metaDescription: "SEO description"               # Optional (defaults to excerpt)
keywords: ["SEO", "keywords"]                   # Optional (array of strings for SEO)
---
```

## Example Blog Post

```markdown
---
title: "Getting Started with Next.js"
excerpt: "Learn how to build modern web applications with Next.js and React"
author: "Vasu Bansal"
publishedAt: "2024-01-15T10:00:00Z"
tags: ["Next.js", "React", "Web Development"]
category: "web-development"
featured: true
published: true
coverImage: "https://images.unsplash.com/photo-1234567890"
---

# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier...

## Installation

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Features

- Server-side rendering
- Static site generation
- API routes
- And much more!
```

## Categories

Available categories (you can add new ones):
- `web-development`
- `react-nextjs`
- `devops-tools`
- `career-growth`

## Publishing Workflow

1. **Draft**: Set `published: false` to keep posts as drafts
2. **Review**: Edit the markdown file content
3. **Publish**: Set `published: true` to make the post live
4. **Update**: Modify the `updatedAt` field when making changes

## Image Guidelines

- Use high-quality images for `coverImage`
- Recommended size: 800x400px or similar aspect ratio
- Use services like Unsplash for stock photos
- Ensure images are web-optimized (< 500KB)

## SEO Best Practices

1. Write descriptive titles (50-60 characters)
2. Create compelling excerpts (150-160 characters)
3. Use relevant tags and keywords
4. Add alt text for images in content
5. Use proper heading hierarchy (H1, H2, H3...)

## Markdown Features Supported

- **Headers**: # ## ### #### ##### ######
- **Code blocks**: \`\`\`language
- **Inline code**: \`code\`
- **Links**: [text](url)
- **Images**: ![alt](url)
- **Lists**: - item or 1. item
- **Bold**: **text**
- **Italic**: *text*
- **Blockquotes**: > text

## Syntax Highlighting

Code blocks support syntax highlighting for many languages:

\`\`\`javascript
const hello = () => {
  console.log("Hello, World!");
};
\`\`\`

\`\`\`typescript
interface User {
  name: string;
  email: string;
}
\`\`\`

## File Organization

- Keep filenames lowercase with hyphens
- Use descriptive filenames that match your post title
- Example: `building-scalable-react-applications.md`
