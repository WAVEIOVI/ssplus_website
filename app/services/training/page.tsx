"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { GraduationCap, ArrowLeft, CheckCircle, Users, Award } from "lucide-react"
import Link from "next/link"

export default function TrainingServicePage() {
  const { currentLang } = useLanguage()

  const content = {
    fr: {
      title: "Formation & Conseil",
      subtitle: "Formation professionnelle en sécurité incendie et conseil en prévention",
      description:
        "Nos programmes de formation et services de conseil vous aident à développer une culture de sécurité efficace et à respecter les obligations réglementaires. Nos formateurs certifiés adaptent leurs programmes à votre secteur d'activité pour une formation optimale.",
      features: [
        {
          title: "Formation manipulation extincteurs",
          description: "Apprenez à utiliser correctement les différents types d'extincteurs"
        },
        {
          title: "Évacuation d'urgence",
          description: "Procédures et exercices pratiques pour une évacuation efficace et sécurisée"
        },
        {
          title: "Premiers secours au travail",
          description: "Techniques essentielles de premiers secours adaptées au milieu professionnel"
        },
        {
          title: "Audit sécurité incendie",
          description: "Évaluation complète de vos installations et procédures de sécurité"
        }
      ],
      packages: [
        {
          title: "Formation Individuelle",
          features: [
            "Certification personnelle",
            "Support de cours",
            "Exercices pratiques",
            "Évaluation des compétences"
          ],
          recommended: false
        },
        {
          title: "Formation Groupe",
          features: [
            "Jusqu'à 15 participants",
            "Adaptation à votre secteur",
            "Exercices pratiques",
            "Certificats individuels",
            "Rapport de formation"
          ],
          recommended: true
        },
        {
          title: "Programme Entreprise",
          features: [
            "Formation sur site",
            "Adaptation à vos équipements",
            "Plan de formation annuel",
            "Suivi des compétences",
            "Mise à jour réglementaire",
            "Audit de sécurité inclus"
          ],
          recommended: false
        }
      ],
      backToServices: "Retour aux services",
      contactUs: "Contactez-nous pour un devis"
    },
    en: {
      title: "Training & Consulting",
      subtitle: "Professional fire safety training and prevention consulting",
      description:
        "Our training programs and consulting services help you develop an effective safety culture and comply with regulatory obligations. Our certified trainers adapt their programs to your industry sector for optimal training.",
      features: [
        {
          title: "Fire extinguisher handling training",
          description: "Learn to correctly use different types of fire extinguishers"
        },
        {
          title: "Emergency evacuation",
          description: "Procedures and practical exercises for efficient and safe evacuation"
        },
        {
          title: "Workplace first aid",
          description: "Essential first aid techniques adapted to the professional environment"
        },
        {
          title: "Fire safety audit",
          description: "Comprehensive assessment of your safety installations and procedures"
        }
      ],
      packages: [
        {
          title: "Individual Training",
          features: [
            "Personal certification",
            "Course materials",
            "Practical exercises",
            "Skills assessment"
          ],
          recommended: false
        },
        {
          title: "Group Training",
          features: [
            "Up to 15 participants",
            "Adaptation to your sector",
            "Practical exercises",
            "Individual certificates",
            "Training report"
          ],
          recommended: true
        },
        {
          title: "Corporate Program",
          features: [
            "On-site training",
            "Adaptation to your equipment",
            "Annual training plan",
            "Skills monitoring",
            "Regulatory updates",
            "Safety audit included"
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
              <GraduationCap className="h-8 w-8 text-white" />
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
              {currentLang === "fr" ? "Notre approche de formation" : "Our training approach"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Formation Pratique" : "Practical Training"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Nos formations combinent théorie et pratique avec des exercices réels et des simulations pour une meilleure assimilation des connaissances."
                    : "Our training combines theory and practice with real exercises and simulations for better knowledge assimilation."}
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {currentLang === "fr" ? "Adaptation Sectorielle" : "Sector Adaptation"}
                </h3>
                <p className="text-muted-foreground">
                  {currentLang === "fr" 
                    ? "Chaque programme de formation est adapté aux spécificités de votre secteur d'activité et aux risques particuliers de votre environnement de travail."
                    : "Each training program is adapted to the specificities of your industry sector and the particular risks of your work environment."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              {currentLang === "fr" ? "Notre processus de formation" : "Our training process"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Évaluation des besoins" : "Needs assessment"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Analyse de vos besoins spécifiques" 
                  : "Analysis of your specific needs"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Formation personnalisée" : "Customized training"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Contenu adapté à votre contexte" 
                  : "Content adapted to your context"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Évaluation pratique" : "Practical assessment"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Exercices et mises en situation" 
                  : "Exercises and simulations"}
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">
                {currentLang === "fr" ? "Certification" : "Certification"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {currentLang === "fr" 
                  ? "Attestation officielle de compétences" 
                  : "Official skills certification"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}