'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Eye, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts, blogCategories, BlogPost } from '@/lib/blog';

export default function BlogAdminPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Vasu Bansal',
    category: 'web-development',
    tags: [],
    featured: false,
    published: false,
    coverImage: '',
  });

  const handleCreateNew = () => {
    setIsCreating(true);
    setSelectedPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Vasu Bansal',
      category: 'web-development',
      tags: [],
      featured: false,
      published: false,
      coverImage: '',
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsCreating(false);
    setSelectedPost(post);
    setFormData(post);
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    console.log('Saving post:', formData);
    setIsCreating(false);
    setSelectedPost(null);
  };

  const handleDelete = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      // In a real app, this would delete from database
      console.log('Deleting post:', postId);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const addTag = (tag: string) => {
    if (tag && !formData.tags?.includes(tag)) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tag],
      });
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter(tag => tag !== tagToRemove) || [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-gray-600 mt-2">Create and manage your blog posts</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Post
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Posts List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">All Posts ({blogPosts.length})</h2>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedPost?.id === post.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleEdit(post)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{post.title}</h3>
                      <div className="flex space-x-1 ml-2">
                        {post.featured && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Featured</span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded ${
                          post.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime} min
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {(isCreating || selectedPost) ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {isCreating ? 'Create New Post' : 'Edit Post'}
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                    {selectedPost && (
                      <button
                        onClick={() => handleDelete(selectedPost.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <form className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter post title..."
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                    <input
                      type="text"
                      value={formData.slug || ''}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="post-url-slug"
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <textarea
                      value={formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief description of the post..."
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category || ''}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {blogCategories.map((category) => (
                        <option key={category.id} value={category.slug}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Add tag and press Enter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addTag(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                  </div>

                  {/* Cover Image */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL</label>
                    <input
                      type="url"
                      value={formData.coverImage || ''}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content (Markdown)</label>
                    <textarea
                      value={formData.content || ''}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={20}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      placeholder="Write your post content in Markdown..."
                    />
                  </div>

                  {/* Options */}
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.featured || false}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="mr-2"
                      />
                      Featured Post
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.published || false}
                        onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                        className="mr-2"
                      />
                      Published
                    </label>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Edit2 className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a post to edit</h3>
                <p className="text-gray-600 mb-6">Choose a post from the list or create a new one to get started.</p>
                <button
                  onClick={handleCreateNew}
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Create New Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
