import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, markdownToHtml } from '@/lib/markdown';
import type { Metadata } from 'next';

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'post not found' };
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <article className="space-y-12">
      <header className="animate-fade-in-up">
        <div className="w-12 h-px bg-border mb-4" />
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-4xl font-normal text-white tracking-tight">{post.title}</h1>
          <Link
            href="/blog/"
            className="text-foreground hover:text-accent transition-colors duration-300 text-sm tracking-wide shrink-0"
          >
            all posts
          </Link>
        </div>
        <p className="text-muted text-sm tracking-wide mt-2">
          {post.date} · {post.readingTime}
        </p>
      </header>

      <div
        className="prose prose-invert prose-sm max-w-none blog-post-content animate-fade-in-delay-1 opacity-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
