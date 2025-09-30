import { Shield, Flame, HardHat, Users, Wrench, GraduationCap } from "lucide-react"
import Link from "next/link"

interface ServicesGridProps {
  currentLang: "fr" | "en"
}

const services = {
  fr: {
    title: "Nos Services Principaux",
    subtitle: "Solutions complètes de sécurité incendie et protection au travail",
    items: [
      {
        icon: Flame,
        title: "Équipements Incendie",
        description: "Vente, installation et maintenance d'équipements de lutte contre l'incendie",
        href: "/products/firefighting",
      },
      {
        icon: HardHat,
        title: "EPI & Sécurité",
        description: "Équipements de protection individuelle et vêtements de sécurité",
        href: "/products/ppe",
      },
      {
        icon: Shield,
        title: "Signalisation Sécurité",
        description: "Panneaux, équipements d'urgence et solutions de sécurité au travail",
        href: "/products/signage",
      },
      {
        icon: Wrench,
        title: "Maintenance & Inspection",
        description: "Services de maintenance préventive et inspections certifiées",
        href: "/services/maintenance",
      },
      {
        icon: GraduationCap,
        title: "Formation & Conseil",
        description: "Formation en sécurité incendie et conseil en prévention",
        href: "/services/training",
      },
      {
        icon: Users,
        title: "WAVE PLUS",
        description: "Plateforme web de gestion et surveillance des équipements incendie",
        href: "/wave-plus",
      },
    ],
  },
  en: {
    title: "Our Main Services",
    subtitle: "Complete fire safety and workplace protection solutions",
    items: [
      {
        icon: Flame,
        title: "Fire Equipment",
        description: "Sales, installation and maintenance of firefighting equipment",
        href: "/products/firefighting",
      },
      {
        icon: HardHat,
        title: "PPE & Safety",
        description: "Personal protective equipment and safety workwear",
        href: "/products/ppe",
      },
      {
        icon: Shield,
        title: "Safety Signage",
        description: "Signs, emergency equipment and workplace safety solutions",
        href: "/products/signage",
      },
      {
        icon: Wrench,
        title: "Maintenance & Inspection",
        description: "Preventive maintenance services and certified inspections",
        href: "/services/maintenance",
      },
      {
        icon: GraduationCap,
        title: "Training & Consulting",
        description: "Fire safety training and prevention consulting",
        href: "/services/training",
      },
      {
        icon: Users,
        title: "WAVE PLUS",
        description: "Web platform for fire equipment management and monitoring",
        href: "/wave-plus",
      },
    ],
  },
}

export function ServicesGrid({ currentLang }: ServicesGridProps) {
  const t = services[currentLang];

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {t.items.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="bg-card p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3 md:mb-4 transform transition-transform hover:scale-110">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base hover:text-foreground transition-colors">{service.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
