import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { FileText } from "lucide-react";

export default function Papers() {
  return (
    <PageLayout>
      <PageHero title="Papers" subtitle="Artigos científicos e publicações técnicas do setor laboratorial." badge="CONTEÚDO" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-card rounded-xl p-12 shadow-sm">
            <FileText className="w-16 h-16 text-accent/30 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-3">Em breve</h2>
            <p className="text-muted-foreground">Estamos preparando uma coleção de papers e artigos científicos relevantes para o setor. Fique atento às novidades!</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
