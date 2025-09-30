import { Wrench, GraduationCap, FileCheck, Users, Calendar } from "lucide-react"
import Link from "next/link"

interface ServiceOfferingsProps {
  currentLang: "fr" | "en"
}

const services = {
  fr: {
    title: "Nos Services Professionnels",
    items: [
      {
        icon: Wrench,
        title: "Maintenance & Inspection",
        description: "Services de maintenance préventive et inspections certifiées selon les normes tunisiennes. Nous garantissons la conformité et le bon fonctionnement de vos équipements de sécurité incendie avec nos techniciens certifiés et nos protocoles rigoureux.",
        href: "/services/maintenance",
  image: "/ssplus_website/maintenance-inspection-fire-equipment.jpg",
        features: [
          "Maintenance préventive programmée",
          "Inspections réglementaires",
          "Certificats de conformité",
          "Intervention d'urgence 24/7",
        ],
        packages: ["Contrat Basique", "Contrat Premium", "Contrat Enterprise"],
      },
      {
        icon: GraduationCap,
        title: "Formation & Conseil",
        description: "Formation professionnelle en sécurité incendie et conseil en prévention. Développez une culture de sécurité efficace avec nos programmes adaptés à votre secteur d'activité et nos formateurs certifiés.",
        href: "/services/training",
  image: "/ssplus_website/fire-safety-training.png",
        features: [
          "Formation manipulation extincteurs",
          "Évacuation d'urgence",
          "Premiers secours au travail",
          "Audit sécurité incendie",
        ],
        packages: ["Formation Individuelle", "Formation Groupe", "Programme Entreprise"],
      },
      {
        icon: FileCheck,
        title: "Études & Conception",
        description: "Études techniques et conception de systèmes de sécurité sur mesure. Nos ingénieurs experts vous accompagnent dans l'élaboration de solutions adaptées à vos besoins spécifiques et conformes aux réglementations tunisiennes.",
        href: "/services/consulting",
  image: "/ssplus_website/technical-blueprints-fire-safety-design.jpg",
        features: [
          "Études de risques incendie",
          "Conception de systèmes",
          "Plans d'évacuation",
          "Mise en conformité réglementaire",
        ],
        packages: ["Étude Simple", "Étude Complète", "Accompagnement Projet"],
      },
      {
        icon: Users,
        title: "Support Technique",
        description: "Assistance technique et support client pour tous vos équipements. Notre équipe d'experts est disponible 24/7 pour résoudre rapidement tout problème technique et garantir la continuité de vos opérations de sécurité.",
        href: "/services/support",
  image: "/ssplus_website/technical-support-team-helping-client.jpg",
        features: [
          "Hotline technique 24/7",
          "Diagnostic à distance",
          "Intervention sur site",
          "Pièces de rechange garanties",
        ],
        packages: ["Support Standard", "Support Premium", "Support Dédié"],
      },
    ],
  },
  en: {
    title: "Our Professional Services",
    items: [
      {
        icon: Wrench,
        title: "Maintenance & Inspection",
        description: "Preventive maintenance services and certified inspections according to Tunisian standards. We guarantee compliance and proper functioning of your fire safety equipment with our certified technicians and rigorous protocols.",
        href: "/services/maintenance",
        image: "/maintenance-inspection-fire-equipment.jpg",
        features: [
          "Scheduled preventive maintenance",
          "Regulatory inspections",
          "Compliance certificates",
          "24/7 emergency intervention",
        ],
        packages: ["Basic Contract", "Premium Contract", "Enterprise Contract"],
      },
      {
        icon: GraduationCap,
        title: "Training & Consulting",
        description: "Professional fire safety training and prevention consulting. Develop an effective safety culture with our programs tailored to your industry sector and our certified trainers.",
        href: "/services/training",
        image: "/fire-safety-training.png",
        features: [
          "Fire extinguisher handling training",
          "Emergency evacuation",
          "Workplace first aid",
          "Fire safety audit",
        ],
        packages: ["Individual Training", "Group Training", "Corporate Program"],
      },
      {
        icon: FileCheck,
        title: "Studies & Design",
        description: "Technical studies and custom safety system design. Our expert engineers support you in developing solutions tailored to your specific needs and compliant with Tunisian regulations.",
        href: "/services/consulting",
        image: "/technical-blueprints-fire-safety-design.jpg",
        features: ["Fire risk studies", "System design", "Evacuation plans", "Regulatory compliance"],
        packages: ["Simple Study", "Complete Study", "Project Support"],
      },
      {
        icon: Users,
        title: "Technical Support",
        description: "Technical assistance and customer support for all your equipment. Our expert team is available 24/7 to quickly resolve any technical issues and ensure continuity of your safety operations.",
        href: "/services/support",
        image: "/technical-support-team-helping-client.jpg",
        features: ["24/7 technical hotline", "Remote diagnostics", "On-site intervention", "Guaranteed spare parts"],
        packages: ["Standard Support", "Premium Support", "Dedicated Support"],
      },
    ],
  },
}

export function ServiceOfferings({ currentLang }: ServiceOfferingsProps) {
  const t = services[currentLang]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.items.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
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
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">
                      {currentLang === "fr" ? "Prestations incluses:" : "Included services:"}
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      {currentLang === "fr" ? "Formules disponibles:" : "Available packages:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.packages.map((pkg, pkgIndex) => (
                        <span key={pkgIndex} className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground">
                          {pkg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              {currentLang === "fr" ? "Besoin d'un devis personnalisé ?" : "Need a personalized quote?"}
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              {currentLang === "fr"
                ? "Nos experts analysent vos besoins et vous proposent la solution la plus adaptée."
                : "Our experts analyze your needs and offer you the most suitable solution."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              {currentLang === "fr" ? "Demander un devis" : "Request a quote"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
