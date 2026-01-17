import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n';

const testimonialImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
];

const TestimonialsSection = () => {
  const { t, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % t.testimonials.items.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t.testimonials.label}
            </div>
            <h2 className="heading-lg text-foreground">
              {t.testimonials.title}
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 md:left-12 rtl:left-auto rtl:right-8 md:rtl:right-12 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                "{t.testimonials.items[activeIndex].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonialImages[activeIndex]}
                    alt={t.testimonials.items[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display font-bold text-foreground">
                      {t.testimonials.items[activeIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.testimonials.items[activeIndex].position}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={isRTL ? nextTestimonial : prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={isRTL ? prevTestimonial : nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {t.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-primary'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
