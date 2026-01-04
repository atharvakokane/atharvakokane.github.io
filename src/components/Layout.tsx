import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
              className={`text-sm link-hover transition-opacity duration-200 ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-accent hover:opacity-60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
