import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";

const columnists = [
  { name: "Dr Paulo César Naoum", photo: "/colunistas/paulo-cesar-naoum.png", bio: "Biomédico e pesquisador especialista em hemoglobinopatias e hematologia laboratorial." },
  { name: "Prof Dr Irineu Grinberg", photo: "/colunistas/irineu-grinberg.png", bio: "Professor e escritor com vasta experiência em medicina laboratorial e educação em saúde." },
  { name: "Dr Fábio Vasconcellos Brazão", photo: "/colunistas/fabio-brazao.jpg", bio: "Especialista em diagnóstico laboratorial, autotestes e doenças raras." },
  { name: "Fernando Silveira Filho", photo: "/colunistas/fernando-silveira.png", bio: "Executivo do setor de saúde com foco em telemedicina, ética e compliance." },
  { name: "Dra Regina Affonso", photo: "/colunistas/regina-affonso.png", bio: "Farmacêutica-bioquímica com atuação em gestão laboratorial e qualidade." },
  { name: "Dr. Yussif Ali Mere Jr", photo: "/colunistas/yussif-mere.jpg", bio: "Médico e líder associativo com foco em políticas de saúde e medicina diagnóstica." },
  { name: "Dr Wilson Shcolnik", photo: "/colunistas/wilson-shcolnik.png", bio: "Patologista clínico, referência em acreditação e segurança do paciente." },
  { name: "Giannina Ricci, PhD", photo: "/colunistas/giannina-ricci.jpg", bio: "Pesquisadora com PhD, especialista em inovação e tecnologia laboratorial." },
  { name: "Dr Edgar Garcez Júnior", photo: "/colunistas/edgar-garcez.png", bio: "Médico patologista clínico com experiência em gestão de laboratórios." },
  { name: "Luiz Fernando Barcellos", photo: "/colunistas/luiz-fernando-barcellos.png", bio: "Profissional do setor laboratorial com atuação em estratégia e mercado." },
  { name: "Dr. Dácio Eduardo Leandro Campos", photo: "/colunistas/dacio-campos.jpg", bio: "Médico com atuação em patologia clínica e medicina laboratorial." },
  { name: "Dra Maria de L P Nascimento", photo: "/colunistas/maria-nascimento.png", bio: "Médica especialista em análises clínicas e diagnóstico laboratorial." },
  { name: "Dra. Angela Satie Nishikaku", photo: "/colunistas/angela-nishikaku.png", bio: "Biomédica pesquisadora com foco em microbiologia e imunologia clínica." },
  { name: "Bruna Mangueira Carlos", photo: "/colunistas/bruna-mangueira.jpg", bio: "Profissional de saúde com foco em inovação e comunicação científica." },
  { name: "Dr Carlos Eduardo S Ferreira", photo: "/colunistas/carlos-ferreira.png", bio: "Patologista clínico com experiência em medicina diagnóstica e gestão laboratorial." },
  { name: "Omar Ghanem", photo: "/colunistas/omar-ghanem.png", bio: "Executivo e consultor no setor de saúde e diagnóstico." },
  { name: "Francisco Balestrin", photo: "/colunistas/francisco-balestrin.jpg", bio: "Líder hospitalar e defensor da sustentabilidade no setor de saúde." },
  { name: "Alexandre Calegari", photo: "/colunistas/alexandre-calegari.png", bio: "Especialista em tecnologia da informação aplicada à saúde e laboratórios." },
  { name: "Rodrigo Brito", photo: "/colunistas/rodrigo-brito.png", bio: "Profissional com atuação em gestão, inovação e mercado laboratorial." },
  { name: "Prof. Marcos Kneip Fleury", photo: "/colunistas/marcos-fleury.png", bio: "Professor universitário e pesquisador em hematologia e análises clínicas." },
  { name: "Carlos Eduardo Gouvêa", photo: "/colunistas/carlos-gouvea.png", bio: "Gestor e estrategista no segmento de medicina diagnóstica." },
  { name: "Marbenha Linko", photo: "/colunistas/marbenha-linko.png", bio: "Especialista em controle de qualidade e padronização laboratorial." },
  { name: "André Doi", photo: "/colunistas/andre-doi.png", bio: "Profissional do setor de diagnósticos com foco em inovação e negócios." },
  { name: "Dra. Maria Elizabeth Menezes", photo: "/colunistas/maria-elizabeth-menezes.jpg", bio: "Farmacêutica-bioquímica com experiência em toxicologia e análises clínicas." },
  { name: "Alexandre Maçada Andrade", photo: "/colunistas/alexandre-macada.jpg", bio: "Profissional de saúde com atuação em gestão e estratégia laboratorial." },
];

export default function Colunistas() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
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
                <motion.p
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                    marginTop: expandedIndex === index ? 8 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-xs text-muted-foreground leading-relaxed overflow-hidden"
                >
                  {col.bio}
                </motion.p>
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