import { useLanguage } from '@/i18n';

const ClientsSection = () => {
  const { t } = useLanguage();

  const clients = [
    { name: 'ELARABY', logo: 'ELARABY' },
    { name: 'ELARABY', logo: 'ELARABY' },
    { name: 'ELARABY', logo: 'ELARABY' },
    { name: 'ADNOC', logo: 'ELARABY' },
    { name: 'Emaar', logo: 'ELARABY' },
    { name: 'NEOM', logo: 'ELARABY' },
    { name: 'Aldar', logo: 'ELARABY' },
    { name: 'SABIC', logo: 'ELARABY' },
  ];

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="section-container mb-12">
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            {t.clients.title}
          </h3>
          <p className="text-muted-foreground">
            {t.clients.subtitle}
          </p>
        </div>
      </div>

      {/* Scrolling Logo Container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary/30 transition-colors"
            >
              <span className="font-display font-bold text-foreground/70 text-lg">
                {client.logo}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary/30 transition-colors"
            >
              <span className="font-display font-bold text-foreground/70 text-lg">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
