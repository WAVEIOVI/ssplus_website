import { Flame, HardHat, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"

interface ProductCategoriesProps {
  currentLang: "fr" | "en"
}

const categories = {
  fr: {
    title: "Catégories de Produits",
    items: [
      {
        icon: Flame,
        title: "Équipements Incendie",
        description: "Extincteurs, systèmes de détection, alarmes incendie et équipements de lutte",
        href: "/products/firefighting",
        image: "/fire-extinguisher-equipment.jpg",
        products: ["Extincteurs CO2", "Détecteurs de fumée", "Systèmes sprinkler", "Alarmes incendie"],
      },
      {
        icon: HardHat,
        title: "EPI & Sécurité",
        description: "Équipements de protection individuelle et vêtements de sécurité",
        href: "/products/ppe",
        image: "/safety-helmet-and-protective-equipment.jpg",
        products: ["Casques de sécurité", "Gants de protection", "Chaussures de sécurité", "Masques respiratoires"],
      },
      {
        icon: Shield,
        title: "Signalisation Sécurité",
        description: "Panneaux de sécurité, marquage au sol et équipements d'urgence",
        href: "/products/signage",
        image: "/safety-signs-and-emergency-equipment.jpg",
        products: [
          "Panneaux d'évacuation",
          "Éclairage de secours",
          "Marquage photoluminescent",
          "Barrières de sécurité",
        ],
      },
      {
        icon: AlertTriangle,
        title: "Équipements d'Urgence",
        description: "Matériel de premiers secours et équipements d'intervention d'urgence",
        href: "/products/emergency",
        image: "/emergency-first-aid-equipment.jpg",
        products: [
          "Trousses de premiers secours",
          "Défibrillateurs",
          "Matériel d'évacuation",
          "Équipements de sauvetage",
        ],
      },
    ],
  },
  en: {
    title: "Product Categories",
    items: [
      {
        icon: Flame,
        title: "Fire Equipment",
        description: "Extinguishers, detection systems, fire alarms and firefighting equipment",
        href: "/products/firefighting",
        image: "/fire-extinguisher-equipment.jpg",
        products: ["CO2 Extinguishers", "Smoke Detectors", "Sprinkler Systems", "Fire Alarms"],
      },
      {
        icon: HardHat,
        title: "PPE & Safety",
        description: "Personal protective equipment and safety workwear",
        href: "/products/ppe",
        image: "/safety-helmet-and-protective-equipment.jpg",
        products: ["Safety Helmets", "Protective Gloves", "Safety Shoes", "Respiratory Masks"],
      },
      {
        icon: Shield,
        title: "Safety Signage",
        description: "Safety signs, floor marking and emergency equipment",
        href: "/products/signage",
        image: "/safety-signs-and-emergency-equipment.jpg",
        products: ["Evacuation Signs", "Emergency Lighting", "Photoluminescent Marking", "Safety Barriers"],
      },
      {
        icon: AlertTriangle,
        title: "Emergency Equipment",
        description: "First aid materials and emergency response equipment",
        href: "/products/emergency",
        image: "/emergency-first-aid-equipment.jpg",
        products: ["First Aid Kits", "Defibrillators", "Evacuation Equipment", "Rescue Equipment"],
      },
    ],
  },
}

export function ProductCategories({ currentLang }: ProductCategoriesProps) {
  const t = categories[currentLang]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.items.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{category.description}</p>

                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      {currentLang === "fr" ? "Produits principaux:" : "Main products:"}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.products.slice(0, 3).map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
