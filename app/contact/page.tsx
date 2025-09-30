"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Votre sécurité est notre priorité",
      description:
        "Contactez nos experts pour un conseil personnalisé, un devis gratuit ou une intervention d'urgence. Nous sommes à votre service 24h/24 et 7j/7.",
    },
    en: {
      title: "Contact Us",
      subtitle: "Your safety is our priority",
      description:
        "Contact our experts for personalized advice, a free quote or emergency intervention. We are at your service 24/7.",
    },
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200 text-pretty">{t.subtitle}</p>
            <p className="text-lg text-neutral-300 text-pretty">{t.description}</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm currentLang={currentLang} />
        <ContactInfo currentLang={currentLang} />
      </div>

      <MapSection currentLang={currentLang} />

      <Footer />
    </div>
  )
}
