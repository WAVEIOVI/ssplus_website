import { Server, Globe, Lock, Database, CheckCircle, Zap, Shield } from "lucide-react"

interface TechnicalSpecsProps {
  currentLang: "fr" | "en"
}

const specsContent = {
  fr: {
    title: "Spécifications Techniques",
    subtitle: "Une architecture robuste et sécurisée conçue pour garantir la fiabilité et la performance de vos données critiques",
    specs: [
      {
        icon: Server,
        title: "Infrastructure Cloud",
        description: "Hébergement sécurisé avec redondance et sauvegarde automatique",
        details: ["99.9% de disponibilité", "Sauvegarde quotidienne", "Serveurs en Tunisie"],
      },
      {
        icon: Globe,
        title: "Accès Web",
        description: "Interface web responsive accessible depuis tout navigateur",
        details: ["Compatible tous navigateurs", "Interface responsive", "Accès sécurisé HTTPS"],
      },
      {
        icon: Lock,
        title: "Sécurité Avancée",
        description: "Chiffrement des données et authentification multi-facteurs",
        details: ["Chiffrement AES-256", "Authentification 2FA", "Audit des accès"],
      },
      {
        icon: Database,
        title: "Base de Données",
        description: "Stockage optimisé avec historique complet des données",
        details: ["Historique illimité", "Export des données", "API REST disponible"],
      },
    ],
  },
  en: {
    title: "Technical Specifications",
    subtitle: "A robust and secure architecture designed to ensure reliability and performance of your critical data",
    specs: [
      {
        icon: Server,
        title: "Cloud Infrastructure",
        description: "Secure hosting with redundancy and automatic backup",
        details: ["99.9% availability", "Daily backup", "Servers in Tunisia"],
      },
      {
        icon: Globe,
        title: "Web Access",
        description: "Responsive web interface accessible from any browser",
        details: ["All browsers compatible", "Responsive interface", "Secure HTTPS access"],
      },
      {
        icon: Lock,
        title: "Advanced Security",
        description: "Data encryption and multi-factor authentication",
        details: ["AES-256 encryption", "2FA authentication", "Access audit"],
      },
      {
        icon: Database,
        title: "Database",
        description: "Optimized storage with complete data history",
        details: ["Unlimited history", "Data export", "REST API available"],
      },
    ],
  },
}

export function TechnicalSpecs({ currentLang }: TechnicalSpecsProps) {
  const t = specsContent[currentLang]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            {currentLang === "fr" ? "Spécifications Techniques" : "Technical Specifications"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.specs.map((spec, index) => {
            const Icon = spec.icon
            return (
              <div 
                key={index} 
                className="group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {spec.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-pretty mb-6 leading-relaxed">
                    {spec.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {spec.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-sm">
                        <div className="flex items-center justify-center w-5 h-5 bg-green-500/10 rounded-full flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            )
          })}
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mx-auto mb-4">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-green-500 mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">
              {currentLang === "fr" ? "Disponibilité garantie" : "Guaranteed uptime"}
            </div>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mx-auto mb-4">
              <Lock className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-blue-500 mb-2">AES-256</div>
            <div className="text-sm text-muted-foreground">
              {currentLang === "fr" ? "Chiffrement des données" : "Data encryption"}
            </div>
          </div>
          
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border/50">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">
              {currentLang === "fr" ? "Support technique" : "Technical support"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
