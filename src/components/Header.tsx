import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-labornews.png";

const navItems = [
  { label: "Notícias", href: "#noticias", hasDropdown: true },
  { label: "Papers", href: "#papers" },
  { label: "Colunistas", href: "#colunistas" },
  { label: "Especiais", href: "#especiais" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Multimídia", href: "#multimidia" },
  { label: "Sua Carreira", href: "#carreira" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <p className="text-primary-foreground/80 text-xs uppercase tracking-widest hidden md:block">
            Conectando o universo das análises clínicas e instrumentação analítica
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1 text-sm">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Entrar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="LaborNews" 
                className="h-10 w-auto brightness-0 invert"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link py-5 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary-foreground p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-primary-foreground/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <input
                  type="search"
                  placeholder="Buscar notícias, artigos..."
                  className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-primary-foreground/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-primary-foreground py-2 border-b border-primary-foreground/10 last:border-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
