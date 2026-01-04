import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getAllPosts } from "@/lib/blog";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <Layout>
      <article className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          blog
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed">
          thoughts, ideas, and things i've learned.
        </p>

        <div className="space-y-8 pt-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="space-y-2">
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl font-semibold text-foreground group-hover:opacity-60 transition-opacity">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default Blog;