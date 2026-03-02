import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Briefcase } from "lucide-react";

export default function Carreira() {
  return (
    <PageLayout>
      <PageHero title="Sua Carreira" subtitle="Oportunidades, dicas e conteúdo para profissionais do setor laboratorial." badge="SERVIÇOS" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-card rounded-xl p-12 shadow-sm">
            <Briefcase className="w-16 h-16 text-accent/30 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-3">Em breve</h2>
            <p className="text-muted-foreground">Vagas, cursos e dicas de carreira para profissionais de laboratório estarão disponíveis em breve.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
