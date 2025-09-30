"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { HardHat, Shield, Zap, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PPEProductsPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "EPI & Sécurité",
      subtitle: "Équipements de protection individuelle et vêtements de sécurité",
      description:
        "Notre gamme d'EPI comprend des casques, gants, chaussures et équipements respiratoires pour assurer la sécurité des travailleurs dans tous les environnements industriels et commerciaux.",
      backToProducts: "Retour aux catégories",
      features: {
        title: "Pourquoi choisir nos équipements de protection ?",
        items: [
          "Conformité aux normes EN et CE européennes",
          "Tests de qualité rigoureux et certifications",
          "Confort et ergonomie optimisés",
          "Formation à l'utilisation et à l'entretien",
          "Service après-vente et remplacement rapide"
        ]
      },
      products: [
        {
          name: "Casques de sécurité",
          description: "Protection de la tête conforme aux normes internationales",
          features: ["Protection contre les chutes d'objets", "Résistance aux chocs", "Ajustement ergonomique"],
          applications: ["BTP", "Industrie", "Mines", "Chantiers navals"]
        },
        {
          name: "Gants de protection",
          description: "Pour tous types de risques: mécaniques, chimiques, thermiques",
          features: ["Résistance aux coupures", "Protection chimique", "Grip optimisé"],
          applications: ["Laboratoires", "Ateliers", "Manipulation chimique", "Travaux de précision"]
        },
        {
          name: "Chaussures de sécurité",
          description: "Protection des pieds avec embouts renforcés et semelles anti-perforation",
          features: ["Embout acier", "Semelle anti-perforation", "Confort toute la journée"],
          applications: ["Chantiers", "Entrepôts", "Usines", "Zones industrielles"]
        },
        {
          name: "Masques respiratoires",
          description: "Protection contre les poussières, fumées et vapeurs toxiques",
          features: ["Filtres haute efficacité", "Ajustement facial", "Respiration facilitée"],
          applications: ["Peinture", "Soudage", "Traitement chimique", "Environnements poussiéreux"]
        },
        {
          name: "Lunettes de protection",
          description: "Protection oculaire contre les projections et les rayons",
          features: ["Protection UV", "Anti-buée", "Lentilles incassables"],
          applications: ["Soudage", "Travaux de précision", "Environnements lumineux", "Laboratoires"]
        },
        {
          name: "Vêtements de sécurité",
          description: "Vêtements haute visibilité et protection contre les intempéries",
          features: ["Haute visibilité", "Résistance aux intempéries", "Respirabilité"],
          applications: ["Chantiers routiers", "Aéroports", "Zones de circulation", "Travaux de nuit"]
        }
      ],
      cta: {
        title: "Besoin d'un conseil personnalisé ?",
        description: "Nos experts vous aident à choisir les équipements de protection adaptés à votre secteur d'activité",
        button: "Demander un conseil"
      }
    },
    en: {
      title: "PPE & Safety",
      subtitle: "Personal protective equipment and safety workwear",
      description:
        "Our PPE range includes helmets, gloves, shoes and respiratory equipment to ensure worker safety in all industrial and commercial environments.",
      backToProducts: "Back to categories",
      features: {
        title: "Why choose our protective equipment?",
        items: [
          "Compliance with EN and CE European standards",
          "Rigorous quality testing and certifications",
          "Optimized comfort and ergonomics",
          "Training in use and maintenance",
          "After-sales service and fast replacement"
        ]
      },
      products: [
        {
          name: "Safety Helmets",
          description: "Head protection compliant with international standards",
          features: ["Protection against falling objects", "Impact resistance", "Ergonomic adjustment"],
          applications: ["Construction", "Industry", "Mining", "Shipyards"]
        },
        {
          name: "Protective Gloves",
          description: "For all types of risks: mechanical, chemical, thermal",
          features: ["Cut resistance", "Chemical protection", "Optimized grip"],
          applications: ["Laboratories", "Workshops", "Chemical handling", "Precision work"]
        },
        {
          name: "Safety Shoes",
          description: "Foot protection with reinforced toe caps and anti-perforation soles",
          features: ["Steel toe cap", "Anti-perforation sole", "All-day comfort"],
          applications: ["Construction sites", "Warehouses", "Factories", "Industrial areas"]
        },
        {
          name: "Respiratory Masks",
          description: "Protection against dust, smoke and toxic vapors",
          features: ["High efficiency filters", "Facial adjustment", "Easy breathing"],
          applications: ["Painting", "Welding", "Chemical treatment", "Dusty environments"]
        },
        {
          name: "Safety Goggles",
          description: "Eye protection against projections and rays",
          features: ["UV protection", "Anti-fog", "Unbreakable lenses"],
          applications: ["Welding", "Precision work", "Bright environments", "Laboratories"]
        },
        {
          name: "Safety Clothing",
          description: "High visibility clothing and protection against weather",
          features: ["High visibility", "Weather resistance", "Breathability"],
          applications: ["Road construction", "Airports", "Traffic areas", "Night work"]
        }
      ],
      cta: {
        title: "Need personalized advice?",
        description: "Our experts help you choose protective equipment adapted to your industry",
        button: "Request advice"
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <HardHat className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200 text-pretty">{t.subtitle}</p>
            <p className="text-lg text-neutral-300 text-pretty">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.features.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Link href="/products" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <span className="mr-2">←</span>
              {t.backToProducts}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.map((product, index) => (
              <div key={index} className="group bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <HardHat className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-primary flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Caractéristiques principales
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-primary flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-medium rounded-full border border-primary/20 hover:from-primary/20 hover:to-primary/10 transition-all duration-300">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-white/90 mb-8">{t.cta.description}</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}