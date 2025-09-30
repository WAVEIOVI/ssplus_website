import { Target, Eye, Heart } from "lucide-react"

interface MissionVisionValuesProps {
  currentLang: "fr" | "en"
}

const mvvContent = {
  fr: {
    title: "Mission, Vision & Valeurs",
    subtitle: "Les principes qui guident notre action quotidienne",
    mission: {
      title: "Notre Mission",
      content:
        "Protéger les vies et les biens en fournissant des solutions de sécurité incendie et de protection au travail de la plus haute qualité, adaptées aux besoins spécifiques de chaque client tunisien. Nous nous engageons à offrir un service personnalisé, des équipements certifiés et un accompagnement technique de pointe pour garantir la sécurité optimale de nos partenaires.",
    },
    vision: {
      title: "Notre Vision",
      content:
        "Être le partenaire de référence en Tunisie et en Afrique du Nord pour toutes les solutions de sécurité incendie, reconnu pour notre innovation, notre expertise et notre engagement envers l'excellence. Nous aspirons à révolutionner le secteur par l'intégration de technologies avancées et à devenir un modèle d'excellence en matière de sécurité industrielle.",
    },
    values: {
      title: "Nos Valeurs",
      items: [
        {
          title: "Excellence",
          description: "Nous visons l'excellence dans tous nos services et produits, certifiés ISO 9001. Chaque projet est traité avec le plus grand soin et selon les standards internationaux les plus élevés.",
        },
        {
          title: "Innovation",
          description: "Nous investissons continuellement dans les technologies avancées comme WAVE PLUS pour offrir des solutions toujours plus performantes et adaptées aux défis modernes.",
        },
        {
          title: "Intégrité",
          description: "Nous agissons avec transparence et honnêteté dans toutes nos relations. La confiance de nos clients est notre plus précieux capital.",
        },
        {
          title: "Sécurité",
          description: "La sécurité de nos clients et de leurs équipes est notre priorité absolue. Chaque décision est prise dans l'optique de maximiser la protection des personnes et des biens.",
        },
        {
          title: "Engagement Client",
          description: "Nous nous engageons à fournir un service client exceptionnel, avec un support technique réactif et des solutions sur mesure pour chaque besoin.",
        },
        {
          title: "Développement Durable",
          description: "Nous intégrons les principes du développement durable dans nos pratiques, en proposant des solutions éco-responsables et en minimisant notre impact environnemental.",
        },
      ],
    },
  },
  en: {
    title: "Mission, Vision & Values",
    subtitle: "The principles that guide our daily action",
    mission: {
      title: "Our Mission",
      content:
        "To protect lives and property by providing the highest quality fire safety and workplace protection solutions, tailored to the specific needs of each Tunisian client. We are committed to delivering personalized service, certified equipment and cutting-edge technical support to ensure optimal safety for our partners.",
    },
    vision: {
      title: "Our Vision",
      content:
        "To be the reference partner in Tunisia and North Africa for all fire safety solutions, recognized for our innovation, expertise and commitment to excellence. We aspire to revolutionize the sector through the integration of advanced technologies and become a model of excellence in industrial safety.",
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Excellence",
          description: "We strive for excellence in all our services and products, ISO 9001 certified. Every project is handled with the utmost care and according to the highest international standards.",
        },
        {
          title: "Innovation",
          description: "We continuously invest in advanced technologies like WAVE PLUS to offer increasingly efficient solutions adapted to modern challenges.",
        },
        {
          title: "Integrity",
          description: "We act with transparency and honesty in all our relationships. Our clients' trust is our most valuable asset.",
        },
        {
          title: "Safety",
          description: "The safety of our clients and their teams is our absolute priority. Every decision is made with the aim of maximizing protection of people and property.",
        },
        {
          title: "Client Commitment",
          description: "We are committed to providing exceptional customer service, with responsive technical support and customized solutions for every need.",
        },
        {
          title: "Sustainable Development",
          description: "We integrate sustainable development principles into our practices, offering eco-responsible solutions and minimizing our environmental impact.",
        },
      ],
    },
  },
}

export function MissionVisionValues({ currentLang }: MissionVisionValuesProps) {
  const t = mvvContent[currentLang]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-card p-8 rounded-lg border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t.mission.title}</h3>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed">{t.mission.content}</p>
          </div>

          {/* Vision */}
          <div className="bg-card p-8 rounded-lg border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t.vision.title}</h3>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed">{t.vision.content}</p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">{t.values.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.items.map((value, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
