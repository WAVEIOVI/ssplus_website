import { Play, ArrowRight, Sparkles, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface WavePlusHeroProps {
  currentLang: "fr" | "en"
}

const heroContent = {
  fr: {
    title: "WAVE PLUS",
    subtitle: "Plateforme Web de Gestion Incendie",
    description:
      "Révolutionnez la gestion de vos équipements de sécurité incendie avec notre plateforme digitale innovante. Surveillance en temps réel, maintenance intelligente et conformité réglementaire pour optimiser votre sécurité.",
    features: [
      "Surveillance 24/7 en temps réel",
      "Maintenance intelligente et préventive",
      "Rapports de conformité automatisés",
      "Interface multi-plateforme intuitive",
    ],
    cta: {
      demo: "Demander une Démo",
      video: "Voir la Vidéo",
    },
  },
  en: {
    title: "WAVE PLUS",
    subtitle: "Fire Management Web Platform",
    description:
      "Revolutionize the management of your fire safety equipment with our innovative digital platform. Real-time monitoring, intelligent maintenance and regulatory compliance to optimize your safety.",
    features: [
      "24/7 real-time monitoring",
      "Intelligent and preventive maintenance",
      "Automated compliance reports",
      "Intuitive multi-platform interface",
    ],
    cta: {
      demo: "Request a Demo",
      video: "Watch Video",
    },
  },
}

export function WavePlusHero({ currentLang }: WavePlusHeroProps) {
  const t = heroContent[currentLang]

  const basePath = "/ssplus_website"
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-3 w-3 mr-1" />
                {currentLang === "fr" ? "Nouvelle Plateforme" : "New Platform"}
              </Badge>
            </div>

            <div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-8">
                {t.title}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/30 rounded-full mb-8"></div>
              
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-balance leading-tight">
                {t.subtitle}
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                {t.description}
              </p>
            </div>

            {/* Features with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                {t.cta.demo}
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent border-2 hover:bg-primary/5 transition-all duration-300 group">
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {t.cta.video}
              </Button>
            </div>
          </div>

          {/* Modern Platform Display */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 border border-border/50 shadow-2xl backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-40 h-40 mx-auto relative">
                      <Image
                        src={`${basePath}/images/wave-plus-logo.png`}
                        alt="Wave Plus Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      WAVE PLUS
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {currentLang === "fr" 
                        ? "Plateforme de Gestion Incendie" 
                        : "Fire Management Platform"}
                    </p>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-medium">{currentLang === "fr" ? "En ligne" : "Online"}</span>
                    </div>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-muted-foreground font-mono">wave-plus.ssplus.tn</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-border/50 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Monitoring</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-border/50 animate-float delay-1000">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
