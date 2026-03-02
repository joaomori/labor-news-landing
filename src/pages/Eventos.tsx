import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, ExternalLink } from "lucide-react";

const upcomingEvents = [
  {
    title: "Congresso Brasileiro de Análises Clínicas 2025",
    date: "15-18 Mai 2025",
    location: "São Paulo, SP",
    venue: "Expo Center Norte",
    type: "Congresso",
    description: "O maior evento de análises clínicas da América Latina, reunindo mais de 5.000 profissionais do setor.",
  },
  {
    title: "Workshop: IA Aplicada ao Diagnóstico",
    date: "22 Jun 2025",
    location: "Online",
    venue: "Plataforma Virtual",
    type: "Workshop",
    description: "Workshop prático sobre aplicação de inteligência artificial em laudos e análise de imagens laboratoriais.",
  },
  {
    title: "Feira Hospitalar 2025",
    date: "20-23 Jul 2025",
    location: "São Paulo, SP",
    venue: "São Paulo Expo",
    type: "Feira",
    description: "Feira internacional de produtos, equipamentos, serviços e tecnologia para hospitais e laboratórios.",
  },
  {
    title: "Simpósio de Microbiologia Clínica",
    date: "10-11 Ago 2025",
    location: "Rio de Janeiro, RJ",
    venue: "Centro de Convenções RioCenter",
    type: "Simpósio",
    description: "Atualizações em microbiologia clínica com foco em resistência antimicrobiana e novas técnicas diagnósticas.",
  },
];

const pastEvents = [
  { title: "Webinar: Gestão da Qualidade em Tempos de Crise", date: "Mar 2025", type: "Webinar" },
  { title: "Encontro Nacional de Patologistas", date: "Fev 2025", type: "Encontro" },
  { title: "Seminário de Automação Laboratorial", date: "Jan 2025", type: "Seminário" },
];

export default function Eventos() {
  return (
    <PageLayout>
      <PageHero
        title="Eventos"
        subtitle="Congressos, feiras e encontros do setor laboratorial."
        badge="SERVIÇOS"
      />

      {/* Upcoming Events */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Próximos Eventos</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary p-6 md:w-48 flex flex-col items-center justify-center text-center flex-shrink-0">
                    <CalendarDays className="w-8 h-8 text-primary-foreground mb-2" />
                    <span className="text-primary-foreground font-bold text-sm">{event.date}</span>
                    <span className="text-primary-foreground/70 text-xs mt-1 bg-primary-foreground/10 px-2 py-0.5 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {event.venue}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">Eventos Anteriores</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-lg p-5 shadow-sm border border-border"
              >
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-medium">
                  {event.type}
                </span>
                <h3 className="font-heading font-bold text-sm text-card-foreground mt-3 mb-1">
                  {event.title}
                </h3>
                <p className="text-xs text-muted-foreground">{event.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Divulgue seu evento
          </h2>
          <p className="text-muted-foreground mb-6">
            Tem um evento do setor laboratorial? Divulgue para nossa audiência de milhares de profissionais.
          </p>
          <a href="/contato" className="btn-accent inline-block">Enviar Evento</a>
        </div>
      </section>
    </PageLayout>
  );
}
