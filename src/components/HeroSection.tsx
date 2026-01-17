import heroImage from '@/assets/hero-construction.jpg';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/i18n';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              {t.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-primary-foreground mb-6 opacity-0 animate-fade-up delay-100">
            {t.hero.title}
            <span className="block mt-2 text-accent">{t.hero.titleAccent}</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-up delay-200 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 group"
            >
              <span>{t.hero.cta1}</span>
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-outline flex items-center gap-2"
            >
              <span>{t.hero.cta2}</span>
            </a>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-primary-foreground/10 opacity-0 animate-fade-up delay-400">
            {[
              { value: '25+', label: t.hero.stats.years },
              { value: '500+', label: t.hero.stats.projects },
              { value: '1200+', label: t.hero.stats.engineers },
              { value: '150+', label: t.hero.stats.clients },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-500">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
