"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Shield, Zap, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignageProductsPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Signalisation Sécurité",
      subtitle: "Panneaux de sécurité, marquage au sol et équipements d'urgence",
      description:
        "Notre gamme de signalisation de sécurité comprend des panneaux d'évacuation, de l'éclairage de secours et du marquage photoluminescent pour tous types de bâtiments industriels et commerciaux.",
      backToProducts: "Retour aux catégories",
      features: {
        title: "Pourquoi choisir notre signalisation de sécurité ?",
        items: [
          "Conformité aux normes ISO et réglementations tunisiennes",
          "Visibilité optimale jour et nuit",
          "Installation professionnelle et maintenance",
          "Personnalisation selon vos besoins",
          "Durabilité et résistance aux intempéries"
        ]
      },
      products: [
        {
          name: "Panneaux d'évacuation",
          description: "Signalisation claire pour les voies d'évacuation et sorties de secours",
          features: ["Pictogrammes universels", "Résistance aux intempéries", "Installation facile"],
          applications: ["Bureaux", "Hôpitaux", "Écoles", "Centres commerciaux"]
        },
        {
          name: "Éclairage de secours",
          description: "Systèmes d'éclairage autonomes pour les situations d'urgence",
          features: ["Autonomie 3h minimum", "Recharge automatique", "Test automatique"],
          applications: ["Couloirs", "Escaliers", "Sorties", "Zones de rassemblement"]
        },
        {
          name: "Marquage photoluminescent",
          description: "Visibilité dans l'obscurité pour une évacuation sécurisée",
          features: ["Émission lumineuse 8h", "Installation simple", "Entretien minimal"],
          applications: ["Escaliers", "Couloirs", "Sorties", "Équipements de sécurité"]
        },
        {
          name: "Barrières de sécurité",
          description: "Délimitation des zones dangereuses et contrôle d'accès",
          features: ["Haute visibilité", "Résistance aux chocs", "Installation flexible"],
          applications: ["Chantiers", "Zones de travaux", "Événements", "Contrôle d'accès"]
        },
        {
          name: "Panneaux de danger",
          description: "Signalisation des risques et obligations de sécurité",
          features: ["Pictogrammes clairs", "Matériaux durables", "Conformité réglementaire"],
          applications: ["Zones industrielles", "Laboratoires", "Ateliers", "Chantiers"]
        },
        {
          name: "Marquage au sol",
          description: "Signalisation horizontale pour la circulation et l'organisation",
          features: ["Résistance au trafic", "Couleurs réglementaires", "Application facile"],
          applications: ["Parkings", "Entrepôts", "Ateliers", "Zones de circulation"]
        }
      ],
      cta: {
        title: "Besoin d'une signalisation personnalisée ?",
        description: "Nos experts vous conseillent pour une signalisation adaptée à votre établissement",
        button: "Demander un devis"
      }
    },
    en: {
      title: "Safety Signage",
      subtitle: "Safety signs, floor marking and emergency equipment",
      description:
        "Our safety signage range includes evacuation signs, emergency lighting and photoluminescent marking for all types of industrial and commercial buildings.",
      backToProducts: "Back to categories",
      features: {
        title: "Why choose our safety signage?",
        items: [
          "Compliance with ISO standards and Tunisian regulations",
          "Optimal visibility day and night",
          "Professional installation and maintenance",
          "Customization according to your needs",
          "Durability and weather resistance"
        ]
      },
      products: [
        {
          name: "Evacuation Signs",
          description: "Clear signage for evacuation routes and emergency exits",
          features: ["Universal pictograms", "Weather resistance", "Easy installation"],
          applications: ["Offices", "Hospitals", "Schools", "Shopping centers"]
        },
        {
          name: "Emergency Lighting",
          description: "Self-contained lighting systems for emergency situations",
          features: ["Minimum 3h autonomy", "Automatic recharge", "Automatic testing"],
          applications: ["Corridors", "Staircases", "Exits", "Assembly areas"]
        },
        {
          name: "Photoluminescent Marking",
          description: "Visibility in darkness for safe evacuation",
          features: ["8h light emission", "Simple installation", "Minimal maintenance"],
          applications: ["Staircases", "Corridors", "Exits", "Safety equipment"]
        },
        {
          name: "Safety Barriers",
          description: "Delimitation of dangerous areas and access control",
          features: ["High visibility", "Impact resistance", "Flexible installation"],
          applications: ["Construction sites", "Work areas", "Events", "Access control"]
        },
        {
          name: "Danger Signs",
          description: "Signage for risks and safety obligations",
          features: ["Clear pictograms", "Durable materials", "Regulatory compliance"],
          applications: ["Industrial areas", "Laboratories", "Workshops", "Construction sites"]
        },
        {
          name: "Floor Marking",
          description: "Horizontal signage for traffic and organization",
          features: ["Traffic resistance", "Regulatory colors", "Easy application"],
          applications: ["Parking lots", "Warehouses", "Workshops", "Traffic areas"]
        }
      ],
      cta: {
        title: "Need personalized signage?",
        description: "Our experts advise you on signage adapted to your establishment",
        button: "Request a quote"
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Shield className="h-8 w-8 text-white" />
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
                      <Shield className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
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