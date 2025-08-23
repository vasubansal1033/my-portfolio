import { NextResponse } from 'next/server';
import { getAllPosts, getFeaturedPosts, getAllTags, getAllCategories, searchPosts, getPostsByCategory, getPostsByTag } from '@/lib/blog-server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const query = searchParams.get('query');
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');

  try {
    switch (action) {
      case 'featured':
        return NextResponse.json(getFeaturedPosts());
      case 'tags':
        return NextResponse.json(getAllTags());
      case 'categories':
        return NextResponse.json(getAllCategories());
      case 'search':
        if (query) {
          return NextResponse.json(searchPosts(query));
        }
        return NextResponse.json([]);
      case 'by-category':
        if (category) {
          return NextResponse.json(getPostsByCategory(category));
        }
        return NextResponse.json([]);
      case 'by-tag':
        if (tag) {
          return NextResponse.json(getPostsByTag(tag));
        }
        return NextResponse.json([]);
      default:
        return NextResponse.json(getAllPosts());
    }
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json({ error: 'Failed to fetch blog data' }, { status: 500 });
  }
}
