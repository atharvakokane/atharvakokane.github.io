import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

const RECENT_POSTS_COUNT = 5;

export default function HomePage() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, RECENT_POSTS_COUNT);

  return (
    <div className="space-y-24">
      <section className="space-y-6 animate-fade-in-up">
        <div className="w-12 h-px bg-border mb-8" />
        <h1 className="text-4xl md:text-5xl font-normal text-white tracking-tight">
          atharva kokane
        </h1>
        <p className="text-foreground leading-relaxed max-w-xl text-lg">
          hi. i write about code, projects, and things i find interesting.
          minimalist by design.
        </p>
      </section>

      <section className="space-y-10 animate-fade-in-delay-2 opacity-0">
        <div className="flex items-center gap-4">
          <span className="text-muted text-sm tracking-widest">recent posts</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <ul className="space-y-1">
          {recentPosts.length === 0 ? (
            <li className="text-muted py-4">no posts yet.</li>
          ) : (
            recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="block py-4 border-b border-border/50 hover:border-accent/30 transition-colors duration-300 group"
                >
                  <span className="text-white group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </span>
                  <span className="text-muted text-sm ml-2">
                    {post.date} · {post.readingTime}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
        {allPosts.length > RECENT_POSTS_COUNT && (
          <Link
            href="/blog/"
            className="inline-block mt-4 text-foreground hover:text-accent transition-colors duration-300 text-sm tracking-wide"
          >
            view all posts
          </Link>
        )}
      </section>
    </div>
  );
}
