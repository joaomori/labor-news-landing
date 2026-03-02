import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { BarChart3, Users, Globe, Zap } from "lucide-react";

const benefits = [
  { icon: Users, title: "Público Qualificado", description: "Alcance profissionais de laboratórios, biomédicos, farmacêuticos e gestores de saúde." },
  { icon: Globe, title: "Alcance Nacional", description: "Presença em todo o território brasileiro com audiência segmentada e engajada." },
  { icon: BarChart3, title: "Resultados Mensuráveis", description: "Relatórios detalhados de performance para suas campanhas publicitárias." },
  { icon: Zap, title: "Formatos Flexíveis", description: "Banners, conteúdo patrocinado, newsletter, vídeos e muito mais." },
];

export default function Anuncie() {
  return (
    <PageLayout>
      <PageHero title="Anuncie no LaborNews" subtitle="Posicione sua marca junto ao público mais qualificado do setor laboratorial." badge="PUBLICIDADE" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">Solicite uma Proposta</h2>
            <p className="text-muted-foreground mb-6">Entre em contato com nossa equipe comercial para conhecer os planos e formatos disponíveis.</p>
            <a href="/contato" className="btn-accent inline-block">Fale com a Equipe Comercial</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
