import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Bell, Newspaper, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Newspaper, title: "Notícias Exclusivas", description: "Receba primeiro as principais notícias do setor laboratorial." },
  { icon: TrendingUp, title: "Análises de Mercado", description: "Tendências, dados e insights sobre o mercado de análises clínicas." },
  { icon: Bell, title: "Alertas de Eventos", description: "Fique por dentro de congressos, feiras e workshops do setor." },
];

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inscrição realizada!", description: "Você receberá nossas novidades em breve." });
    setEmail("");
    setName("");
  };

  return (
    <PageLayout>
      <PageHero
        title="Newsletter"
        subtitle="Receba as principais notícias do setor direto no seu email."
        badge="SERVIÇOS"
      />

      {/* Benefits */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, index) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <b.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-card-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-sm border border-border"
          >
            <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="font-heading font-bold text-xl text-card-foreground mb-2 text-center">
              Assine nossa Newsletter
            </h2>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Conteúdo semanal sobre análises clínicas, tecnologia e mercado laboratorial.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Seu melhor email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-accent w-full">
                Inscrever-se Gratuitamente
              </button>
            </form>
            <div className="mt-6 space-y-2">
              {["Sem spam, cancelamento a qualquer momento", "Enviado toda segunda-feira", "Mais de 5.000 assinantes"].map((item) => (
                <p key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
