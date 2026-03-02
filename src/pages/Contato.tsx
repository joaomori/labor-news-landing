import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contato() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      <PageHero title="Contato" subtitle="Entre em contato conosco. Estamos prontos para atendê-lo." badge="FALE CONOSCO" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-card-foreground mb-1">Email</h3>
                  <a href="mailto:contato@labornews.com.br" className="text-muted-foreground text-sm hover:text-accent transition-colors">contato@labornews.com.br</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-card-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground text-sm">(11) 0000-0000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-card-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground text-sm">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Seu nome" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="email" placeholder="Seu email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <input type="text" placeholder="Assunto" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Sua mensagem" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              <button type="submit" className="btn-accent">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
