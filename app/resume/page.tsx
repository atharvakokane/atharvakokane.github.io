import { getResumeContent } from '@/lib/markdown';
import { markdownToHtml } from '@/lib/markdown';

export const metadata = {
  title: 'resume',
  description: 'atharva kokane resume',
};

export default async function ResumePage() {
  const content = getResumeContent();
  const html = content ? await markdownToHtml(content) : '';

  return (
    <div className="space-y-24">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 animate-fade-in-up">
        <div>
          <div className="w-12 h-px bg-border mb-6" />
          <h1 className="text-4xl font-normal text-white tracking-tight">resume</h1>
        </div>
        <a
          href="https://drive.google.com/file/d/1fIKJW-9u3C9KU7Y329AzDK8OmH6V9OTS/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-colors duration-300 text-sm tracking-wide w-fit"
        >
          download pdf
        </a>
      </header>

      <div
        className="resume-content animate-fade-in-delay-1 opacity-0"
        dangerouslySetInnerHTML={{ __html: html || '<p class="text-muted">no resume content yet.</p>' }}
      />
    </div>
  );
}
