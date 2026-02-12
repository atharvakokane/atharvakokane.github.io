export const metadata = {
  title: 'contact',
  description: 'get in touch',
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <header className="animate-fade-in-up">
        <div className="w-12 h-px bg-border mb-8" />
        <h1 className="text-4xl font-normal text-white tracking-tight">contact</h1>
        <p className="text-muted mt-2 tracking-wide">get in touch</p>
      </header>

      <section className="space-y-10 animate-fade-in-delay-1 opacity-0">
        <p className="text-foreground leading-relaxed text-lg max-w-xl">
          feel free to reach out. i&apos;m happy to chat about projects,
          opportunities, or anything else.
        </p>
        <div className="flex flex-col gap-6 pt-4">
          <a
            href="mailto:atharvashashankk@vt.edu"
            className="inline-block text-white hover:text-accent transition-colors duration-300 text-lg py-2 border-b border-border/50 hover:border-accent/30 w-fit"
          >
            atharvashashankk@vt.edu
          </a>
          <a
            href="https://www.linkedin.com/in/atharvakokane/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white hover:text-accent transition-colors duration-300 text-lg py-2 border-b border-border/50 hover:border-accent/30 w-fit"
          >
            linkedin
          </a>
        </div>
      </section>
    </div>
  );
}
