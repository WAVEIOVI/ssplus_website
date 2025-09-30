import { Award, CheckCircle, Users, TrendingUp } from "lucide-react"

interface ISO9001StoryProps {
  currentLang: "fr" | "en"
}

const isoContent = {
  fr: {
    title: "Notre Engagement ISO 9001",
    subtitle: "Premier dans le secteur, leader en qualité depuis 2010",
    story:
      "En 2010, SS PLUS est devenue la première entreprise du secteur de la sécurité incendie en Tunisie à obtenir la certification ISO 9001. Cette certification historique témoigne de notre engagement constant envers la qualité, l'amélioration continue et la satisfaction client. Depuis lors, nous avons maintenu cette certification avec succès, renouvelant notre engagement chaque année et dépassant les exigences du standard international.",
    benefits: [
      {
        icon: CheckCircle,
        title: "Processus Standardisés",
        description: "Tous nos processus sont documentés, optimisés et audités selon les standards internationaux ISO 9001. Chaque étape de notre travail suit des procédures rigoureuses garantissant la qualité et la traçabilité.",
      },
      {
        icon: Users,
        title: "Formation Continue",
        description: "Notre équipe bénéficie d'un programme de formation continue structuré, incluant des certifications techniques, des mises à jour réglementaires et des formations aux nouvelles technologies.",
      },
      {
        icon: TrendingUp,
        title: "Amélioration Continue",
        description: "Nous évaluons et améliorons constamment nos services et processus grâce à des audits internes, des retours clients et des indicateurs de performance. Chaque amélioration est documentée et partagée avec l'équipe.",
      },
    ],
    additionalInfo: {
      title: "Impact de la Certification",
      items: [
        "Réduction de 40% des non-conformités depuis 2010",
        "Amélioration de 95% de la satisfaction client",
        "Optimisation de 30% de nos processus opérationnels",
        "Formation de 100% de notre personnel aux standards qualité"
      ]
    },
    commitment:
      "Notre certification ISO 9001, renouvelée chaque année, démontre notre engagement continu envers l'excellence et la satisfaction de nos clients. C'est un gage de confiance et de qualité pour tous nos partenaires.",
  },
  en: {
    title: "Our ISO 9001 Commitment",
    subtitle: "First in the sector, quality leader since 2010",
    story:
      "In 2010, SS PLUS became the first company in the fire safety sector in Tunisia to achieve ISO 9001 certification. This historic certification demonstrates our constant commitment to quality, continuous improvement and customer satisfaction. Since then, we have successfully maintained this certification, renewing our commitment each year and exceeding the requirements of the international standard.",
    benefits: [
      {
        icon: CheckCircle,
        title: "Standardized Processes",
        description: "All our processes are documented, optimized and audited according to ISO 9001 international standards. Every step of our work follows rigorous procedures ensuring quality and traceability.",
      },
      {
        icon: Users,
        title: "Continuous Training",
        description: "Our team benefits from a structured continuous training program, including technical certifications, regulatory updates and training on new technologies.",
      },
      {
        icon: TrendingUp,
        title: "Continuous Improvement",
        description: "We constantly evaluate and improve our services and processes through internal audits, customer feedback and performance indicators. Every improvement is documented and shared with the team.",
      },
    ],
    additionalInfo: {
      title: "Certification Impact",
      items: [
        "40% reduction in non-conformities since 2010",
        "95% improvement in customer satisfaction",
        "30% optimization of our operational processes",
        "100% of our staff trained in quality standards"
      ]
    },
    commitment:
      "Our ISO 9001 certification, renewed each year, demonstrates our ongoing commitment to excellence and customer satisfaction. It's a guarantee of trust and quality for all our partners.",
  },
}

export function ISO9001Story({ currentLang }: ISO9001StoryProps) {
  const t = isoContent[currentLang]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.title}</h2>
          </div>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-8">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-lg border shadow-sm mb-12">
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.story}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {t.benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Additional Impact Info */}
          <div className="bg-card p-8 rounded-lg border shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">{t.additionalInfo.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.additionalInfo.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <p className="text-center text-lg text-pretty leading-relaxed">{t.commitment}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
