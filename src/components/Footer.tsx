import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-labornews.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const footerLinks = {
  institucional: [
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Equipe", href: "#equipe" },
    { label: "Anuncie", href: "#anuncie" },
    { label: "Contato", href: "#contato" },
  ],
  conteudo: [
    { label: "Notícias", href: "#noticias" },
    { label: "Papers", href: "#papers" },
    { label: "Colunistas", href: "#colunistas" },
    { label: "TV LaborNews", href: "#tv" },
  ],
  servicos: [
    { label: "Catálogo Lab", href: "#catalogo" },
    { label: "Sua Carreira", href: "#carreira" },
    { label: "Eventos", href: "#eventos" },
    { label: "Newsletter", href: "#newsletter" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="LaborNews" 
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-sm">
              Conectando o universo das análises clínicas e instrumentação analítica. 
              Seu portal de notícias e informações do setor laboratorial.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Institucional</h4>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Conteúdo</h4>
            <ul className="space-y-2">
              {footerLinks.conteudo.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a href="mailto:contato@labornews.com.br" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                <Mail className="w-4 h-4" />
                contato@labornews.com.br
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 LaborNews - Todos os direitos reservados</p>
            <div className="flex items-center gap-4">
              <a href="#privacidade" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#cookies" className="hover:text-primary-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
