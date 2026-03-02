import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", description: "Conectar profissionais do setor laboratorial com informações de qualidade, promovendo o avanço da medicina diagnóstica no Brasil." },
  { icon: Eye, title: "Visão", description: "Ser o principal portal de referência em notícias e conteúdo especializado para o universo das análises clínicas e instrumentação analítica." },
  { icon: Heart, title: "Valores", description: "Compromisso com a verdade, ética jornalística, inovação e respeito aos profissionais de saúde." },
];

export default function QuemSomos() {
  return (
    <PageLayout>
      <PageHero
        title="Quem Somos"
        subtitle="Conheça a história e os valores que guiam o LaborNews."
        badge="INSTITUCIONAL"
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O LaborNews nasceu da necessidade de criar um canal de comunicação dedicado ao setor de análises clínicas e instrumentação analítica no Brasil. Desde sua fundação, nosso objetivo é levar informação de qualidade, com credibilidade e agilidade, para os profissionais que atuam em laboratórios, indústrias e instituições de ensino.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com uma equipe multidisciplinar formada por jornalistas, biomédicos e especialistas em comunicação, produzimos conteúdo relevante que abrange desde as últimas novidades tecnológicas até as mudanças regulatórias que impactam o dia a dia dos laboratórios brasileiros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
