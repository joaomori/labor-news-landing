import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

export default function Cookies() {
  return (
    <PageLayout>
      <PageHero title="Política de Cookies" badge="LEGAL" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="bg-card rounded-xl p-8 shadow-sm space-y-6 text-muted-foreground">
            <h2 className="font-heading font-bold text-xl text-card-foreground">O que são Cookies?</h2>
            <p>Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita nosso site. Eles nos ajudam a entender como você utiliza o portal e a melhorar sua experiência.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">Tipos de Cookies Utilizados</h2>
            <p><strong>Essenciais:</strong> Necessários para o funcionamento básico do site.</p>
            <p><strong>Analíticos:</strong> Nos ajudam a entender como os visitantes interagem com o site.</p>
            <p><strong>Marketing:</strong> Utilizados para personalizar anúncios e conteúdo.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">Gerenciamento de Cookies</h2>
            <p>Você pode configurar seu navegador para bloquear ou alertar sobre cookies. No entanto, algumas funcionalidades do site podem não funcionar corretamente sem eles.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
