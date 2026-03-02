import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";

export default function Privacidade() {
  return (
    <PageLayout>
      <PageHero title="Política de Privacidade" badge="LEGAL" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="bg-card rounded-xl p-8 shadow-sm space-y-6 text-muted-foreground">
            <h2 className="font-heading font-bold text-xl text-card-foreground">1. Informações Coletadas</h2>
            <p>O LaborNews coleta informações que você fornece diretamente, como nome e email ao se inscrever em nossa newsletter ou preencher formulários de contato. Também coletamos dados de navegação automaticamente, como endereço IP, tipo de navegador e páginas visitadas.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">2. Uso das Informações</h2>
            <p>As informações coletadas são utilizadas para enviar conteúdo relevante, melhorar a experiência de navegação, realizar análises de audiência e personalizar o conteúdo apresentado.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">3. Compartilhamento</h2>
            <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para o funcionamento de nossos serviços ou quando exigido por lei.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">4. Seus Direitos</h2>
            <p>De acordo com a LGPD, você tem direito a acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais. Para exercer esses direitos, entre em contato conosco.</p>

            <h2 className="font-heading font-bold text-xl text-card-foreground">5. Contato</h2>
            <p>Para dúvidas sobre esta política, entre em contato através do email: contato@labornews.com.br</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
