import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getPostBySlug,
  getAllPostSlugs,
  markdownToHtml,
  getAllPosts,
} from '@/lib/markdown';
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
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  return (
    <article className="space-y-12">
      <header className="space-y-4 animate-fade-in-up">
        <div className="w-12 h-px bg-border mb-4" />
        <h1 className="text-4xl font-normal text-white tracking-tight">{post.title}</h1>
        <p className="text-muted text-sm tracking-wide">
          {post.date} · {post.readingTime}
        </p>
      </header>

      <div
        className="prose prose-invert prose-sm max-w-none prose-p:text-foreground prose-headings:text-white prose-a:text-foreground prose-a:hover:text-accent prose-code:text-foreground prose-pre:bg-[#171717] prose-pre:border prose-pre:border-border animate-fade-in-delay-1 opacity-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <nav className="flex flex-wrap gap-6 pt-8 border-t border-border">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}/`}
            className="text-foreground hover:text-accent transition-colors duration-300"
          >
            ← {prevPost.title}
          </Link>
        ) : (
          <span />
        )}
        <Link
          href="/blog/"
          className="text-foreground hover:text-accent transition-colors duration-300"
        >
          all posts
        </Link>
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}/`}
            className="text-foreground hover:text-accent transition-colors duration-300"
          >
            {nextPost.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
