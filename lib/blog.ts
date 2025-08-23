export interface BlogPost {
  id: string;
  title: string;
  slug: string;
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

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

// Sample blog data - In a real app, this would come from a database or CMS
export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Frontend and backend development tutorials',
    color: 'blue',
  },
  {
    id: '2',
    name: 'React & Next.js',
    slug: 'react-nextjs',
    description: 'React ecosystem tips and tutorials',
    color: 'cyan',
  },
  {
    id: '3',
    name: 'DevOps & Tools',
    slug: 'devops-tools',
    description: 'Development tools and deployment strategies',
    color: 'green',
  },
  {
    id: '4',
    name: 'Career & Growth',
    slug: 'career-growth',
    description: 'Professional development insights',
    color: 'purple',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications: Best Practices for 2024',
    slug: 'building-scalable-react-applications-2024',
    excerpt: 'Learn the essential patterns and practices for building maintainable React applications that scale with your team and user base.',
    content: `
# Building Scalable React Applications: Best Practices for 2024

React has evolved significantly over the years, and so have the best practices for building scalable applications. In this comprehensive guide, we'll explore the modern approaches to structuring React applications that can grow with your team and user base.

## Project Structure

A well-organized project structure is the foundation of any scalable React application. Here's a recommended structure:

\`\`\`
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form components
│   └── layout/       # Layout components
├── pages/            # Page components
├── hooks/            # Custom hooks
├── lib/              # Utilities and configurations
├── stores/           # State management
└── types/            # TypeScript type definitions
\`\`\`

## Component Design Principles

### 1. Single Responsibility Principle
Each component should have one clear purpose. This makes components easier to test, maintain, and reuse.

### 2. Composition over Inheritance
Use composition to build complex UIs from simple components.

\`\`\`tsx
// Good: Composition
const UserCard = ({ user, actions }) => (
  <Card>
    <UserAvatar user={user} />
    <UserInfo user={user} />
    <CardActions>{actions}</CardActions>
  </Card>
);

// Better than inheritance-based approaches
\`\`\`

## State Management

Choose the right state management solution based on your needs:

- **Local State**: useState, useReducer for component-level state
- **Server State**: TanStack Query (React Query) for server data
- **Global State**: Zustand or Redux Toolkit for complex global state

## Performance Optimization

### 1. Code Splitting
Use React.lazy() and Suspense for route-based code splitting:

\`\`\`tsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 2. Memoization
Use React.memo, useMemo, and useCallback strategically:

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => 
    expensiveProcessing(data), [data]
  );
  
  return <div>{processedData}</div>;
});
\`\`\`

## Testing Strategy

Implement a comprehensive testing strategy:

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. Focus on maintainable code structure, efficient state management, and comprehensive testing to ensure your application can grow sustainably.
    `,
    author: 'Vasu Bansal',
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    tags: ['React', 'JavaScript', 'Best Practices', 'Scalability'],
    category: 'react-nextjs',
    featured: true,
    published: true,
    readTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    seo: {
      metaTitle: 'Building Scalable React Applications: Best Practices for 2024',
      metaDescription: 'Learn essential patterns and practices for building maintainable React applications that scale with your team and user base.',
      keywords: ['React', 'Scalability', 'Best Practices', 'JavaScript', 'Frontend'],
    },
  },
  {
    id: '2',
    title: 'Mastering TypeScript: From Basics to Advanced Patterns',
    slug: 'mastering-typescript-basics-to-advanced',
    excerpt: 'A comprehensive guide to TypeScript that covers everything from basic types to advanced patterns like conditional types and mapped types.',
    content: `
# Mastering TypeScript: From Basics to Advanced Patterns

TypeScript has become an essential tool for modern web development. This guide will take you from the basics to advanced patterns that will make you a TypeScript expert.

## Why TypeScript?

TypeScript brings static type checking to JavaScript, which helps catch errors early and improves developer experience through better IDE support.

## Basic Types

Let's start with the fundamental types:

\`\`\`typescript
// Primitive types
let name: string = "Vasu";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Objects
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe"
};
\`\`\`

## Advanced Patterns

### Conditional Types
\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { data: number }
\`\`\`

### Mapped Types
\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};
\`\`\`

## Real-World Example

Here's how you might type a React component with TypeScript:

\`\`\`typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  onClick,
  children,
  disabled = false
}) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
\`\`\`

## Best Practices

1. **Start with strict mode**: Enable strict TypeScript checking
2. **Use interfaces for object shapes**: Prefer interfaces over types for object definitions
3. **Leverage utility types**: Use built-in utility types like Partial, Pick, Omit
4. **Type your API responses**: Always type your API responses for better error handling

TypeScript is a powerful tool that, when used correctly, can significantly improve your development experience and code quality.
    `,
    author: 'Vasu Bansal',
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    tags: ['TypeScript', 'JavaScript', 'Types', 'Programming'],
    category: 'web-development',
    featured: false,
    published: true,
    readTime: 12,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    seo: {
      metaTitle: 'Mastering TypeScript: From Basics to Advanced Patterns',
      metaDescription: 'A comprehensive guide to TypeScript covering basic types to advanced patterns like conditional and mapped types.',
      keywords: ['TypeScript', 'JavaScript', 'Programming', 'Types', 'Web Development'],
    },
  },
  {
    id: '3',
    title: 'Docker for Developers: Containerizing Your Development Environment',
    slug: 'docker-for-developers-containerizing-development',
    excerpt: 'Learn how to use Docker to create consistent, reproducible development environments that work across different machines and operating systems.',
    content: `
# Docker for Developers: Containerizing Your Development Environment

Docker has revolutionized how we think about development environments. No more "it works on my machine" – with Docker, you can ensure consistency across all environments.

## What is Docker?

Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers.

## Benefits for Developers

1. **Consistency**: Same environment everywhere
2. **Isolation**: No conflicts between projects
3. **Portability**: Works on any machine with Docker
4. **Scalability**: Easy to scale applications

## Getting Started

### Basic Dockerfile
\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production=false

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
\`\`\`

### Docker Compose for Full Stack Apps
\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

## Best Practices

### 1. Multi-stage Builds
Use multi-stage builds to reduce image size:

\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]
\`\`\`

### 2. .dockerignore
Always use .dockerignore to exclude unnecessary files:

\`\`\`
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
coverage
.nyc_output
\`\`\`

## Common Commands

\`\`\`bash
# Build image
docker build -t myapp .

# Run container
docker run -p 3000:3000 myapp

# View running containers
docker ps

# View logs
docker logs <container-id>

# Execute commands in container
docker exec -it <container-id> sh
\`\`\`

## Conclusion

Docker is an essential tool for modern development. It solves many common development problems and makes deploying applications much more predictable and reliable.
    `,
    author: 'Vasu Bansal',
    publishedAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    tags: ['Docker', 'DevOps', 'Containerization', 'Development'],
    category: 'devops-tools',
    featured: false,
    published: true,
    readTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335a?w=800&q=80',
    seo: {
      metaTitle: 'Docker for Developers: Containerizing Your Development Environment',
      metaDescription: 'Learn how to use Docker to create consistent, reproducible development environments for your projects.',
      keywords: ['Docker', 'DevOps', 'Containerization', 'Development Environment'],
    },
  },
];

// Utility functions
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured && post.published);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.category === categorySlug && post.published);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag) && post.published);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    if (post.published) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => {
    if (!post.published) return false;
    
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
