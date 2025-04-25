import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">Piyush Kunjilwar</a>
        </Link>

        <div className="flex gap-8">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a className={`relative ${location === href ? 'text-primary' : 'text-muted-foreground'}`}>
                {label}
                {location === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}