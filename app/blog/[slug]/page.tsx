'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Link2 } from 'lucide-react';
import Link from 'next/link';
import { getBlogPost, blogPosts } from '@/lib/blog';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug}`;
  
  const shareOnTwitter = () => {
    const text = `${post.title} by ${post.author}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Hero Image */}
        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        )}

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime} min read</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-500">By</span>
              <span className="ml-1 font-medium text-gray-900">{post.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <span className="text-gray-600 font-medium">Share:</span>
            <button
              onClick={shareOnTwitter}
              className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="flex items-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Link2 className="w-4 h-4" />
              Copy Link
            </button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
            <p className="text-gray-600">
              <strong>{post.author}</strong> is a passionate full-stack developer with expertise in modern web technologies. 
              He enjoys sharing knowledge through writing and contributing to the developer community.
            </p>
          </div>
        </motion.footer>
      </article>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
