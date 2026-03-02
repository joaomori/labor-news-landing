import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inscrição realizada!", description: "Você receberá nossas novidades em breve." });
    setEmail("");
  };

  return (
    <PageLayout>
      <PageHero title="Newsletter" subtitle="Receba as principais notícias do setor direto no seu email." badge="SERVIÇOS" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="bg-card rounded-xl p-8 shadow-sm">
            <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-2">Assine nossa Newsletter</h2>
            <p className="text-muted-foreground text-sm mb-6">Conteúdo semanal sobre análises clínicas, tecnologia e mercado laboratorial.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="email" placeholder="Seu melhor email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="btn-accent w-full">Inscrever-se</button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
