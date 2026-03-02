import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";

const columnists = [
  { name: "Em breve", specialty: "Novos colunistas serão anunciados", bio: "Estamos preparando uma equipe de colunistas renomados para trazer análises e opiniões sobre o setor laboratorial." },
];

export default function Colunistas() {
  return (
    <PageLayout>
      <PageHero title="Colunistas" subtitle="Opiniões e análises de especialistas do setor laboratorial." badge="CONTEÚDO" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {columnists.map((col, index) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">?</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-card-foreground">{col.name}</h3>
              <p className="text-accent text-sm font-semibold mb-3">{col.specialty}</p>
              <p className="text-muted-foreground leading-relaxed">{col.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
