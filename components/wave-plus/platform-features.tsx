import { Shield, BarChart3, Bell, FileCheck, Users, ArrowRight, Sparkles } from "lucide-react"

interface PlatformFeaturesProps {
  currentLang: "fr" | "en"
}

const featuresContent = {
  fr: {
    title: "Fonctionnalités Avancées",
    subtitle: "Une plateforme complète pour optimiser votre sécurité incendie et simplifier la gestion de vos équipements",
    features: [
      {
        icon: Shield,
        title: "Surveillance en Temps Réel",
        description:
          "Monitoring 24/7 de tous vos équipements avec alertes instantanées en cas d'anomalie ou de défaillance.",
      },
      {
        icon: BarChart3,
        title: "Analyses & Rapports",
        description:
          "Tableaux de bord interactifs et rapports détaillés pour optimiser la performance de vos équipements.",
      },
      {
        icon: Bell,
        title: "Alertes Intelligentes",
        description:
          "Notifications automatiques pour la maintenance préventive, les inspections et les non-conformités.",
      },
      {
        icon: FileCheck,
        title: "Conformité Réglementaire",
        description:
          "Suivi automatique des obligations réglementaires tunisiennes et génération de certificats de conformité.",
      },
      {
        icon: Users,
        title: "Gestion Multi-Utilisateurs",
        description:
          "Accès sécurisé avec différents niveaux de permissions pour vos équipes techniques et de direction.",
      },
    ],
  },
  en: {
    title: "Advanced Features",
    subtitle: "A complete platform to optimize your fire safety and simplify equipment management",
    features: [
      {
        icon: Shield,
        title: "Real-Time Monitoring",
        description: "24/7 monitoring of all your equipment with instant alerts in case of anomaly or failure.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reports",
        description: "Interactive dashboards and detailed reports to optimize the performance of your equipment.",
      },
      {
        icon: Bell,
        title: "Smart Alerts",
        description: "Automatic notifications for preventive maintenance, inspections and non-compliance.",
      },
      {
        icon: FileCheck,
        title: "Regulatory Compliance",
        description: "Automatic tracking of Tunisian regulatory obligations and generation of compliance certificates.",
      },
      {
        icon: Users,
        title: "Multi-User Management",
        description: "Secure access with different permission levels for your technical and management teams.",
      },
    ],
  },
}

export function PlatformFeatures({ currentLang }: PlatformFeaturesProps) {
  const t = featuresContent[currentLang]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            {currentLang === "fr" ? "Fonctionnalités Avancées" : "Advanced Features"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{currentLang === "fr" ? "En savoir plus" : "Learn more"}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            {currentLang === "fr" ? "Toutes les fonctionnalités incluses" : "All features included"}
          </div>
        </div>
      </div>
    </section>
  )
}
