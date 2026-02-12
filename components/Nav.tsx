import Link from 'next/link';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/blog/', label: 'blog' },
  { href: '/resume/', label: 'resume' },
  { href: '/contact/', label: 'contact' },
];

export function Nav() {
  return (
    <nav className="flex flex-wrap gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative text-foreground hover:text-accent transition-colors duration-300 lowercase text-sm tracking-wide after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
