import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-labornews.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69Z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/labornewsbr/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/labornewsbr/?locale=pt_BR", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/labornewsbr/", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@labornews", label: "TikTok" },
];

const footerLinks = {
  institucional: [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Equipe", href: "/equipe" },
    { label: "Anuncie", href: "/anuncie" },
    { label: "Contato", href: "/contato" },
  ],
  conteudo: [
    { label: "Notícias", href: "/#noticias" },
    { label: "Papers", href: "/papers" },
    { label: "Colunistas", href: "/colunistas" },
    { label: "TV LaborNews", href: "/tv" },
  ],
  servicos: [
    { label: "Catálogo Lab", href: "/catalogo" },
    { label: "Sua Carreira", href: "/carreira" },
    { label: "Eventos", href: "/eventos" },
    { label: "Newsletter", href: "/newsletter" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <img src={logo} alt="LaborNews" className="h-12 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-sm">
              Conectando o universo das análises clínicas e instrumentação analítica. 
              Seu portal de notícias e informações do setor laboratorial.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Institucional</h4>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Conteúdo</h4>
            <ul className="space-y-2">
              {footerLinks.conteudo.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a href="mailto:contato@labornews.com.br" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                <Mail className="w-4 h-4" />
                contato@labornews.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 LaborNews - Todos os direitos reservados</p>
            <div className="flex items-center gap-4">
              <Link to="/privacidade" className="hover:text-primary-foreground transition-colors">Política de Privacidade</Link>
              <Link to="/termos" className="hover:text-primary-foreground transition-colors">Termos de Uso</Link>
              <Link to="/cookies" className="hover:text-primary-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
