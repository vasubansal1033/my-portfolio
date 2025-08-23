import { getAllPosts, getAllTags, getAllCategories, getFeaturedPosts } from '@/lib/blog-server';
import BlogPageClient from '@/components/BlogPageClient';

export default function BlogPage() {
  // Get all data on the server
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  const allCategories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  return (
    <BlogPageClient 
      posts={allPosts}
      tags={allTags}
      categories={allCategories}
      featuredPosts={featuredPosts}
    />
  );
}