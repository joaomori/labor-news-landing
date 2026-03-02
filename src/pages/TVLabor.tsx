import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";

const featuredVideo = {
  title: "O Futuro da Automação Laboratorial",
  description: "Entrevista exclusiva com especialistas sobre as tendências de automação que estão transformando os laboratórios clínicos no Brasil.",
  duration: "32:15",
  views: "2.4K",
  thumbnail: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
};

const videos = [
  {
    title: "Gestão da Qualidade em Laboratórios",
    category: "Webinar",
    duration: "45:20",
    views: "1.8K",
    thumbnail: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80",
  },
  {
    title: "Novidades em Diagnóstico Molecular",
    category: "Reportagem",
    duration: "18:45",
    views: "3.1K",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80",
  },
  {
    title: "Biossegurança: Boas Práticas",
    category: "Tutorial",
    duration: "25:30",
    views: "956",
    thumbnail: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&q=80",
  },
  {
    title: "Mercado Laboratorial em 2025",
    category: "Análise",
    duration: "22:10",
    views: "1.2K",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
  },
  {
    title: "Inteligência Artificial no Diagnóstico",
    category: "Entrevista",
    duration: "38:55",
    views: "4.5K",
    thumbnail: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
  },
  {
    title: "Sustentabilidade em Laboratórios",
    category: "Reportagem",
    duration: "15:40",
    views: "780",
    thumbnail: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&q=80",
  },
];

const categories = ["Todos", "Webinar", "Reportagem", "Entrevista", "Tutorial", "Análise"];

export default function TVLabor() {
  return (
    <PageLayout>
      <PageHero
        title="TV LaborNews"
        subtitle="Conteúdo audiovisual sobre análises clínicas e o setor laboratorial."
        badge="MULTIMÍDIA"
      />

      {/* Featured Video */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Em Destaque</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <Play className="w-7 h-7 text-accent-foreground ml-1" />
                </div>
              </div>
            </div>
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-wide">Entrevista</span>
              <h3 className="font-heading text-2xl font-bold text-foreground mt-2 mb-4">
                {featuredVideo.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredVideo.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {featuredVideo.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" /> {featuredVideo.views} visualizações
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background border-y border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "Todos"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Todos os Vídeos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="news-card group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Play className="w-5 h-5 text-accent-foreground ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                    {video.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-foreground/80 text-background text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-card-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {video.views} visualizações
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
