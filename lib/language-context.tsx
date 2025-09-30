"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "fr" | "en"

// Translation data
const translations = {
  fr: {
    hero: {
      title: "Votre Partenaire en Sécurité Incendie",
      subtitle: "Solutions complètes de protection contre les incendies pour les entreprises tunisiennes depuis plus de 20 ans",
      primaryCta: "Contactez-nous",
      secondaryCta: "Découvrir WAVE PLUS",
      description: "Nous concevons, installons et maintenons des systèmes certifiés de protection incendie, offrons des formations expertes et assurons un support rapide pour protéger vos équipes et vos actifs.",
      bullets: [
        "Pratiques certifiées ISO 9001",
        "+20 ans au service de la Tunisie",
        "Solutions de sécurité de bout en bout"
      ]
    },
    rights: "Tous droits réservés",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    contact: "Contact",
    phone: "+216 71 123 456",
    email: "contact@ssplus.tn",
    tagline: "Leader tunisien des solutions de sécurité incendie"
  },
  en: {
    hero: {
      title: "Your Fire Safety Partner",
      subtitle: "Comprehensive fire protection solutions for Tunisian businesses for over 20 years",
      primaryCta: "Contact Us",
      secondaryCta: "Discover WAVE PLUS",
      description: "We design, install, and maintain certified fire protection systems, deliver expert training, and provide rapid support to keep your people and assets safe.",
      bullets: [
        "ISO 9001 certified practices",
        "20+ years serving Tunisia",
        "End-to-end safety solutions"
      ]
    },
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    phone: "+216 71 123 456",
    email: "contact@ssplus.tn",
    tagline: "Tunisia's leader in fire safety solutions"
  }
}

export interface LanguageContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
  getTranslation: () => typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("fr")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("ss-plus-language") as Language
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setCurrentLang(savedLang)
    }
  }, [])

  // Save language preference to localStorage
  const setLanguage = (lang: Language) => {
    setCurrentLang(lang)
    localStorage.setItem("ss-plus-language", lang)
    // Update document language attribute for SEO
    document.documentElement.lang = lang
  }

  // Add translations
  const getTranslation = () => {
    return translations[currentLang]
  }

  return <LanguageContext.Provider value={{ currentLang, setLanguage, getTranslation }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
