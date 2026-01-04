export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Import all markdown files from the blog folder
const blogFiles = import.meta.glob('/src/content/blog/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
}) as Record<string, string>;

function parseFrontmatter(content: string): { metadata: Record<string, string>; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, body: content };
  }

  const frontmatter = match[1];
  const body = match[2];
  
  const metadata: Record<string, string> = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim();
    }
  });

  return { metadata, body };
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogFiles)) {
    const slug = path.replace('/src/content/blog/', '').replace('.md', '');
    const { metadata, body } = parseFrontmatter(content);

    posts.push({
      slug,
      title: metadata.title || slug,
      date: metadata.date || '',
      excerpt: metadata.excerpt || '',
      content: body.trim(),
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(post => post.slug === slug);
}