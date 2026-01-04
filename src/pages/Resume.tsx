import Layout from "@/components/Layout";

const Resume = () => {
  // Replace this URL with your OneDrive PDF embed link
  // To get the embed link: Share your PDF on OneDrive, get the embed code, and extract the src URL
  const resumeUrl = "";

  return (
    <Layout>
      <article className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          resume
        </h1>

        {resumeUrl ? (
          <div className="w-full">
            <iframe
              src={resumeUrl}
              className="w-full h-[80vh] border border-border rounded"
              title="Resume PDF"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              to display your resume, you'll need to add your OneDrive PDF embed link.
            </p>
            <div className="p-4 bg-secondary rounded border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">how to get your embed link:</strong>
              </p>
              <ol className="list-decimal list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>go to OneDrive and open your resume PDF</li>
                <li>click "Share" → "Embed"</li>
                <li>copy the embed code and extract the URL from the src attribute</li>
                <li>paste that URL in the resumeUrl variable in Resume.tsx</li>
              </ol>
            </div>
            <p className="text-muted-foreground">
              alternatively, you can{" "}
              <a
                href="mailto:hello@example.com"
                className="text-accent hover:underline"
              >
                email me
              </a>{" "}
              for a copy of my resume.
            </p>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default Resume;
