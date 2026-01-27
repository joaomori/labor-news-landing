import { motion } from "framer-motion";
import { Clock, ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { useState } from "react";

const featuredNews = {
  id: 1,
  category: "Análises Clínicas",
  title: "Paracoccidioidomicose avança no Brasil e expõe falhas no diagnóstico e na vigilância da doença",
  date: "27/01/2026",
  image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
};

const tickerNews = [
  "Laboratório Central da Secretaria da Saúde de SC realiza mais de 1,1 milhão de análises em 2025",
  "Anvisa atualiza normas para laboratórios clínicos",
  "Congresso Brasileiro de Patologia Clínica anuncia programação",
  "Setor laboratorial brasileiro cresce 15% em 2025",
];

const specialNews = {
  id: 2,
  title: "Perspectivas para 2026: o novo papel dos laboratórios na jornada do cuidado",
  date: "26/01/2026",
  excerpt: "Por Cris Sanches Em 2026, a medicina diagnóstica entra em um novo ciclo de maturidade. A combinação entre demanda crescente...",
  image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
};

const mainNews = [
  {
    id: 3,
    category: "Instrumentação",
    title: "Laboratórios investem em automação para aumentar produtividade",
    excerpt: "Equipamentos de última geração prometem reduzir custos e melhorar qualidade dos resultados.",
    date: "26/01/2026",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    category: "Mercado",
    title: "Setor laboratorial brasileiro cresce 15% em 2025",
    excerpt: "Dados mostram expansão significativa do mercado de diagnósticos no país.",
    date: "25/01/2026",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    category: "Tecnologia",
    title: "Inteligência artificial auxilia patologistas em análises de imagens",
    excerpt: "Novos algoritmos prometem acelerar diagnósticos e reduzir margem de erro.",
    date: "24/01/2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

const sideNews = [
  {
    id: 6,
    category: "Regulamentação",
    title: "Anvisa atualiza normas para laboratórios clínicos",
    date: "23/01/2026",
  },
  {
    id: 7,
    category: "Eventos",
    title: "Congresso Brasileiro de Patologia Clínica anuncia programação",
    date: "22/01/2026",
  },
  {
    id: 8,
    category: "Sustentabilidade",
    title: "Labs adotam práticas verdes para reduzir impacto ambiental",
    date: "21/01/2026",
  },
  {
    id: 9,
    category: "Educação",
    title: "Novas diretrizes para formação de biomédicos são aprovadas",
    date: "20/01/2026",
  },
];

export function NewsSection() {
  const [tickerIndex, setTickerIndex] = useState(0);

  const nextTicker = () => {
    setTickerIndex((prev) => (prev + 1) % tickerNews.length);
  };

  const prevTicker = () => {
    setTickerIndex((prev) => (prev - 1 + tickerNews.length) % tickerNews.length);
  };

  return (
    <section id="noticias" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Ticker Bar */}
        <div className="flex items-center mb-8 bg-card rounded-lg overflow-hidden shadow-sm">
          <div className="bg-accent text-accent-foreground px-4 py-3 flex items-center gap-2 font-semibold text-sm whitespace-nowrap">
            <Zap className="w-4 h-4" />
            ÚLTIMAS NOTÍCIAS
          </div>
          <div className="flex-1 px-4 py-3 overflow-hidden">
            <motion.p
              key={tickerIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-foreground text-sm truncate"
            >
              {tickerNews[tickerIndex]}
            </motion.p>
          </div>
          <div className="flex items-center border-l border-border">
            <button
              onClick={prevTicker}
              className="p-3 hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={nextTicker}
              className="p-3 hover:bg-muted transition-colors border-l border-border"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Main Grid - G1 Style */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Featured News - Large Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-lg overflow-hidden cursor-pointer group"
          >
            <div className="aspect-[16/10] relative">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded mb-4">
                  {featuredNews.category}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-accent transition-colors">
                  {featuredNews.title}
                </h2>
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredNews.date}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Especiais Sidebar */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide border-b-2 border-accent pb-2">
              Especiais
            </h3>
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer group"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <img
                  src={specialNews.image}
                  alt={specialNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-card-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                  {specialNews.title}
                </h4>
                <div className="flex items-center text-muted-foreground text-xs mb-3">
                  <Clock className="w-3 h-3 mr-1" />
                  {specialNews.date}
                </div>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {specialNews.excerpt}
                </p>
              </div>
            </motion.article>
            <button className="w-full btn-accent text-sm py-2.5">
              Ver Todos Especiais
            </button>
          </div>
        </div>

        {/* Secondary News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide px-2 py-1 rounded">
                  {news.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-card-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center text-muted-foreground text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {news.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More News Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title mb-0">Mais Notícias</h2>
              <a
                href="#todas-noticias"
                className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Ver todas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {sideNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 p-4 bg-card rounded-lg shadow-sm cursor-pointer group hover:shadow-md transition-shadow"
                >
                  <span className="text-4xl font-bold text-accent/20 group-hover:text-accent transition-colors flex-shrink-0 w-12">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <span className="text-accent text-xs font-bold uppercase tracking-wide">
                      {news.category}
                    </span>
                    <h4 className="font-heading font-semibold text-card-foreground group-hover:text-accent transition-colors mt-1">
                      {news.title}
                    </h4>
                    <div className="flex items-center text-muted-foreground text-xs mt-2">
                      <Clock className="w-3 h-3 mr-1" />
                      {news.date}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-navy-dark rounded-lg p-6 text-primary-foreground">
              <h3 className="font-heading font-bold text-lg mb-2">
                Newsletter LaborNews
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Receba as principais notícias do setor direto no seu email.
              </p>
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-accent w-full">Inscrever-se</button>
            </div>

            {/* Ad Space */}
            <div className="bg-muted rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">
                Publicidade
              </p>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Espaço Publicitário
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
