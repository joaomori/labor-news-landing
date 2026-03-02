import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

export default function Termos() {
  return (
    <PageLayout>
      <PageHero title="Termos de Uso" badge="LEGAL" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="bg-card rounded-xl p-8 shadow-sm space-y-6 text-muted-foreground">
            <h2 className="font-heading font-bold text-xl text-card-foreground">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o portal LaborNews, você concorda com estes Termos de Uso. Caso não concorde, recomendamos que não utilize o site.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">2. Conteúdo</h2>
            <p>Todo o conteúdo publicado no LaborNews é protegido por direitos autorais. É proibida a reprodução total ou parcial sem autorização prévia por escrito.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">3. Responsabilidade</h2>
            <p>O LaborNews busca a precisão das informações publicadas, mas não garante a ausência de erros. O conteúdo é informativo e não substitui orientação profissional.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">4. Links Externos</h2>
            <p>O portal pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">5. Alterações</h2>
            <p>Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram em vigor assim que publicadas.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
