"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Wrench, ArrowLeft, Clock, CheckCircle, Shield } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function MaintenanceServicePage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Maintenance & Inspection",
      subtitle: "Services de maintenance préventive et inspections certifiées",
      description:
        "Nos services de maintenance et d'inspection garantissent la conformité et le bon fonctionnement de vos équipements de sécurité incendie selon les normes tunisiennes en vigueur. Avec plus de 15 ans d'expérience, notre équipe de techniciens certifiés assure la pérennité de vos installations de sécurité.",
      features: [
        {
          title: "Maintenance préventive programmée",
          description: "Interventions régulières pour assurer le bon fonctionnement de vos équipements"
        },
        {
          title: "Inspections réglementaires",
          description: "Vérifications conformes aux exigences légales et aux normes de sécurité"
        },
        {
          title: "Certificats de conformité",
          description: "Documentation officielle attestant la conformité de vos installations"
        },
        {
          title: "Intervention d'urgence 24/7",
          description: "Équipe disponible en permanence pour répondre à vos besoins urgents"
        }
      ],
      packages: [
        {
          title: "Contrat Basique",
          features: [
            "Maintenance annuelle",
            "Rapport d'inspection",
            "Support téléphonique",
            "Délai d'intervention sous 48h"
          ],
          recommended: false
        },
        {
          title: "Contrat Premium",
          features: [
            "Maintenance semestrielle",
            "Certificats de conformité",
            "Support prioritaire",
            "Délai d'intervention sous 24h",
            "Remise sur pièces de rechange"
          ],
          recommended: true
        },
        {
          title: "Contrat Enterprise",
          features: [
            "Maintenance trimestrielle",
            "Certificats de conformité",
            "Support dédié 24/7",
            "Intervention d'urgence sous 4h",
            "Pièces de rechange incluses",
            "Audit annuel de sécurité"
          ],
          recommended: false
        }
      ],
      backToServices: "Retour aux services",
      contactUs: "Contactez-nous pour un devis"
    },
    en: {
      title: "Maintenance & Inspection",
      subtitle: "Preventive maintenance services and certified inspections",
      description:
        "Our maintenance and inspection services ensure compliance and proper functioning of your fire safety equipment according to current Tunisian standards. With over 15 years of experience, our team of certified technicians ensures the longevity of your safety installations.",
      features: [
        {
          title: "Scheduled preventive maintenance",
          description: "Regular interventions to ensure your equipment functions properly"
        },
        {
          title: "Regulatory inspections",
          description: "Verifications compliant with legal requirements and safety standards"
        },
        {
          title: "Compliance certificates",
          description: "Official documentation certifying the compliance of your installations"
        },
        {
          title: "24/7 emergency intervention",
          description: "Team available at all times to respond to your urgent needs"
        }
      ],
      packages: [
        {
          title: "Basic Contract",
          features: [
            "Annual maintenance",
            "Inspection report",
            "Phone support",
            "48-hour response time"
          ],
          recommended: false
        },
        {
          title: "Premium Contract",
          features: [
            "Bi-annual maintenance",
            "Compliance certificates",
            "Priority support",
            "24-hour response time",
            "Discount on spare parts"
          ],
          recommended: true
        },
        {
          title: "Enterprise Contract",
          features: [
            "Quarterly maintenance",
            "Compliance certificates",
            "Dedicated 24/7 support",
            "4-hour emergency response",
            "Spare parts included",
            "Annual safety audit"
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
      <Head>
        <title>{currentLang === "fr" ? "Maintenance & Inspection - SS Plus" : "Maintenance & Inspection - SS Plus"}</title>
        <meta name="description" content={currentLang === "fr" 
          ? "Services de maintenance préventive et inspections certifiées selon les normes tunisiennes. Techniciens certifiés avec plus de 15 ans d'expérience."
          : "Preventive maintenance services and certified inspections according to Tunisian standards. Certified technicians with over 15 years of experience."} />
        <meta name="keywords" content={currentLang === "fr" 
          ? "maintenance incendie, inspection sécurité, Tunisie, conformité, techniciens certifiés"
          : "fire maintenance, safety inspection, Tunisia, compliance, certified technicians"} />
      </Head>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Wrench className="h-8 w-8 text-white" />
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
              {currentLang === "fr" ? "Notre approche de maintenance" : "Our maintenance approach"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Maintenance Préventive" : "Preventive Maintenance"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Nous effectuons des contrôles réguliers et des interventions préventives pour éviter les pannes et garantir le bon fonctionnement de vos équipements de sécurité incendie."
                    : "We perform regular checks and preventive interventions to avoid breakdowns and ensure the proper functioning of your fire safety equipment."}
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Conformité Réglementaire" : "Regulatory Compliance"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Toutes nos interventions respectent les normes tunisiennes en vigueur et nous délivrons les certificats de conformité nécessaires pour votre établissement."
                    : "All our interventions comply with current Tunisian standards and we provide the necessary compliance certificates for your establishment."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {currentLang === "fr" ? "Pourquoi choisir nos services de maintenance ?" : "Why choose our maintenance services?"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {currentLang === "fr" ? "Conformité garantie" : "Guaranteed compliance"}
              </h3>
              <p className="text-muted-foreground">
                {currentLang === "fr" 
                  ? "Respect total des normes tunisiennes et internationales" 
                  : "Full compliance with Tunisian and international standards"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {currentLang === "fr" ? "Réactivité 24/7" : "24/7 responsiveness"}
              </h3>
              <p className="text-muted-foreground">
                {currentLang === "fr" 
                  ? "Intervention d'urgence disponible à tout moment" 
                  : "Emergency intervention available at any time"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {currentLang === "fr" ? "Expertise certifiée" : "Certified expertise"}
              </h3>
              <p className="text-muted-foreground">
                {currentLang === "fr" 
                  ? "Techniciens certifiés avec plus de 15 ans d'expérience" 
                  : "Certified technicians with over 15 years of experience"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {currentLang === "fr" 
                ? "Besoin d'un service de maintenance personnalisé ?" 
                : "Need a customized maintenance service?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {currentLang === "fr"
                ? "Contactez notre équipe pour discuter de vos besoins spécifiques et obtenir un devis sur mesure."
                : "Contact our team to discuss your specific needs and get a tailored quote."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                {currentLang === "fr" ? "Demander un devis" : "Request a quote"}
              </button>
              <button className="bg-muted text-foreground px-6 py-3 rounded-md hover:bg-muted/80 transition-colors">
                {currentLang === "fr" ? "Nous contacter" : "Contact us"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}