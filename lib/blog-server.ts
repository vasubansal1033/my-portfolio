import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  featured: boolean;
  published: boolean;
  readTime: number;
  coverImage?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

const postsDirectory = 'content/blog'

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name: string) => name.endsWith('.md'))
      .map((fileName: string) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          content,
          author: data.author || 'Vasu Bansal',
          publishedAt: data.publishedAt || new Date().toISOString(),
          updatedAt: data.updatedAt || data.publishedAt || new Date().toISOString(),
          tags: data.tags || [],
          category: data.category || 'general',
          featured: data.featured || false,
          published: data.published !== false,
          readTime: data.readTime || calculateReadTime(content),
          coverImage: data.coverImage,
          seo: {
            metaTitle: data.metaTitle || data.title || 'Blog Post',
            metaDescription: data.metaDescription || data.excerpt || '',
            keywords: data.keywords || data.tags || [],
          },
        } as BlogPost;
      })
      .filter((post: BlogPost) => post.published)
      .sort((a: BlogPost, b: BlogPost) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return allPostsData;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const posts = getAllPosts();
    return posts.find((post: BlogPost) => post.slug === slug) || null;
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post: BlogPost) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post: BlogPost) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post: BlogPost) => post.tags.includes(tag));
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post: BlogPost) => {
    post.tags.forEach((tag: string) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();
  posts.forEach((post: BlogPost) => {
    categories.add(post.category);
  });
  return Array.from(categories).sort();
}

export function searchPosts(query: string): BlogPost[] {
  const posts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return posts.filter((post: BlogPost) => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag: string) => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
