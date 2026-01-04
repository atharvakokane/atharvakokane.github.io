import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "home" },
    { path: "/blog", label: "blog" },
    { path: "/resume", label: "resume" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[45%] min-w-[320px] px-6 py-8 md:px-12 md:py-12">
        <nav className="flex gap-6 mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm underline underline-offset-4 transition-colors ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-accent hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
