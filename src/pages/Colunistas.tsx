import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const columnists = [
  { name: "Dr Paulo César Naoum", photo: "/colunistas/paulo-cesar-naoum.png" },
  { name: "Prof Dr Irineu Grinberg", photo: "/colunistas/irineu-grinberg.png" },
  { name: "Dr Fábio Vasconcellos Brazão", photo: "/colunistas/fabio-brazao.jpg" },
  { name: "Fernando Silveira Filho", photo: "/colunistas/fernando-silveira.png" },
  { name: "Dra Regina Affonso", photo: "/colunistas/regina-affonso.png" },
  { name: "Dr. Yussif Ali Mere Jr", photo: "/colunistas/yussif-mere.jpg" },
  { name: "Dr Wilson Shcolnik", photo: "/colunistas/wilson-shcolnik.png" },
  { name: "Giannina Ricci, PhD", photo: "/colunistas/giannina-ricci.jpg" },
  { name: "Dr Edgar Garcez Júnior", photo: "/colunistas/edgar-garcez.png" },
  { name: "Luiz Fernando Barcellos", photo: "/colunistas/luiz-fernando-barcellos.png" },
  { name: "Dr. Dácio Eduardo Leandro Campos", photo: "/colunistas/dacio-campos.jpg" },
  { name: "Dra Maria de L P Nascimento", photo: "/colunistas/maria-nascimento.png" },
  { name: "Dra. Angela Satie Nishikaku", photo: "/colunistas/angela-nishikaku.png" },
  { name: "Bruna Mangueira Carlos", photo: "/colunistas/bruna-mangueira.jpg" },
  { name: "Dr Carlos Eduardo S Ferreira", photo: "/colunistas/carlos-ferreira.png" },
  { name: "Omar Ghanem", photo: "/colunistas/omar-ghanem.png" },
  { name: "Francisco Balestrin", photo: "/colunistas/francisco-balestrin.jpg" },
  { name: "Alexandre Calegari", photo: "/colunistas/alexandre-calegari.png" },
  { name: "Rodrigo Brito", photo: "/colunistas/rodrigo-brito.png" },
  { name: "Prof. Marcos Kneip Fleury", photo: "/colunistas/marcos-fleury.png" },
  { name: "Carlos Eduardo Gouvêa", photo: "/colunistas/carlos-gouvea.png" },
  { name: "Marbenha Linko", photo: "/colunistas/marbenha-linko.png" },
  { name: "André Doi", photo: "/colunistas/andre-doi.png" },
  { name: "Dra. Maria Elizabeth Menezes", photo: "/colunistas/maria-elizabeth-menezes.jpg" },
  { name: "Alexandre Maçada Andrade", photo: "/colunistas/alexandre-macada.jpg" },
];

export default function Colunistas() {
  return (
    <PageLayout>
      <PageHero
        title="Colunistas"
        subtitle="Confira os estudos e matérias escritos por nossos colunistas colaboradores."
        badge="CONTEÚDO"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Nossos Especialistas
            </h2>
            <p className="text-muted-foreground">
              Profissionais renomados trazendo insights, análises e tendências do setor laboratorial.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {columnists.map((col, index) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-2 border-border group-hover:border-accent transition-colors shadow-sm">
                  <img
                    src={col.photo}
                    alt={col.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading font-semibold text-sm text-card-foreground leading-tight">
                  {col.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Quer ser colunista?
          </h2>
          <p className="text-muted-foreground mb-6">
            Se você é especialista do setor laboratorial e deseja compartilhar conhecimento, entre em contato conosco.
          </p>
          <a href="/contato" className="btn-accent inline-block">
            Entre em Contato
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
