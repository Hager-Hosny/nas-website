import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-xl transition-colors ${
            isScrolled ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground/20 text-primary-foreground'
          }`}>
            {isRTL ? 'ناس' : 'NAS'}
          </div>
          <div className={`hidden sm:block transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            <div className="font-display font-bold text-lg leading-tight">
              {isRTL ? 'المهندسون الوطنيون' : 'National Arab'}
            </div>
            <div className="text-sm opacity-80">{isRTL ? 'العرب' : 'Engineers'}</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-primary-foreground/80 hover:bg-primary-foreground/10'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          
          <a
            href="tel:+1234567890"
            className={`flex items-center gap-2 text-sm transition-colors ${
              isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>+201024845977</span>
          </a>
          <a
            href="#contact"
            className="btn-primary text-sm py-3 px-6"
          >
            {t.nav.getQuote}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border animate-fade-in">
          <nav className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <a href="tel:+97141234567" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+201024845977</span>
              </a>
              <a href="mailto:info@nasengineers.com" className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@nasengineers.com</span>
              </a>
              <a href="#contact" className="btn-primary text-center mt-2">
                {t.nav.getQuote}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
