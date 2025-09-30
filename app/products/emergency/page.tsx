"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { AlertTriangle, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EmergencyProductsPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Équipements d'Urgence",
      subtitle: "Matériel de premiers secours et équipements d'intervention d'urgence",
      description:
        "Notre gamme d'équipements d'urgence comprend des trousses de premiers secours, des défibrillateurs et du matériel d'évacuation pour tous types de situations d'urgence industrielles et commerciales.",
      backToProducts: "Retour aux catégories",
      features: {
        title: "Pourquoi choisir nos équipements d'urgence ?",
        items: [
          "Conformité aux normes internationales de premiers secours",
          "Formation du personnel aux gestes d'urgence",
          "Maintenance et vérification régulières",
          "Disponibilité 24/7 et remplacement rapide",
          "Support technique et conseils d'experts"
        ]
      },
      products: [
        {
          name: "Trousses de premiers secours",
          description: "Kits complets pour les interventions de premiers secours",
          features: ["Contenu conforme aux normes", "Matériel stérile", "Organisation optimale"],
          applications: ["Bureaux", "Ateliers", "Chantiers", "Véhicules"]
        },
        {
          name: "Défibrillateurs",
          description: "Appareils automatisés pour les urgences cardiaques",
          features: ["Utilisation simplifiée", "Instructions vocales", "Maintenance automatique"],
          applications: ["Centres commerciaux", "Bureaux", "Écoles", "Lieux publics"]
        },
        {
          name: "Matériel d'évacuation",
          description: "Équipements pour faciliter l'évacuation des personnes",
          features: ["Civières pliantes", "Brancards", "Échelles de secours"],
          applications: ["Hôpitaux", "Écoles", "Bâtiments hauts", "Zones difficiles d'accès"]
        },
        {
          name: "Équipements de sauvetage",
          description: "Matériel spécialisé pour les opérations de sauvetage",
          features: ["Cordes de sauvetage", "Harnais de sécurité", "Équipements de descente"],
          applications: ["Pompiers", "Secours", "Chantiers", "Interventions spécialisées"]
        },
        {
          name: "Oxygénothérapie",
          description: "Équipements d'oxygénothérapie d'urgence",
          features: ["Bouteilles d'oxygène", "Masques et canules", "Régulateurs de pression"],
          applications: ["Hôpitaux", "Ambulances", "Centres médicaux", "Interventions d'urgence"]
        },
        {
          name: "Équipements de réanimation",
          description: "Matériel de réanimation et de maintien des fonctions vitales",
          features: ["Ventilateurs manuels", "Masques de réanimation", "Aspirateurs de mucosités"],
          applications: ["Services médicaux", "Ambulances", "Centres de soins", "Formations"]
        }
      ],
      cta: {
        title: "Besoin d'une formation aux premiers secours ?",
        description: "Nos experts vous forment aux gestes d'urgence et à l'utilisation des équipements",
        button: "Demander une formation"
      }
    },
    en: {
      title: "Emergency Equipment",
      subtitle: "First aid materials and emergency response equipment",
      description:
        "Our emergency equipment range includes first aid kits, defibrillators and evacuation equipment for all types of industrial and commercial emergency situations.",
      backToProducts: "Back to categories",
      features: {
        title: "Why choose our emergency equipment?",
        items: [
          "Compliance with international first aid standards",
          "Staff training in emergency procedures",
          "Regular maintenance and verification",
          "24/7 availability and fast replacement",
          "Technical support and expert advice"
        ]
      },
      products: [
        {
          name: "First Aid Kits",
          description: "Complete kits for first aid interventions",
          features: ["Standards-compliant content", "Sterile materials", "Optimal organization"],
          applications: ["Offices", "Workshops", "Construction sites", "Vehicles"]
        },
        {
          name: "Defibrillators",
          description: "Automated devices for cardiac emergencies",
          features: ["Simplified use", "Voice instructions", "Automatic maintenance"],
          applications: ["Shopping centers", "Offices", "Schools", "Public places"]
        },
        {
          name: "Evacuation Equipment",
          description: "Equipment to facilitate the evacuation of people",
          features: ["Folding stretchers", "Stretchers", "Emergency ladders"],
          applications: ["Hospitals", "Schools", "High-rise buildings", "Hard-to-reach areas"]
        },
        {
          name: "Rescue Equipment",
          description: "Specialized equipment for rescue operations",
          features: ["Rescue ropes", "Safety harnesses", "Descent equipment"],
          applications: ["Firefighters", "Rescue services", "Construction sites", "Specialized interventions"]
        },
        {
          name: "Oxygen Therapy",
          description: "Emergency oxygen therapy equipment",
          features: ["Oxygen cylinders", "Masks and cannulas", "Pressure regulators"],
          applications: ["Hospitals", "Ambulances", "Medical centers", "Emergency interventions"]
        },
        {
          name: "Resuscitation Equipment",
          description: "Resuscitation and vital function maintenance equipment",
          features: ["Manual ventilators", "Resuscitation masks", "Mucus aspirators"],
          applications: ["Medical services", "Ambulances", "Care centers", "Training"]
        }
      ],
      cta: {
        title: "Need first aid training?",
        description: "Our experts train you in emergency procedures and equipment use",
        button: "Request training"
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <AlertTriangle className="h-8 w-8 text-white" />
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
                      <AlertTriangle className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
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