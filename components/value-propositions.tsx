import { Award, Zap, Users, TrendingUp } from "lucide-react"

interface ValuePropositionsProps {
  currentLang: "fr" | "en"
}

const valueProps = {
  fr: {
    title: "Pourquoi Choisir SS PLUS ?",
    items: [
      {
        icon: Award,
        title: "Certification ISO 9001",
        description: "Premier dans le secteur à obtenir la certification ISO 9001 depuis 2010",
      },
      {
        icon: TrendingUp,
        title: "Leader du Marché",
        description: "Plus de 20 ans d'expérience et leader tunisien de la sécurité incendie",
      },
      {
        icon: Zap,
        title: "Innovation WAVE PLUS",
        description: "Plateforme technologique avancée pour la gestion des équipements",
      },
      {
        icon: Users,
        title: "Expertise Reconnue",
        description: "Équipe d'experts certifiés et service client de qualité supérieure",
      },
    ],
  },
  en: {
    title: "Why Choose SS PLUS?",
    items: [
      {
        icon: Award,
        title: "ISO 9001 Certification",
        description: "First in the sector to achieve ISO 9001 certification since 2010",
      },
      {
        icon: TrendingUp,
        title: "Market Leader",
        description: "Over 20 years of experience and Tunisia's fire safety leader",
      },
      {
        icon: Zap,
        title: "WAVE PLUS Innovation",
        description: "Advanced technology platform for equipment management",
      },
      {
        icon: Users,
        title: "Recognized Expertise",
        description: "Team of certified experts and superior customer service",
      },
    ],
  },
}

export function ValuePropositions({ currentLang }: ValuePropositionsProps) {
  const t = valueProps[currentLang]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.items.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
                tabIndex={0}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
