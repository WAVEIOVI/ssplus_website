import { Calendar, Award, TrendingUp, Users } from "lucide-react"

interface CompanyHistoryProps {
  currentLang: "fr" | "en"
}

const historyContent = {
  fr: {
    title: "Notre Histoire",
    subtitle: "Plus de deux décennies d'innovation et d'excellence",
    milestones: [
      {
        year: "2002",
        title: "Fondation de SS PLUS",
        description:
          "Création de l'entreprise par Karim Ben Salem avec une vision claire : devenir le leader tunisien de la sécurité incendie. Début des activités avec une équipe de 5 personnes et les premiers contrats dans la région de Sfax.",
        icon: Users,
      },
      {
        year: "2005",
        title: "Première Certification",
        description: "Obtention de nos premières certifications techniques et agréments pour l'installation et la maintenance d'équipements de sécurité incendie. Développement de notre expertise technique.",
        icon: Award,
      },
      {
        year: "2010",
        title: "Certification ISO 9001",
        description: "Premier dans le secteur à obtenir la certification ISO 9001, marquant notre engagement qualité. Cette certification nous distingue comme référence en matière de processus et de qualité de service.",
        icon: Award,
      },
      {
        year: "2015",
        title: "Expansion Nationale",
        description: "Ouverture de notre bureau de Tunis et expansion de nos services à l'échelle nationale. Développement de partenariats stratégiques avec les principaux acteurs industriels tunisiens.",
        icon: TrendingUp,
      },
      {
        year: "2018",
        title: "Innovation Technologique",
        description: "Investissement massif dans les nouvelles technologies et lancement de notre département R&D. Développement de solutions innovantes pour l'industrie 4.0.",
        icon: Calendar,
      },
      {
        year: "2022",
        title: "Lancement WAVE PLUS",
        description: "Innovation technologique majeure avec le lancement de notre plateforme de gestion digitale WAVE PLUS. Révolution de la maintenance prédictive et de la gestion des équipements de sécurité.",
        icon: Calendar,
      },
    ],
  },
  en: {
    title: "Our History",
    subtitle: "Over two decades of innovation and excellence",
    milestones: [
      {
        year: "2002",
        title: "SS PLUS Foundation",
        description: "Company creation by Karim Ben Salem with a clear vision: to become Tunisia's leader in fire safety. Started operations with a team of 5 people and first contracts in the Sfax region.",
        icon: Users,
      },
      {
        year: "2005",
        title: "First Certifications",
        description: "Obtained our first technical certifications and approvals for installation and maintenance of fire safety equipment. Development of our technical expertise.",
        icon: Award,
      },
      {
        year: "2010",
        title: "ISO 9001 Certification",
        description: "First in the sector to achieve ISO 9001 certification, marking our quality commitment. This certification distinguishes us as a reference in processes and service quality.",
        icon: Award,
      },
      {
        year: "2015",
        title: "National Expansion",
        description: "Opening of our Tunis office and expansion of our services nationwide. Development of strategic partnerships with major Tunisian industrial players.",
        icon: TrendingUp,
      },
      {
        year: "2018",
        title: "Technological Innovation",
        description: "Massive investment in new technologies and launch of our R&D department. Development of innovative solutions for Industry 4.0.",
        icon: Calendar,
      },
      {
        year: "2022",
        title: "WAVE PLUS Launch",
        description: "Major technological innovation with the launch of our WAVE PLUS digital management platform. Revolution in predictive maintenance and safety equipment management.",
        icon: Calendar,
      },
    ],
  },
}

export function CompanyHistory({ currentLang }: CompanyHistoryProps) {
  const t = historyContent[currentLang]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {t.milestones.map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary rounded-full flex-shrink-0 relative z-10">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card p-6 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="md:hidden flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground text-pretty">{milestone.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
