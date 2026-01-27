import { motion } from "framer-motion";
import { Clock, ArrowRight, TrendingUp } from "lucide-react";

const mainNews = [
  {
    id: 1,
    category: "Análises Clínicas",
    title: "Avanços em diagnósticos moleculares aceleram detecção de doenças",
    excerpt: "Novos métodos de análise permitem resultados mais rápidos e precisos para pacientes em todo o país.",
    date: "27 Jan 2026",
    image: "gradient-1",
    featured: true,
  },
  {
    id: 2,
    category: "Instrumentação",
    title: "Laboratórios investem em automação para aumentar produtividade",
    excerpt: "Equipamentos de última geração prometem reduzir custos e melhorar qualidade.",
    date: "26 Jan 2026",
    image: "gradient-2",
  },
  {
    id: 3,
    category: "Mercado",
    title: "Setor laboratorial brasileiro cresce 15% em 2025",
    excerpt: "Dados mostram expansão significativa do mercado de diagnósticos no país.",
    date: "25 Jan 2026",
    image: "gradient-3",
  },
];

const sideNews = [
  {
    id: 4,
    category: "Tecnologia",
    title: "Inteligência artificial auxilia patologistas em análises de imagens",
    date: "24 Jan 2026",
  },
  {
    id: 5,
    category: "Regulamentação",
    title: "Anvisa atualiza normas para laboratórios clínicos",
    date: "23 Jan 2026",
  },
  {
    id: 6,
    category: "Eventos",
    title: "Congresso Brasileiro de Patologia Clínica anuncia programação",
    date: "22 Jan 2026",
  },
  {
    id: 7,
    category: "Sustentabilidade",
    title: "Labs adotam práticas verdes para reduzir impacto ambiental",
    date: "21 Jan 2026",
  },
];

const gradients = {
  "gradient-1": "from-primary/20 via-accent/10 to-gold/20",
  "gradient-2": "from-accent/20 via-coral-light/10 to-primary/20",
  "gradient-3": "from-gold/20 via-primary/10 to-accent/20",
};

export function NewsSection() {
  return (
    <section id="noticias" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">Últimas Notícias</h2>
          <a href="#todas-noticias" className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Ver todas
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Column */}
          <div className="lg:col-span-2 space-y-6">
            {mainNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`news-card ${news.featured ? 'grid md:grid-cols-2' : 'flex gap-4'} cursor-pointer group`}
              >
                <div className={`${news.featured ? 'aspect-video md:aspect-auto' : 'w-32 h-24 flex-shrink-0'} bg-gradient-to-br ${gradients[news.image as keyof typeof gradients]} relative overflow-hidden rounded-lg md:rounded-none md:rounded-l-lg`}>
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                </div>
                <div className={`${news.featured ? 'p-6' : 'py-2 pr-4 flex-1'}`}>
                  <span className="text-accent text-xs font-bold uppercase tracking-wide">
                    {news.category}
                  </span>
                  <h3 className={`font-heading font-bold text-card-foreground mt-2 mb-2 group-hover:text-accent transition-colors ${news.featured ? 'text-xl md:text-2xl' : 'text-base'}`}>
                    {news.title}
                  </h3>
                  {news.excerpt && (
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {news.excerpt}
                    </p>
                  )}
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {news.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Section */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-bold text-lg text-card-foreground">Mais Lidas</h3>
              </div>
              <div className="space-y-4">
                {sideNews.map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <span className="text-3xl font-bold text-accent/30 group-hover:text-accent transition-colors">
                      {index + 1}
                    </span>
                    <div>
                      <span className="text-accent text-xs font-semibold uppercase">
                        {news.category}
                      </span>
                      <h4 className="font-semibold text-sm text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                      <span className="text-muted-foreground text-xs">{news.date}</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-primary to-navy-dark rounded-lg p-6 text-primary-foreground">
              <h3 className="font-heading font-bold text-lg mb-2">Newsletter LaborNews</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Receba as principais notícias do setor direto no seu email.
              </p>
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-accent w-full">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
