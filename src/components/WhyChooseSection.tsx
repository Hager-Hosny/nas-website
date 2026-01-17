import { Shield, Award, Clock, Settings, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/i18n';

const icons = [Award, Users, Shield, Clock, Settings, TrendingUp];

const WhyChooseSection = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t.whyChoose.label}
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              {t.whyChoose.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t.whyChoose.subtitle}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                {t.whyChoose.cta1}
              </a>
              <a href="#projects" className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                {t.whyChoose.cta2}
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {t.whyChoose.items.map((reason, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
