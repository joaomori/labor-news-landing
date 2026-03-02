import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Search, Building2, FlaskConical, Microscope, Cpu, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

const categoriesList = [
  { icon: FlaskConical, label: "Reagentes", count: 42 },
  { icon: Microscope, label: "Equipamentos", count: 38 },
  { icon: Cpu, label: "Automação", count: 15 },
  { icon: ShieldCheck, label: "Controle de Qualidade", count: 22 },
  { icon: Truck, label: "Logística", count: 11 },
  { icon: Building2, label: "Consultoria", count: 19 },
];

const companies = [
  { name: "LabTech Solutions", category: "Automação", description: "Sistemas automatizados para laboratórios de análises clínicas de média e alta complexidade.", location: "São Paulo, SP" },
  { name: "DiagBrasil", category: "Reagentes", description: "Fornecimento de reagentes de alta qualidade para bioquímica, hematologia e imunologia.", location: "Rio de Janeiro, RJ" },
  { name: "MicroScope Pro", category: "Equipamentos", description: "Microscópios e equipamentos ópticos para laboratórios de pesquisa e diagnóstico.", location: "Belo Horizonte, MG" },
  { name: "QualityLab", category: "Controle de Qualidade", description: "Programas de proficiência e controle de qualidade para laboratórios clínicos.", location: "Curitiba, PR" },
  { name: "BioLogística", category: "Logística", description: "Transporte especializado de materiais biológicos com rastreamento em tempo real.", location: "Campinas, SP" },
  { name: "LabConsult", category: "Consultoria", description: "Consultoria em gestão laboratorial, acreditação e implementação de sistemas de qualidade.", location: "Brasília, DF" },
];

export default function Catalogo() {
  const [search, setSearch] = useState("");

  return (
    <PageLayout>
      <PageHero
        title="Catálogo Lab"
        subtitle="Diretório de produtos, equipamentos e serviços para laboratórios."
        badge="SERVIÇOS"
      />

      {/* Search */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar empresas, produtos ou serviços..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoriesList.map((cat, index) => (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-accent hover:shadow-md transition-all text-center group"
              >
                <cat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-heading font-bold text-sm text-card-foreground">{cat.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.count} empresas</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Empresas em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs bg-accent/10 text-accent font-bold px-2 py-1 rounded-full">
                  {company.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-card-foreground mt-3 mb-2">
                  {company.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {company.description}
                </p>
                <p className="text-xs text-muted-foreground">{company.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Cadastre sua empresa
          </h2>
          <p className="text-muted-foreground mb-6">
            Faça parte do maior diretório do setor laboratorial brasileiro e conecte-se com milhares de profissionais.
          </p>
          <a href="/contato" className="btn-accent inline-block">Solicitar Cadastro</a>
        </div>
      </section>
    </PageLayout>
  );
}
