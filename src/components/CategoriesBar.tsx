import { motion } from "framer-motion";
import { Microscope, FlaskConical, Newspaper, Users, Briefcase, Video } from "lucide-react";

const categories = [
  { icon: Newspaper, label: "Geral", color: "bg-primary" },
  { icon: Microscope, label: "Análises Clínicas", color: "bg-accent" },
  { icon: FlaskConical, label: "Instrumentação", color: "bg-gold" },
  { icon: Users, label: "Colunistas", color: "bg-navy-light" },
  { icon: Briefcase, label: "Sua Carreira", color: "bg-coral" },
  { icon: Video, label: "Multimídia", color: "bg-primary" },
];

export function CategoriesBar() {
  return (
    <section className="py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <motion.a
              key={cat.label}
              href={`#${cat.label.toLowerCase().replace(' ', '-')}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-muted transition-colors whitespace-nowrap group"
            >
              <span className={`w-8 h-8 rounded-full ${cat.color} flex items-center justify-center`}>
                <cat.icon className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {cat.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
