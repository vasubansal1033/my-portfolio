import { Calendar, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog-server';
import BlogClientWrapper from './BlogClientWrapper';

export default function Blog() {
  // Get featured posts or latest 3 posts
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const displayPosts = featuredPosts.length > 0 
    ? featuredPosts.slice(0, 3) 
    : allPosts.slice(0, 3);

  return (
    <BlogClientWrapper posts={displayPosts} />
  );
}