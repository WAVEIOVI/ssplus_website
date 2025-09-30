"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Users, ArrowLeft, CheckCircle, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function SupportServicePage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Support Technique",
      subtitle: "Assistance technique et support client pour tous vos équipements",
      description:
        "Notre équipe de support technique est disponible pour vous aider à résoudre rapidement tout problème lié à vos équipements de sécurité incendie. Avec une disponibilité 24/7 et des techniciens spécialisés, nous garantissons une résolution rapide de vos problèmes techniques.",
      features: [
        {
          title: "Hotline technique 24/7",
          description: "Assistance téléphonique disponible à tout moment pour répondre à vos questions"
        },
        {
          title: "Diagnostic à distance",
          description: "Identification rapide des problèmes sans nécessiter de déplacement"
        },
        {
          title: "Intervention sur site",
          description: "Techniciens qualifiés prêts à intervenir directement sur votre site"
        },
        {
          title: "Pièces de rechange garanties",
          description: "Accès rapide aux pièces détachées d'origine pour tous vos équipements"
        }
      ],
      packages: [
        {
          title: "Support Standard",
          features: [
            "Assistance par email",
            "Support téléphonique 8h-17h",
            "Délai de réponse sous 24h",
            "Accès à la base de connaissances"
          ],
          recommended: false
        },
        {
          title: "Support Premium",
          features: [
            "Assistance prioritaire",
            "Support téléphonique 24/7",
            "Délai de réponse sous 4h",
            "Intervention sur site sous 48h",
            "Remise sur pièces détachées"
          ],
          recommended: true
        },
        {
          title: "Support Dédié",
          features: [
            "Technicien dédié",
            "Support téléphonique 24/7",
            "Délai de réponse sous 1h",
            "Intervention sur site sous 24h",
            "Pièces détachées prioritaires",
            "Rapport mensuel de performance"
          ],
          recommended: false
        }
      ],
      backToServices: "Retour aux services",
      contactUs: "Contactez-nous pour un devis"
    },
    en: {
      title: "Technical Support",
      subtitle: "Technical assistance and customer support for all your equipment",
      description:
        "Our technical support team is available to help you quickly resolve any issues related to your fire safety equipment. With 24/7 availability and specialized technicians, we guarantee quick resolution of your technical problems.",
      features: [
        {
          title: "24/7 technical hotline",
          description: "Phone assistance available at any time to answer your questions"
        },
        {
          title: "Remote diagnostics",
          description: "Quick identification of problems without requiring on-site visits"
        },
        {
          title: "On-site intervention",
          description: "Qualified technicians ready to intervene directly at your site"
        },
        {
          title: "Guaranteed spare parts",
          description: "Quick access to original spare parts for all your equipment"
        }
      ],
      packages: [
        {
          title: "Standard Support",
          features: [
            "Email assistance",
            "Phone support 8am-5pm",
            "Response time within 24h",
            "Access to knowledge base"
          ],
          recommended: false
        },
        {
          title: "Premium Support",
          features: [
            "Priority assistance",
            "24/7 phone support",
            "Response time within 4h",
            "On-site intervention within 48h",
            "Discount on spare parts"
          ],
          recommended: true
        },
        {
          title: "Dedicated Support",
          features: [
            "Dedicated technician",
            "24/7 phone support",
            "Response time within 1h",
            "On-site intervention within 24h",
            "Priority spare parts",
            "Monthly performance report"
          ],
          recommended: false
        }
      ],
      backToServices: "Back to services",
      contactUs: "Contact us for a quote"
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200 text-pretty">{t.subtitle}</p>
            <p className="text-lg text-neutral-300 text-pretty">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.backToServices}
        </Link>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.features.map((feature, index) => (
              <div key={index} className="bg-card rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Description */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              {currentLang === "fr" ? "Notre approche de support" : "Our support approach"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Disponibilité 24/7" : "24/7 Availability"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Notre équipe de support technique est disponible à tout moment pour répondre à vos besoins urgents et garantir la continuité de vos opérations de sécurité."
                    : "Our technical support team is available at any time to respond to your urgent needs and ensure continuity of your safety operations."}
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Expertise Technique" : "Technical Expertise"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Nos techniciens spécialisés possèdent une expertise approfondie sur tous types d'équipements de sécurité incendie et peuvent résoudre rapidement vos problèmes techniques."
                    : "Our specialized technicians have in-depth expertise on all types of fire safety equipment and can quickly resolve your technical problems."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {currentLang === "fr" ? "Comment fonctionne notre support" : "How our support works"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Contactez-nous" : "Contact us"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Par téléphone, email ou via notre portail" 
                  : "By phone, email or through our portal"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Diagnostic" : "Diagnosis"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Nos experts identifient le problème" 
                  : "Our experts identify the issue"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Résolution" : "Resolution"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Solution rapide à distance ou sur site" 
                  : "Quick remote or on-site solution"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Suivi" : "Follow-up"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Vérification que tout fonctionne correctement" 
                  : "Verification that everything works correctly"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}