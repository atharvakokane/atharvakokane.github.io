import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

const POSTS_PER_PAGE = 10;

export function generateStaticParams() {
  const posts = getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE) || 1;
  const pageCount = Math.max(1, totalPages - 1);
  return Array.from({ length: pageCount }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default function BlogPagePage({
  params,
}: {
  params: { page: string };
}) {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE) || 1;
  const currentPage = parseInt(params.page, 10);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="space-y-16">
      <header className="animate-fade-in-up">
        <div className="w-12 h-px bg-border mb-8" />
        <h1 className="text-4xl font-normal text-white tracking-tight">blog</h1>
        <p className="text-muted mt-2 tracking-wide">page {currentPage}</p>
      </header>

      <ul className="space-y-1">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}/`}
              className="block py-8 border-b border-border/50 hover:border-accent/30 transition-colors duration-300 group"
            >
              <h2 className="text-xl text-white group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-muted text-sm mt-2">
                {post.date} · {post.readingTime}
              </p>
              {post.excerpt && (
                <p className="text-foreground mt-3 leading-relaxed">{post.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <nav className="flex gap-6 items-center pt-4">
        <Link
          href={currentPage === 2 ? '/blog/' : `/blog/page/${currentPage - 1}/`}
          className="text-foreground hover:text-accent transition-colors duration-300"
        >
          previous
        </Link>
        <span className="text-muted text-sm tracking-wide">
          page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <Link
            href={`/blog/page/${currentPage + 1}/`}
            className="text-foreground hover:text-accent transition-colors duration-300"
          >
            next
          </Link>
        )}
      </nav>
    </div>
  );
}
