"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CompanyHistory } from "@/components/about/company-history"
import { MissionVisionValues } from "@/components/about/mission-vision-values"
import { ISO9001Story } from "@/components/about/iso9001-story"
import { TeamProfiles } from "@/components/about/team-profiles"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "À Propos de SS PLUS",
      subtitle: "Plus de 20 ans d'expertise au service de votre sécurité",
      description:
        "Depuis 2002, SS PLUS s'est imposée comme le leader tunisien incontournable dans le domaine de la sécurité incendie et de la protection au travail. Découvrez notre histoire, nos valeurs, notre engagement qualité et l'équipe passionnée qui fait notre force.",
      stats: [
        { number: "500+", label: "Entreprises servies" },
        { number: "20+", label: "Années d'expérience" },
        { number: "100%", label: "Satisfaction client" },
        { number: "ISO 9001", label: "Certifié depuis 2010" },
      ],
    },
    en: {
      title: "About SS PLUS",
      subtitle: "Over 20 years of expertise serving your safety",
      description:
        "Since 2002, SS PLUS has established itself as Tunisia's leading company in fire safety and workplace protection. Discover our history, values, quality commitment and the passionate team that makes us strong.",
      stats: [
        { number: "500+", label: "Companies served" },
        { number: "20+", label: "Years of experience" },
        { number: "100%", label: "Customer satisfaction" },
        { number: "ISO 9001", label: "Certified since 2010" },
      ],
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
            <p className="text-lg text-neutral-300 text-pretty mb-12">{t.description}</p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-neutral-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CompanyHistory currentLang={currentLang} />
      <MissionVisionValues currentLang={currentLang} />
      <ISO9001Story currentLang={currentLang} />
      <TeamProfiles currentLang={currentLang} />

      <Footer />
    </div>
  )
}
