"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCategories } from "@/components/products/product-categories"
import { useLanguage } from "@/lib/language-context"

export default function ProductsPage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Nos Produits",
      subtitle: "Solutions complètes de sécurité incendie et protection au travail",
      description:
        "Découvrez notre gamme complète d'équipements de sécurité incendie, d'EPI et de solutions de protection, sélectionnés auprès des meilleures marques internationales.",
    },
    en: {
      title: "Our Products",
      subtitle: "Complete fire safety and workplace protection solutions",
      description:
        "Discover our complete range of fire safety equipment, PPE and protection solutions, selected from the best international brands.",
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

      <ProductCategories currentLang={currentLang} />

      <Footer />
    </div>
  )
}
