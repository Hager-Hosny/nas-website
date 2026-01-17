import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Briefcase, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n';

const stats = [
  { icon: Briefcase, value: 25, suffix: '+' },
  { icon: Building2, value: 500, suffix: '+' },
  { icon: Users, value: 1200, suffix: '+' },
  { icon: Globe, value: 150, suffix: '+' },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({ stat, index, isVisible, label }: { stat: typeof stats[0]; index: number; isVisible: boolean; label: string }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <stat.icon className="w-8 h-8 text-primary" />
      </div>
      <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const labels = [
    t.hero.stats.years,
    t.hero.stats.projects,
    t.hero.stats.engineers,
    t.hero.stats.clients,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} isVisible={isVisible} label={labels[index]} />
          ))}
        </div>
      </div>

      {/* Custom CSS for primary section text */}
      <style>{`
        section.py-20.bg-primary .text-foreground {
          color: hsl(var(--primary-foreground));
        }
        section.py-20.bg-primary .text-muted-foreground {
          color: hsl(var(--primary-foreground) / 0.7);
        }
        section.py-20.bg-primary .bg-primary\\/10 {
          background-color: hsl(var(--primary-foreground) / 0.15);
        }
        section.py-20.bg-primary .text-primary {
          color: hsl(var(--primary-foreground));
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
