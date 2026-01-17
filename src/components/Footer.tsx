import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/i18n';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t.footer.aboutUs, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.footer.careers, href: '#' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const services = [
    { label: t.services.items[0].title, href: '#services' },
    { label: t.services.items[1].title, href: '#services' },
    { label: t.services.items[2].title, href: '#services' },
    { label: t.services.items[3].title, href: '#services' },
    { label: t.services.items[4].title, href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-xl text-primary-foreground">
                {isRTL ? 'ناس' : 'NAS'}
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">
                  {isRTL ? 'المهندسون العرب' : 'National Arab'}
                </div>
                <div className="text-sm opacity-70">{isRTL ? 'الوطنيون' : 'Engineers'}</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">{t.footer.ourServices}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="whitespace-pre-line">
                {t.contact.address}
              </li>
              <li>
                <a href="tel:+97141234567" className="hover:text-primary-foreground transition-colors">
                  +971 4 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@nasengineers.com" className="hover:text-primary-foreground transition-colors">
                  info@nasengineers.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left rtl:md:text-right">
            {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rtl:right-auto rtl:left-8 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
