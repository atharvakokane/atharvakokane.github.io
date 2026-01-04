export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    date: "2026-01-04",
    excerpt: "This is my first blog post. I'll be sharing thoughts, ideas, and things I learn along the way.",
    content: `# Welcome to my blog

This is my first blog post. I'll be sharing thoughts, ideas, and things I learn along the way.

## What to expect

- Technical deep dives
- Project updates  
- Random musings

Stay tuned for more content!`
  },
  {
    slug: "building-in-public",
    title: "Building in public",
    date: "2026-01-03",
    excerpt: "I've always believed in the power of building in public. Here's why.",
    content: `# Building in public

I've always believed in the power of building in public. Here's why.

## Transparency builds trust

When you share your process, people connect with your journey, not just the end result.

## You learn faster

Getting feedback early and often accelerates your growth exponentially.

## It's more fun

Building alone is boring. Building with an audience keeps you motivated.`
  }
];
