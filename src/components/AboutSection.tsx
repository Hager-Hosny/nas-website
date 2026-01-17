import aboutImage from '@/assets/about-team.jpg';
import { CheckCircle2, Target, Eye, Award } from 'lucide-react';
import { useLanguage } from '@/i18n';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="NAS Engineering Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rtl:-right-auto rtl:-left-6 bg-card rounded-xl p-6 shadow-xl max-w-[260px]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">{t.about.yearsExcellence}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t.about.label}
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              {t.about.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-2">{t.about.vision}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t.about.visionText}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-2">{t.about.mission}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t.about.missionText}
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {t.about.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
