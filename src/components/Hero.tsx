import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useFeaturedNews } from "@/hooks/useNews";

export function Hero() {
  const { data: featured } = useFeaturedNews();

  return (
    <section className="relative bg-gradient-to-br from-primary via-navy to-navy-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full mb-6">
              DESTAQUE
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              As últimas novidades do setor de análises clínicas e laboratoriais
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
              Fique por dentro das principais notícias, inovações tecnológicas e tendências 
              do mercado laboratorial brasileiro e internacional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#noticias" className="btn-accent inline-flex items-center gap-2">
                Ver Notícias
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/tv" className="inline-flex items-center gap-2 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors">
                <Play className="w-4 h-4" />
                Assistir TV Labor
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {featured ? (
              <Link to={`/noticias/${featured.id}`} className="block">
                <div className="bg-card rounded-xl overflow-hidden shadow-2xl group">
                  <div className="aspect-video relative overflow-hidden">
                    {featured.image_url ? (
                      <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
                    )}
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded">
                      DESTAQUE
                    </span>
                  </div>
                  <div className="p-6">
                    {featured.category && (
                      <span className="text-accent text-sm font-semibold uppercase">{featured.category}</span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-card-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                      {featured.title}
                    </h3>
                    {featured.excerpt && (
                      <p className="text-muted-foreground text-sm line-clamp-2">{featured.excerpt}</p>
                    )}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-card rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-muted to-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-accent-foreground ml-1" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded">VÍDEO</span>
                </div>
                <div className="p-6">
                  <span className="text-accent text-sm font-semibold uppercase">Análises Clínicas</span>
                  <h3 className="font-heading text-xl font-bold text-card-foreground mt-2 mb-3">
                    Novas tecnologias revolucionam diagnósticos laboratoriais em 2026
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Conheça as inovações que estão transformando o setor de saúde diagnóstica no Brasil.
                  </p>
                </div>
              </div>
            )}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
