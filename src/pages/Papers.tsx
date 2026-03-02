import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, User } from "lucide-react";

const papers = [
  {
    title: "Automação Laboratorial: Impactos na Eficiência e Qualidade dos Resultados",
    authors: "Costa, M.R.; Silva, A.P.; Oliveira, F.T.",
    journal: "Revista Brasileira de Análises Clínicas",
    year: "2025",
    abstract: "Estudo multicêntrico avaliando o impacto da implementação de sistemas automatizados em laboratórios de médio porte no Brasil.",
    category: "Automação",
  },
  {
    title: "Resistência Antimicrobiana: Panorama Brasileiro e Desafios Diagnósticos",
    authors: "Almeida, P.H.; Santos, R.C.",
    journal: "Journal of Clinical Microbiology BR",
    year: "2025",
    abstract: "Revisão sistemática sobre os padrões de resistência antimicrobiana em isolados clínicos brasileiros e o papel do laboratório no combate à resistência.",
    category: "Microbiologia",
  },
  {
    title: "Inteligência Artificial no Diagnóstico Hematológico: Uma Revisão",
    authors: "Oliveira, F.T.; Costa, M.R.",
    journal: "Hematology Today",
    year: "2024",
    abstract: "Análise das aplicações de IA na contagem diferencial de leucócitos e identificação de anormalidades morfológicas em esfregaços sanguíneos.",
    category: "Hematologia",
  },
  {
    title: "Controle de Qualidade Interno: Novas Abordagens Estatísticas",
    authors: "Santos, R.C.; Almeida, P.H.; Lima, J.S.",
    journal: "Clinical Chemistry Latin America",
    year: "2024",
    abstract: "Proposta de implementação de ferramentas estatísticas avançadas para controle de qualidade interno em laboratórios clínicos de alta complexidade.",
    category: "Gestão da Qualidade",
  },
  {
    title: "Point-of-Care Testing: Desafios Regulatórios no Brasil",
    authors: "Lima, J.S.; Costa, M.R.",
    journal: "Revista de Patologia Clínica",
    year: "2024",
    abstract: "Discussão sobre o cenário regulatório brasileiro para testes laboratoriais remotos (POCT) e os desafios de garantia da qualidade em ambientes descentralizados.",
    category: "Regulatório",
  },
];

const categories = ["Todos", "Automação", "Microbiologia", "Hematologia", "Gestão da Qualidade", "Regulatório"];

export default function Papers() {
  return (
    <PageLayout>
      <PageHero
        title="Papers"
        subtitle="Artigos científicos e publicações técnicas do setor laboratorial."
        badge="CONTEÚDO"
      />

      {/* Filter */}
      <section className="bg-background border-b border-border">
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

      {/* Papers List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <motion.article
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs bg-accent/10 text-accent font-bold px-3 py-1 rounded-full">
                      {paper.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-card-foreground mt-3 mb-2">
                      {paper.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" /> {paper.authors}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {paper.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-1">{paper.journal}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {paper.abstract}
                    </p>
                  </div>
                  <button className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Publique seu artigo
          </h2>
          <p className="text-muted-foreground mb-6">
            Tem um paper relevante para o setor laboratorial? Envie para avaliação e publicação em nossa plataforma.
          </p>
          <a href="/contato" className="btn-accent inline-block">
            Enviar Paper
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
