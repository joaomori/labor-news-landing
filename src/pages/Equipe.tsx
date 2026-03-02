import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const team = [
  { name: "Equipe Editorial", role: "Jornalismo & Conteúdo", description: "Responsável pela apuração, redação e publicação das notícias e conteúdos especiais do portal." },
  { name: "Equipe Técnica", role: "Consultoria Científica", description: "Profissionais de saúde e biomédicos que garantem a precisão técnica do conteúdo publicado." },
  { name: "Equipe Comercial", role: "Parcerias & Publicidade", description: "Responsável pelas relações comerciais, parcerias estratégicas e gestão de anunciantes." },
  { name: "Equipe Digital", role: "Tecnologia & Design", description: "Cuida do desenvolvimento, manutenção e evolução das plataformas digitais do LaborNews." },
];

export default function Equipe() {
  return (
    <PageLayout>
      <PageHero
        title="Nossa Equipe"
        subtitle="Conheça os profissionais que fazem o LaborNews acontecer."
        badge="INSTITUCIONAL"
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-card-foreground">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
