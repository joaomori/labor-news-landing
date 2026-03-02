import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { BookOpen } from "lucide-react";

export default function Catalogo() {
  return (
    <PageLayout>
      <PageHero title="Catálogo Lab" subtitle="Diretório de produtos, equipamentos e serviços para laboratórios." badge="SERVIÇOS" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-card rounded-xl p-12 shadow-sm">
            <BookOpen className="w-16 h-16 text-accent/30 mx-auto mb-6" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-3">Em breve</h2>
            <p className="text-muted-foreground">O Catálogo Lab reunirá fabricantes, distribuidores e prestadores de serviço para o setor laboratorial. Aguarde novidades!</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
