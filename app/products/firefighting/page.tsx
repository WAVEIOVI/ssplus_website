"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Flame, Shield, Zap, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FirefightingProductsPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Équipements Incendie",
      subtitle: "Solutions complètes pour la prévention et la lutte contre les incendies",
      description:
        "Notre gamme d'équipements de lutte contre les incendies comprend des extincteurs, des systèmes de détection, des alarmes et des équipements spécialisés pour tous types d'environnements industriels et commerciaux.",
      backToProducts: "Retour aux catégories",
      features: {
        title: "Pourquoi choisir nos équipements incendie ?",
        items: [
          "Certification ISO 9001 et conformité aux normes internationales",
          "Installation et maintenance par des techniciens certifiés",
          "Formation du personnel aux bonnes pratiques de sécurité",
          "Support technique 24/7 et maintenance préventive",
          "Garantie étendue et pièces de rechange disponibles"
        ]
      },
      products: [
        {
          name: "Extincteurs",
          description: "Tous types d'extincteurs pour différents types de feux",
          features: ["CO2 pour feux électriques", "Eau pour feux de classe A", "Poudre pour feux ABC", "Mousse pour feux liquides"],
          applications: ["Bureaux", "Ateliers", "Véhicules", "Laboratoires", "Zones électriques", "Cuisines"]
        },
        {
          name: "Détecteurs de fumée",
          description: "Systèmes de détection précoce pour une sécurité optimale",
          features: ["Détection optique et ionique", "Alarme sonore et visuelle", "Autonomie de 10 ans"],
          applications: ["Bureaux", "Entrepôts", "Hôtels", "Établissements scolaires"]
        },
        {
          name: "Systèmes sprinkler",
          description: "Protection automatique pour bâtiments commerciaux et industriels",
          features: ["Activation automatique", "Couverture complète", "Maintenance simplifiée"],
          applications: ["Centres commerciaux", "Usines", "Entrepôts", "Bâtiments publics"]
        },
        {
          name: "Alarmes incendie",
          description: "Systèmes d'alerte conformes aux normes de sécurité",
          features: ["Signalisation claire", "Évacuation guidée", "Transmission automatique"],
          applications: ["Immeubles de bureaux", "Hôpitaux", "Écoles", "Industries"]
        },
        {
          name: "RIA (Robinet d'Incendie Armé)",
          description: "Système de lutte contre l'incendie pour bâtiments industriels",
          features: ["Débit élevé", "Portée importante", "Installation fixe"],
          applications: ["Usines", "Entrepôts", "Garages", "Ateliers"]
        },
        {
          name: "Détecteurs de chaleur",
          description: "Détection précoce des élévations de température",
          features: ["Seuils ajustables", "Résistance aux poussières", "Installation simple"],
          applications: ["Cuisines", "Garages", "Sous-sols", "Zones poussiéreuses"]
        }
      ],
      cta: {
        title: "Besoin d'un devis personnalisé ?",
        description: "Nos experts vous accompagnent dans le choix des équipements adaptés à vos besoins",
        button: "Demander un devis"
      }
    },
    en: {
      title: "Fire Equipment",
      subtitle: "Complete solutions for fire prevention and firefighting",
      description:
        "Our range of firefighting equipment includes extinguishers, detection systems, alarms and specialized equipment for all types of industrial and commercial environments.",
      backToProducts: "Back to categories",
      features: {
        title: "Why choose our fire equipment?",
        items: [
          "ISO 9001 certification and international standards compliance",
          "Installation and maintenance by certified technicians",
          "Staff training in safety best practices",
          "24/7 technical support and preventive maintenance",
          "Extended warranty and spare parts available"
        ]
      },
      products: [
        {
          name: "Fire Extinguishers",
          description: "All types of extinguishers for different types of fires",
          features: ["CO2 for electrical fires", "Water for class A fires", "Powder for ABC fires", "Foam for liquid fires"],
          applications: ["Offices", "Workshops", "Vehicles", "Laboratories", "Electrical areas", "Kitchens"]
        },
        {
          name: "Smoke Detectors",
          description: "Early detection systems for optimal safety",
          features: ["Optical and ionic detection", "Sound and visual alarm", "10-year autonomy"],
          applications: ["Offices", "Warehouses", "Hotels", "Educational institutions"]
        },
        {
          name: "Sprinkler Systems",
          description: "Automatic protection for commercial and industrial buildings",
          features: ["Automatic activation", "Complete coverage", "Simplified maintenance"],
          applications: ["Shopping centers", "Factories", "Warehouses", "Public buildings"]
        },
        {
          name: "Fire Alarms",
          description: "Alert systems compliant with safety standards",
          features: ["Clear signaling", "Guided evacuation", "Automatic transmission"],
          applications: ["Office buildings", "Hospitals", "Schools", "Industries"]
        },
        {
          name: "Fire Hydrants",
          description: "Firefighting system for industrial buildings",
          features: ["High flow rate", "Important range", "Fixed installation"],
          applications: ["Factories", "Warehouses", "Garages", "Workshops"]
        },
        {
          name: "Heat Detectors",
          description: "Early detection of temperature rises",
          features: ["Adjustable thresholds", "Dust resistance", "Simple installation"],
          applications: ["Kitchens", "Garages", "Basements", "Dusty areas"]
        }
      ],
      cta: {
        title: "Need a personalized quote?",
        description: "Our experts guide you in choosing equipment adapted to your needs",
        button: "Request a quote"
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Flame className="h-8 w-8 text-white" />
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
                      <Flame className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
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