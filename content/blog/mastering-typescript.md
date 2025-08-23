---
title: "Mastering TypeScript: From Basics to Advanced Patterns"
excerpt: "A comprehensive guide to TypeScript that covers everything from basic types to advanced patterns like conditional types and mapped types."
author: "Vasu Bansal"
publishedAt: "2024-01-10T14:30:00Z"
updatedAt: "2024-01-10T14:30:00Z"
tags: ["TypeScript", "JavaScript", "Types", "Programming"]
category: "web-development"
featured: false
published: true
readTime: 12
coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
metaTitle: "Mastering TypeScript: From Basics to Advanced Patterns"
metaDescription: "A comprehensive guide to TypeScript covering basic types to advanced patterns like conditional and mapped types."
keywords: ["TypeScript", "JavaScript", "Programming", "Types", "Web Development"]
---

# Mastering TypeScript: From Basics to Advanced Patterns

TypeScript has become an essential tool for modern web development. This guide will take you from the basics to advanced patterns that will make you a TypeScript expert.

## Why TypeScript?

TypeScript brings static type checking to JavaScript, which helps catch errors early and improves developer experience through better IDE support.

## Basic Types

Let's start with the fundamental types:

```typescript
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
```

## Advanced Patterns

### Conditional Types
```typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { data: number }
```

### Mapped Types
```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

## Real-World Example

Here's how you might type a React component with TypeScript:

```typescript
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
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

## Best Practices

1. **Start with strict mode**: Enable strict TypeScript checking
2. **Use interfaces for object shapes**: Prefer interfaces over types for object definitions
3. **Leverage utility types**: Use built-in utility types like Partial, Pick, Omit
4. **Type your API responses**: Always type your API responses for better error handling

TypeScript is a powerful tool that, when used correctly, can significantly improve your development experience and code quality.
