import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Video } from "lucide-react";

export default function TVLabor() {
  return (
    <PageLayout>
      <PageHero title="TV LaborNews" subtitle="Conteúdo audiovisual sobre análises clínicas e o setor laboratorial." badge="MULTIMÍDIA" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-card rounded-xl p-12 shadow-sm">
            <Video className="w-16 h-16 text-accent/30 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-3">Em breve</h2>
            <p className="text-muted-foreground">A TV LaborNews está sendo preparada. Em breve, entrevistas, reportagens e webinars estarão disponíveis.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
