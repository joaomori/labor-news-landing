import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Calendar } from "lucide-react";

export default function Eventos() {
  return (
    <PageLayout>
      <PageHero title="Eventos" subtitle="Congressos, feiras e encontros do setor laboratorial." badge="SERVIÇOS" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-card rounded-xl p-12 shadow-sm">
            <Calendar className="w-16 h-16 text-accent/30 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-3">Em breve</h2>
            <p className="text-muted-foreground">A agenda de eventos do setor laboratorial será publicada em breve. Fique atento!</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
