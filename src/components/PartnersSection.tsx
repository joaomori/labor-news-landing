import { motion } from "framer-motion";

const premiumPartners = [
  "Partner A", "Partner B", "Partner C", "Partner D",
  "Partner E", "Partner F", "Partner G", "Partner H",
];

const goldPartners = [
  "Gold A", "Gold B", "Gold C", "Gold D",
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Premium Partners */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <span className="bg-gold text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Apoiadores Premium
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {premiumPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-4 flex items-center justify-center aspect-square shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 rounded flex items-center justify-center group-hover:from-primary/10 group-hover:to-accent/10 transition-colors">
                  <span className="text-muted-foreground text-xs font-medium text-center">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Apoiadores Gold
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {goldPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-4 flex items-center justify-center aspect-video shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-gold/5 to-primary/5 rounded flex items-center justify-center group-hover:from-gold/10 group-hover:to-primary/10 transition-colors">
                  <span className="text-muted-foreground text-xs font-medium text-center">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#anuncie" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Seja um apoiador
            <span className="text-accent">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
