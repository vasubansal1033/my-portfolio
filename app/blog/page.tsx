'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Tag, Filter } from 'lucide-react';
import Link from 'next/link';
import { blogPosts, blogCategories, getAllTags, searchPosts, getPostsByCategory, getPostsByTag } from '@/lib/blog';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const allTags = getAllTags();

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter(post => post.published);

    // Apply search filter
    if (searchQuery) {
      posts = searchPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTag) {
      posts = posts.filter(post => post.tags.includes(selectedTag));
    }

    // Apply sorting
    posts.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'readTime':
          return a.readTime - b.readTime;
        default:
          return 0;
      }
    });

    return posts;
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const featuredPost = blogPosts.find(post => post.featured && post.published);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Thoughts, tutorials, and insights about web development, technology, and the developer journey.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="md:flex">
                  {featuredPost.coverImage && (
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(featuredPost.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime} min read
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {blogCategories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="readTime">Shortest Read</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {post.coverImage && (
                      <div className="relative overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Get notified when I publish new articles about web development and technology.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
