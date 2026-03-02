import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Linkedin, PenLine } from "lucide-react";

const columnists = [
  {
    name: "Dra. Mariana Costa",
    specialty: "Bioquímica Clínica",
    bio: "Especialista em bioquímica clínica com mais de 15 anos de experiência em laboratórios de referência. Doutora pela USP, é referência em automação laboratorial.",
    topics: ["Automação", "Gestão da Qualidade", "Bioquímica"],
  },
  {
    name: "Dr. Paulo Henrique Almeida",
    specialty: "Hematologia",
    bio: "Hematologista e pesquisador com foco em novas tecnologias diagnósticas. Professor titular da UNICAMP e consultor de grandes redes laboratoriais.",
    topics: ["Hematologia", "Diagnóstico Molecular", "Inovação"],
  },
  {
    name: "Dra. Fernanda Oliveira",
    specialty: "Microbiologia",
    bio: "Microbiologista com vasta experiência em controle de infecções hospitalares. Atua como consultora em biossegurança e resistência antimicrobiana.",
    topics: ["Microbiologia", "Biossegurança", "Resistência Antimicrobiana"],
  },
  {
    name: "Dr. Ricardo Santos",
    specialty: "Patologia Clínica",
    bio: "Patologista clínico e empreendedor no setor laboratorial. Especialista em transformação digital e gestão de laboratórios.",
    topics: ["Gestão Laboratorial", "Transformação Digital", "Empreendedorismo"],
  },
];

export default function Colunistas() {
  return (
    <PageLayout>
      <PageHero
        title="Colunistas"
        subtitle="Opiniões e análises de especialistas do setor laboratorial."
        badge="CONTEÚDO"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Nossos Especialistas
            </h2>
            <p className="text-muted-foreground">
              Profissionais renomados trazendo insights, análises e tendências do setor laboratorial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {columnists.map((col, index) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <PenLine className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-card-foreground">
                      {col.name}
                    </h3>
                    <p className="text-accent text-sm font-semibold">{col.specialty}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{col.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {col.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-border">
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Quer ser colunista?
          </h2>
          <p className="text-muted-foreground mb-6">
            Se você é especialista do setor laboratorial e deseja compartilhar conhecimento, entre em contato conosco.
          </p>
          <a href="/contato" className="btn-accent inline-block">
            Entre em Contato
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
