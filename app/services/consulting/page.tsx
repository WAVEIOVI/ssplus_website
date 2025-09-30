"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { FileCheck, ArrowLeft, CheckCircle, Lightbulb, FileText } from "lucide-react"
import Link from "next/link"

export default function ConsultingServicePage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Études & Conception",
      subtitle: "Études techniques et conception de systèmes de sécurité sur mesure",
      description:
        "Nos services d'études et de conception vous accompagnent dans l'élaboration de solutions de sécurité adaptées à vos besoins spécifiques et conformes aux réglementations en vigueur. Nos ingénieurs experts utilisent les dernières technologies et méthodologies pour garantir des solutions optimales.",
      features: [
        {
          title: "Études de risques incendie",
          description: "Analyse approfondie des risques potentiels et recommandations adaptées"
        },
        {
          title: "Conception de systèmes",
          description: "Élaboration de systèmes de sécurité incendie sur mesure pour votre établissement"
        },
        {
          title: "Plans d'évacuation",
          description: "Création de plans d'évacuation conformes aux normes et adaptés à vos locaux"
        },
        {
          title: "Mise en conformité réglementaire",
          description: "Accompagnement pour assurer la conformité de vos installations aux réglementations"
        }
      ],
      packages: [
        {
          title: "Étude Simple",
          features: [
            "Analyse des risques basique",
            "Recommandations générales",
            "Plan d'action simplifié",
            "Un rendez-vous de consultation"
          ],
          recommended: false
        },
        {
          title: "Étude Complète",
          features: [
            "Analyse des risques approfondie",
            "Recommandations détaillées",
            "Plans techniques",
            "Deux rendez-vous de consultation",
            "Rapport complet"
          ],
          recommended: true
        },
        {
          title: "Accompagnement Projet",
          features: [
            "Étude complète",
            "Conception sur mesure",
            "Suivi de mise en œuvre",
            "Validation de conformité",
            "Support technique continu",
            "Mise à jour des plans"
          ],
          recommended: false
        }
      ],
      backToServices: "Retour aux services",
      contactUs: "Contactez-nous pour un devis"
    },
    en: {
      title: "Studies & Design",
      subtitle: "Technical studies and custom safety system design",
      description:
        "Our study and design services support you in developing safety solutions tailored to your specific needs and compliant with current regulations. Our expert engineers use the latest technologies and methodologies to ensure optimal solutions.",
      features: [
        {
          title: "Fire risk studies",
          description: "In-depth analysis of potential risks and adapted recommendations"
        },
        {
          title: "System design",
          description: "Development of custom fire safety systems for your establishment"
        },
        {
          title: "Evacuation plans",
          description: "Creation of evacuation plans compliant with standards and adapted to your premises"
        },
        {
          title: "Regulatory compliance",
          description: "Support to ensure your installations comply with regulations"
        }
      ],
      packages: [
        {
          title: "Simple Study",
          features: [
            "Basic risk analysis",
            "General recommendations",
            "Simplified action plan",
            "One consultation meeting"
          ],
          recommended: false
        },
        {
          title: "Complete Study",
          features: [
            "In-depth risk analysis",
            "Detailed recommendations",
            "Technical plans",
            "Two consultation meetings",
            "Comprehensive report"
          ],
          recommended: true
        },
        {
          title: "Project Support",
          features: [
            "Complete study",
            "Custom design",
            "Implementation monitoring",
            "Compliance validation",
            "Ongoing technical support",
            "Plan updates"
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
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <FileCheck className="h-8 w-8 text-white" />
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
              {currentLang === "fr" ? "Notre approche d'études" : "Our study approach"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Analyse Approfondie" : "In-depth Analysis"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Nous réalisons une analyse complète de vos risques et de votre environnement pour concevoir des solutions de sécurité optimales et personnalisées."
                    : "We perform a comprehensive analysis of your risks and environment to design optimal and personalized safety solutions."}
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Solutions Sur Mesure" : "Custom Solutions"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Chaque projet est unique. Nous concevons des systèmes de sécurité adaptés à vos besoins spécifiques et conformes aux réglementations en vigueur."
                    : "Each project is unique. We design safety systems adapted to your specific needs and compliant with current regulations."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {currentLang === "fr" ? "Notre processus de consultation" : "Our consulting process"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Analyse & Diagnostic" : "Analysis & Diagnosis"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Évaluation complète de votre situation actuelle et identification des risques" 
                  : "Complete assessment of your current situation and risk identification"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Conception & Planification" : "Design & Planning"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Élaboration de solutions sur mesure et création de plans détaillés" 
                  : "Development of tailored solutions and creation of detailed plans"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Recommandations & Suivi" : "Recommendations & Follow-up"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Présentation des recommandations et accompagnement dans la mise en œuvre" 
                  : "Presentation of recommendations and implementation support"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}