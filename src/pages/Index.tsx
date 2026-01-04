import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <article className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          hi, i'm atharva.
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed">
          i'm just a person that loves building things and sharing ideas.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          i spend most of my time working on projects that interest me, 
          writing about what i learn, and exploring new technologies.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          currently focused on building useful tools and experimenting 
          with new ideas. check out my{" "}
          <a href="/blog" className="link-hover">
            blog
          </a>{" "}
          to see what i've been thinking about lately.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          you can find my work history and experience on my{" "}
          <a href="/resume" className="link-hover">
            resume
          </a>
          .
        </p>

        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            feel free to reach out —{" "}
            <a href="mailto:hello@example.com" className="link-hover">
              hello@example.com
            </a>
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
