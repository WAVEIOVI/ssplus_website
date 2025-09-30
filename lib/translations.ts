export const translations = {
  navigation: {
    fr: {
      home: "Accueil",
      about: "À Propos",
      products: "Produits",
      services: "Services",
      contact: "Contact",
      waveplus: "WAVE PLUS",
      emergency: "Urgence: +216 74 453 027",
    },
    en: {
      home: "Home",
      about: "About",
      products: "Products",
      services: "Services",
      contact: "Contact",
      waveplus: "WAVE PLUS",
      emergency: "Emergency: +216 74 453 027",
    },
  },
  footer: {
    fr: {
      company: "Entreprise",
      about: "À Propos",
      history: "Notre Histoire",
      certifications: "Certifications",
      careers: "Carrières",
      products: "Produits",
      firefighting: "Équipements Incendie",
      ppe: "EPI & Sécurité",
      signage: "Signalisation",
      services: "Services",
      maintenance: "Maintenance",
      consulting: "Conseil",
      training: "Formation",
      waveplus: "WAVE PLUS",
      contact: "Contact",
      sfax: "Sfax: Route de Gabes Km 3.5",
      tunis: "Tunis: Raoued Ariana 2088",
      phone: "+216 74 453 027",
      email: "contact@ssplus.tn",
      rights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      tagline: "Think Safety, Think Us",
    },
    en: {
      company: "Company",
      about: "About Us",
      history: "Our History",
      certifications: "Certifications",
      careers: "Careers",
      products: "Products",
      firefighting: "Fire Equipment",
      ppe: "PPE & Safety",
      signage: "Signage",
      services: "Services",
      maintenance: "Maintenance",
      consulting: "Consulting",
      training: "Training",
      waveplus: "WAVE PLUS",
      contact: "Contact",
      sfax: "Sfax: Gabes Road Km 3.5 3000",
      tunis: "Tunis: Raoued 2088 Ariana",
      phone: "+216 74 453 027",
      email: "contact@ssplus.tn",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      tagline: "Think Safety, Think Us",
    },
  },
  seo: {
    fr: {
      title: "SS PLUS - Sécurité Services Plus | Sécurité Incendie & Protection au Travail",
      description:
        "Leader tunisien des solutions de sécurité incendie et protection au travail. Certifié ISO 9001 depuis 2010. Équipements incendie, EPI, formation et plateforme WAVE PLUS.",
      keywords:
        "sécurité incendie, protection travail, Tunisie, ISO 9001, équipements incendie, EPI, formation sécurité, WAVE PLUS",
      waveplus: {
        title: "WAVE PLUS - Plateforme de Gestion Incendie | SS PLUS",
        description:
          "Plateforme web innovante pour la gestion et surveillance de vos équipements de sécurité incendie. Monitoring 24/7, maintenance prédictive et conformité réglementaire.",
        keywords: "WAVE PLUS, gestion incendie, monitoring, maintenance prédictive, conformité, IoT, sécurité",
      },
    },
    en: {
      title: "SS PLUS - Sécurité Services Plus | Fire Safety & Workplace Protection",
      description:
        "Tunisia's leading provider of fire safety and workplace protection solutions. ISO 9001 certified since 2010. Fire equipment, PPE, training, and WAVE PLUS platform.",
      keywords: "fire safety, workplace protection, Tunisia, ISO 9001, fire equipment, PPE, safety training, WAVE PLUS",
      waveplus: {
        title: "WAVE PLUS - Fire Management Platform | SS PLUS",
        description:
          "Innovative web platform for managing and monitoring your fire safety equipment. 24/7 monitoring, predictive maintenance and regulatory compliance.",
        keywords: "WAVE PLUS, fire management, monitoring, predictive maintenance, compliance, IoT, safety",
      },
    },
  },
} as const

export type TranslationKey = keyof typeof translations
export type Language = "fr" | "en"

// Strongly-typed overloads for better inference at call sites
export function getTranslation(key: "navigation", lang: Language): (typeof translations)["navigation"][Language]
export function getTranslation(key: "footer", lang: Language): (typeof translations)["footer"][Language]
export function getTranslation(key: "seo", lang: Language): (typeof translations)["seo"][Language]
export function getTranslation(key: TranslationKey, lang: Language) {
  return translations[key][lang]
}

// Explicit helpers to avoid union widening at call sites
export type NavigationTranslations = typeof translations.navigation[Language]
export type FooterTranslations = typeof translations.footer[Language]
export type SeoTranslations = typeof translations.seo[Language]

export function getNavigation(lang: Language): NavigationTranslations {
  return translations.navigation[lang]
}

export function getFooter(lang: Language): FooterTranslations {
  return translations.footer[lang]
}

export function getSeo(lang: Language): SeoTranslations {
  return translations.seo[lang]
}
