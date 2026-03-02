import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, GraduationCap, TrendingUp, Users } from "lucide-react";

const jobs = [
  { title: "Biomédico(a) Analista", company: "LabVida Diagnósticos", location: "São Paulo, SP", type: "CLT", level: "Pleno", posted: "Há 2 dias" },
  { title: "Farmacêutico(a) Bioquímico(a)", company: "Central Lab", location: "Rio de Janeiro, RJ", type: "CLT", level: "Sênior", posted: "Há 3 dias" },
  { title: "Técnico(a) em Laboratório", company: "Diagnósticos Brasil", location: "Curitiba, PR", type: "CLT", level: "Júnior", posted: "Há 5 dias" },
  { title: "Gerente de Qualidade", company: "QualityLab", location: "Belo Horizonte, MG", type: "CLT", level: "Sênior", posted: "Há 1 semana" },
  { title: "Especialista em Automação", company: "LabTech Solutions", location: "Campinas, SP", type: "PJ", level: "Pleno", posted: "Há 1 semana" },
];

const resources = [
  { icon: GraduationCap, title: "Cursos e Certificações", description: "Aprimore suas competências com cursos especializados para o setor laboratorial." },
  { icon: TrendingUp, title: "Tendências de Mercado", description: "Acompanhe as áreas em alta e as novas especialidades que estão surgindo." },
  { icon: Users, title: "Networking", description: "Conecte-se com profissionais e empresas do setor em nossos eventos e grupos." },
];

export default function Carreira() {
  return (
    <PageLayout>
      <PageHero
        title="Sua Carreira"
        subtitle="Oportunidades, dicas e conteúdo para profissionais do setor laboratorial."
        badge="SERVIÇOS"
      />

      {/* Resources */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resources.map((res, index) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <res.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-card-foreground mb-2">{res.title}</h3>
                <p className="text-muted-foreground text-sm">{res.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Vagas em Destaque</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title + job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-accent/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-heading font-bold text-card-foreground">{job.title}</h3>
                    <p className="text-accent font-semibold text-sm">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium">
                        {job.level}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" /> {job.posted}
                  </span>
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
            Publique sua vaga
          </h2>
          <p className="text-muted-foreground mb-6">
            Alcance os melhores profissionais do setor laboratorial publicando suas vagas no LaborNews.
          </p>
          <a href="/contato" className="btn-accent inline-block">Anunciar Vaga</a>
        </div>
      </section>
    </PageLayout>
  );
}
