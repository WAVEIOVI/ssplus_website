"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar, CheckCircle, Sparkles, ArrowRight, Clock, Users } from "lucide-react"

interface DemoRequestProps {
  currentLang: "fr" | "en"
}

const demoContent = {
  fr: {
    title: "Demander une Démonstration",
    subtitle: "Découvrez WAVE PLUS en action avec nos experts",
    description:
      "Planifiez une démonstration personnalisée de 30 minutes avec notre équipe technique. Nous vous montrerons comment WAVE PLUS peut transformer la gestion de votre sécurité incendie.",
    form: {
      name: "Nom complet *",
      email: "Email professionnel *",
      phone: "Téléphone *",
      company: "Entreprise *",
      position: "Fonction *",
      equipmentCount: "Nombre d'équipements *",
      demoType: "Type de démonstration *",
      preferredDate: "Date préférée",
      message: "Besoins spécifiques",
    },
    equipmentCounts: {
      small: "1-50 équipements",
      medium: "51-200 équipements",
      large: "201-500 équipements",
      enterprise: "500+ équipements",
    },
    demoTypes: {
      online: "Démonstration en ligne",
      onsite: "Présentation sur site",
      trial: "Essai gratuit 30 jours",
    },
    placeholders: {
      name: "Votre nom complet",
      email: "votre.email@entreprise.com",
      phone: "+216 XX XXX XXX",
      company: "Nom de votre entreprise",
      position: "Votre fonction",
      date: "Date souhaitée",
      message: "Décrivez vos besoins spécifiques...",
    },
    submit: "Planifier la Démonstration",
    success: "Demande de démonstration envoyée !",
    successMessage: "Notre équipe vous contactera dans les 24 heures pour planifier votre démonstration.",
  },
  en: {
    title: "Request a Demonstration",
    subtitle: "Discover WAVE PLUS in action with our experts",
    description:
      "Schedule a personalized 30-minute demonstration with our technical team. We'll show you how WAVE PLUS can transform your fire safety management.",
    form: {
      name: "Full name *",
      email: "Professional email *",
      phone: "Phone *",
      company: "Company *",
      position: "Position *",
      equipmentCount: "Number of equipment *",
      demoType: "Demonstration type *",
      preferredDate: "Preferred date",
      message: "Specific needs",
    },
    equipmentCounts: {
      small: "1-50 equipment",
      medium: "51-200 equipment",
      large: "201-500 equipment",
      enterprise: "500+ equipment",
    },
    demoTypes: {
      online: "Online demonstration",
      onsite: "On-site presentation",
      trial: "30-day free trial",
    },
    placeholders: {
      name: "Your full name",
      email: "your.email@company.com",
      phone: "+216 XX XXX XXX",
      company: "Your company name",
      position: "Your position",
      date: "Preferred date",
      message: "Describe your specific needs...",
    },
    submit: "Schedule Demonstration",
    success: "Demo request sent!",
    successMessage: "Our team will contact you within 24 hours to schedule your demonstration.",
  },
}

export function DemoRequest({ currentLang }: DemoRequestProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    equipmentCount: "",
    demoType: "",
    preferredDate: "",
    message: "",
  })

  const t = demoContent[currentLang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-8 mx-auto animate-bounce">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-green-500">{t.success}</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t.successMessage}</p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-primary/5 transition-all duration-300"
            >
              {currentLang === "fr" ? "Nouvelle demande" : "New request"}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              {currentLang === "fr" ? "Démonstration Gratuite" : "Free Demonstration"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-6 leading-relaxed">{t.subtitle}</p>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">{t.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {currentLang === "fr" ? "Démo 30 minutes" : "30-min Demo"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {currentLang === "fr" 
                    ? "Découvrez toutes les fonctionnalités de WAVE PLUS en 30 minutes avec nos experts."
                    : "Discover all WAVE PLUS features in 30 minutes with our experts."}
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {currentLang === "fr" ? "Équipe dédiée" : "Dedicated Team"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {currentLang === "fr" 
                    ? "Nos experts techniques vous accompagnent dans la découverte de la plateforme."
                    : "Our technical experts guide you through the platform discovery."}
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {currentLang === "fr" ? "Sans engagement" : "No commitment"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {currentLang === "fr" 
                    ? "Démonstration gratuite et sans obligation d'achat."
                    : "Free demonstration with no purchase obligation."}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="demo-name">{t.form.name}</Label>
                  <Input
                    id="demo-name"
                    type="text"
                    placeholder={t.placeholders.name}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="demo-email">{t.form.email}</Label>
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder={t.placeholders.email}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="demo-phone">{t.form.phone}</Label>
                  <Input
                    id="demo-phone"
                    type="tel"
                    placeholder={t.placeholders.phone}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="demo-company">{t.form.company}</Label>
                  <Input
                    id="demo-company"
                    type="text"
                    placeholder={t.placeholders.company}
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="demo-position">{t.form.position}</Label>
                  <Input
                    id="demo-position"
                    type="text"
                    placeholder={t.placeholders.position}
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>{t.form.equipmentCount}</Label>
                  <Select
                    value={formData.equipmentCount}
                    onValueChange={(value) => handleInputChange("equipmentCount", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={currentLang === "fr" ? "Sélectionnez une taille" : "Select a size"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">{t.equipmentCounts.small}</SelectItem>
                      <SelectItem value="medium">{t.equipmentCounts.medium}</SelectItem>
                      <SelectItem value="large">{t.equipmentCounts.large}</SelectItem>
                      <SelectItem value="enterprise">{t.equipmentCounts.enterprise}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>{t.form.demoType}</Label>
                  <Select value={formData.demoType} onValueChange={(value) => handleInputChange("demoType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={currentLang === "fr" ? "Type de démo" : "Demo type"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">{t.demoTypes.online}</SelectItem>
                      <SelectItem value="onsite">{t.demoTypes.onsite}</SelectItem>
                      <SelectItem value="trial">{t.demoTypes.trial}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="demo-date">{t.form.preferredDate}</Label>
                  <Input
                    id="demo-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="demo-message">{t.form.message}</Label>
                <Textarea
                  id="demo-message"
                  placeholder={t.placeholders.message}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                />
              </div>

                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isLoading} 
                      className="min-w-[250px] bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {currentLang === "fr" ? "Envoi..." : "Sending..."}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {t.submit}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
