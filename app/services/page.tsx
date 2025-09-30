"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceOfferings } from "@/components/services/service-offerings"
import { useLanguage } from "@/lib/language-context"

export default function ServicesPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "Expertise complète en sécurité incendie et protection au travail",
      description:
        "De l'installation à la maintenance, en passant par la formation et le conseil, nous vous accompagnons à chaque étape de votre projet sécurité.",
    },
    en: {
      title: "Our Services",
      subtitle: "Complete expertise in fire safety and workplace protection",
      description:
        "From installation to maintenance, including training and consulting, we support you at every stage of your safety project.",
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

      <ServiceOfferings currentLang={currentLang} />

      <Footer />
    </div>
  )
}
