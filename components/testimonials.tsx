"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialsProps {
  currentLang: "fr" | "en"
}

const testimonials = {
  fr: {
    title: "Ce Que Disent Nos Clients",
    subtitle: "La confiance de nos partenaires est notre plus grande récompense",
    items: [
      {
        name: "Ahmed Maaloul",
        company: "Directeur Technique, Mediterranean De Securité Et Services",
        content:
          "SS PLUS nous accompagne depuis plus de 10 ans. Leur expertise et leur réactivité sont exceptionnelles. La plateforme WAVE PLUS a révolutionné notre gestion de la sécurité incendie.",
        rating: 5,
      },
      {
        name: "Fatma Trabelsi",
        company: "Responsable HSE, Complexe Chimique Gabès",
        content:
          "Une équipe professionnelle et des solutions adaptées à nos besoins spécifiques. La certification ISO 9001 de SS PLUS nous rassure sur la qualité de leurs services.",
        rating: 5,
      },
      {
        name: "Mohamed Karray",
        company: "Responsable HSE, SOCOMENIN",
        content:
          "Formation de qualité et maintenance impeccable. SS PLUS comprend les enjeux de sécurité dans l'hôtellerie et propose des solutions sur mesure.",
        rating: 5,
      },
    ],
  },
  en: {
    title: "What Our Clients Say",
    subtitle: "The trust of our partners is our greatest reward",
    items: [
      {
        name: "Ahmed Maaloul",
        company: "Technical Director, Mediterranean Security and Services",
        content:
          "SS PLUS has been supporting us for over 10 years. Their expertise and responsiveness are exceptional. The WAVE PLUS platform has revolutionized our fire safety management.",
        rating: 5,
      },
      {
        name: "Fatma Trabelsi",
        company: "HSE Manager, Gabès Chemical Complex",
        content:
          "A professional team and solutions adapted to our specific needs. SS PLUS's ISO 9001 certification reassures us about the quality of their services.",
        rating: 5,
      },
      {
        name: "Mohamed Karray",
        company: "HSE Manager, SOCOMENIN",
        content:
          "Quality training and impeccable maintenance. SS PLUS understands the security challenges in the hotel industry and offers tailored solutions.",
        rating: 5,
      },
    ],
  },
};

export function Testimonials({ currentLang }: TestimonialsProps) {
  const t = testimonials[currentLang];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, animating]);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current === t.items.length - 1 ? 0 : current + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current === 0 ? t.items.length - 1 : current - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Decorative elements with performance optimizations */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-pulse hero-decorative-element use-gpu"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl animate-pulse hero-decorative-element use-gpu" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-glow">{t.title}</h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>{t.subtitle}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {t.items.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-16"
                >
                  <div 
                    className={`bg-card p-8 rounded-lg shadow-lg flex flex-col h-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                      index === activeIndex ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: '300ms' }}
                  >
                    <div className="flex mb-4 animate-fade-in-right" style={{ animationDelay: '400ms' }}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-primary text-primary animate-pulse" 
                          style={{ animationDelay: `${500 + (i * 100)}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-6 flex-grow text-lg italic animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                      {testimonial.content}
                    </p>
                    <div className="animate-fade-in-right" style={{ animationDelay: '700ms' }}>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md z-10 transition-all duration-300 hover:scale-110 animate-fade-in-left"
            aria-label="Previous testimonial"
            style={{ animationDelay: '800ms' }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md z-10 transition-all duration-300 hover:scale-110 animate-fade-in-right"
            aria-label="Next testimonial"
            style={{ animationDelay: '800ms' }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          {t.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-primary w-6 animate-pulse" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
