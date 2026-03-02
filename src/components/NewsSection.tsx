import { motion } from "framer-motion";
import { Clock, ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePublishedNews } from "@/hooks/useNews";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";

function formatDate(dateStr: string) {
  return format(new Date(dateStr), "dd/MM/yyyy", { locale: ptBR });
}

export function NewsSection() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const { data: allNews, isLoading } = usePublishedNews();

  const news = allNews ?? [];
  const featuredNews = news.find((n) => n.featured) ?? news[0];
  const specialNews = news.filter((n) => n.id !== featuredNews?.id).slice(0, 1)[0];
  const mainNews = news.filter((n) => n.id !== featuredNews?.id && n.id !== specialNews?.id).slice(0, 3);
  const sideNews = news.filter((n) => n.id !== featuredNews?.id && n.id !== specialNews?.id).slice(3, 7);
  const tickerNews = news.slice(0, 4).map((n) => n.title);

  const nextTicker = () => {
    if (tickerNews.length === 0) return;
    setTickerIndex((prev) => (prev + 1) % tickerNews.length);
  };

  const prevTicker = () => {
    if (tickerNews.length === 0) return;
    setTickerIndex((prev) => (prev - 1 + tickerNews.length) % tickerNews.length);
  };

  if (isLoading) {
    return (
      <section id="noticias" className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Skeleton className="h-12 w-full mb-8 rounded-lg" />
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <Skeleton className="lg:col-span-2 aspect-[16/10] rounded-lg" />
            <Skeleton className="h-96 rounded-lg" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Skeleton className="h-64 rounded-lg" />
            <Skeleton className="h-64 rounded-lg" />
            <Skeleton className="h-64 rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section id="noticias" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Notícias</h2>
          <p className="text-muted-foreground">Nenhuma notícia publicada ainda. Volte em breve!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="noticias" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Ticker Bar */}
        {tickerNews.length > 0 && (
          <div className="flex items-center mb-8 bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="bg-accent text-accent-foreground px-4 py-3 flex items-center gap-2 font-semibold text-sm whitespace-nowrap">
              <Zap className="w-4 h-4" />
              ÚLTIMAS NOTÍCIAS
            </div>
            <div className="flex-1 px-4 py-3 overflow-hidden">
              <motion.p key={tickerIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-foreground text-sm truncate">
                {tickerNews[tickerIndex]}
              </motion.p>
            </div>
            <div className="flex items-center border-l border-border">
              <button onClick={prevTicker} className="p-3 hover:bg-muted transition-colors">
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button onClick={nextTicker} className="p-3 hover:bg-muted transition-colors border-l border-border">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredNews && (
            <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 relative rounded-lg overflow-hidden cursor-pointer group">
              <Link to={`/noticias/${featuredNews.id}`}>
                <div className="aspect-[16/10] relative">
                  {featuredNews.image_url ? (
                    <img src={featuredNews.image_url} alt={featuredNews.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {featuredNews.category && (
                      <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded mb-4">{featuredNews.category}</span>
                    )}
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-accent transition-colors">{featuredNews.title}</h2>
                    <div className="flex items-center text-white/80 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {formatDate(featuredNews.created_at)}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {specialNews && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide border-b-2 border-accent pb-2">Especiais</h3>
              <motion.article initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer group">
                <Link to={`/noticias/${specialNews.id}`}>
                  {specialNews.image_url && (
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <img src={specialNews.image_url} alt={specialNews.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-card-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">{specialNews.title}</h4>
                    <div className="flex items-center text-muted-foreground text-xs mb-3">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatDate(specialNews.created_at)}
                    </div>
                    {specialNews.excerpt && (
                      <p className="text-muted-foreground text-sm line-clamp-3">{specialNews.excerpt}</p>
                    )}
                  </div>
                </Link>
              </motion.article>
            </div>
          )}
        </div>

        {/* Secondary News Grid */}
        {mainNews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mainNews.map((item, index) => (
              <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer group">
                <Link to={`/noticias/${item.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
                    )}
                    {item.category && (
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide px-2 py-1 rounded">{item.category}</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-card-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">{item.title}</h3>
                    {item.excerpt && <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{item.excerpt}</p>}
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {formatDate(item.created_at)}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* More News Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {sideNews.length > 0 && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="section-title mb-0">Mais Notícias</h2>
                </div>
                <div className="space-y-4">
                  {sideNews.map((item, index) => (
                    <motion.article key={item.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex gap-4 p-4 bg-card rounded-lg shadow-sm cursor-pointer group hover:shadow-md transition-shadow">
                      <Link to={`/noticias/${item.id}`} className="flex gap-4 w-full">
                        <span className="text-4xl font-bold text-accent/20 group-hover:text-accent transition-colors flex-shrink-0 w-12">{index + 1}</span>
                        <div className="flex-1">
                          {item.category && <span className="text-accent text-xs font-bold uppercase tracking-wide">{item.category}</span>}
                          <h4 className="font-heading font-semibold text-card-foreground group-hover:text-accent transition-colors mt-1">{item.title}</h4>
                          <div className="flex items-center text-muted-foreground text-xs mt-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {formatDate(item.created_at)}
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Newsletter CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-navy-dark rounded-lg p-6 text-primary-foreground">
              <h3 className="font-heading font-bold text-lg mb-2">Newsletter LaborNews</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">Receba as principais notícias do setor direto no seu email.</p>
              <input type="email" placeholder="Seu melhor email" className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-accent" />
              <button className="btn-accent w-full">Inscrever-se</button>
            </div>
            <div className="bg-muted rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Publicidade</p>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Espaço Publicitário</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
