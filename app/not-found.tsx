import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-normal text-white">not found</h1>
      <p className="text-foreground">the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-foreground hover:text-white transition-colors">
        back to home
      </Link>
    </div>
  );
}
