'use client';

import { Twitter, Linkedin, Link2 } from 'lucide-react';
import { BlogPost } from '@/lib/markdown-blog';

interface ShareButtonsProps {
  post: BlogPost;
}

export default function ShareButtons({ post }: ShareButtonsProps) {
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
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="flex items-center gap-4">
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
  );
}
