import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Post not found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            ← back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  // Simple markdown to HTML conversion
  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("# ")) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-bold text-foreground mt-8 first:mt-0">
            {trimmed.slice(2)}
          </h1>
        );
      } else if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="text-xl md:text-2xl font-semibold text-foreground mt-8">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith("- ")) {
        listItems.push(trimmed.slice(2));
      } else if (trimmed === "") {
        flushList();
      } else {
        flushList();
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <Layout>
      <article className="space-y-6">
        <Link to="/blog" className="text-accent hover:underline text-sm">
          ← back to blog
        </Link>

        <time className="block text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="space-y-4">{renderMarkdown(post.content)}</div>
      </article>
    </Layout>
  );
};

export default BlogPost;
