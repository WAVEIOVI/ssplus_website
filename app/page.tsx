"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesGrid } from "@/components/services-grid"
import { ValuePropositions } from "@/components/value-propositions"
import { StatsCounter } from "@/components/stats-counter"
import { Testimonials } from "@/components/testimonials"
import { ClientLogos } from "@/components/client-logos"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  const { currentLang, getTranslation } = useLanguage()
  const t = getTranslation ? getTranslation() : { 
    hero: { 
      title: "Your Fire Safety Partner",
      subtitle: "Comprehensive fire protection solutions for Tunisian businesses for over 20 years",
      primaryCta: "Contact Us",
      secondaryCta: "Discover WAVE PLUS",
      description: "We design, install, and maintain certified fire protection systems, deliver expert training, and provide rapid support to keep your people and assets safe.",
      bullets: [
        "ISO 9001 certified practices",
        "20+ years serving Tunisia",
        "End-to-end safety solutions"
      ]
    }
  }
  
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center hero-gradient overflow-hidden">
        {/* Background video with enhanced zoom effect */}
        <video
          className="absolute inset-0 w-full h-full object-cover animate-zoom-slow"
          src="/ssplus_website/videos/02.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        {/* Animated overlays for readability */}
        <div className="absolute inset-0 hero-overlay animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1] animate-fade-in" />
        
        {/* Enhanced decorative elements with performance optimizations */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse hero-decorative-element use-gpu"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse hero-decorative-element use-gpu"></div>
        <div className="absolute top-1/3 left-10 w-24 h-24 rounded-full bg-accent/10 blur-2xl animate-pulse hero-decorative-element use-gpu" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 rounded-full bg-chart-3/10 blur-2xl animate-pulse hero-decorative-element use-gpu" style={{ animationDelay: '1.5s' }}></div>

        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl py-16 md:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up-strong animate-delay-100 animate-glow">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-4 md:mb-6 animate-fade-in-up-strong animate-delay-200">
              {t.hero.subtitle}
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mb-6 md:mb-8 animate-fade-in-up-strong animate-delay-300">
              {t.hero.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {t.hero.bullets?.map((item: string, index: number) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-white/90 animate-fade-in-left"
                  style={{ animationDelay: `${350 + (index * 150)}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary animate-pulse" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-strong animate-delay-600">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary-dark hover:scale-105 transition-transform relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">{t.hero.primaryCta}</span>
                  <span className="absolute inset-0 animate-shimmer group-hover:opacity-100 opacity-0 transition-opacity"></span>
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform animate-bounce-slow"
              >
                <Link href="/wave-plus">{t.hero.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <ServicesGrid currentLang={currentLang} />
      </Reveal>
      <Reveal delayMs={100}>
        <ValuePropositions currentLang={currentLang} />
      </Reveal>
      <Reveal delayMs={200}>
        <StatsCounter currentLang={currentLang} />
      </Reveal>
      <Reveal delayMs={300}>
        <ClientLogos currentLang={currentLang} />
      </Reveal>
      <Reveal delayMs={400}>
        <Testimonials currentLang={currentLang} />
      </Reveal>

      <Footer />
    </div>
  )
}
