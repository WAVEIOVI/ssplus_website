"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

interface ContactFormProps {
  currentLang: "fr" | "en"
}

const formContent = {
  fr: {
    title: "Demande de Contact",
    subtitle: "Remplissez ce formulaire et nous vous recontacterons rapidement",
    fields: {
      name: "Nom complet *",
      email: "Email *",
      phone: "Téléphone *",
      company: "Entreprise",
      serviceType: "Type de service *",
      location: "Localisation *",
      contactPreference: "Préférence de contact *",
      message: "Message *",
    },
    serviceTypes: {
      firefighting: "Équipements Incendie",
      ppe: "EPI & Sécurité",
      maintenance: "Maintenance & Inspection",
      training: "Formation",
      consulting: "Conseil & Études",
      waveplus: "WAVE PLUS",
      emergency: "Intervention d'Urgence",
    },
    locations: {
      sfax: "Sfax",
      tunis: "Tunis",
      other: "Autre région",
    },
    contactPreferences: {
      phone: "Téléphone",
      email: "Email",
      visit: "Visite sur site",
    },
    placeholders: {
      name: "Votre nom complet",
      email: "votre.email@exemple.com",
      phone: "+216 XX XXX XXX",
      company: "Nom de votre entreprise",
      message: "Décrivez votre besoin ou votre projet...",
    },
    submit: "Envoyer la demande",
    success: "Votre demande a été envoyée avec succès !",
    successMessage: "Nous vous recontacterons dans les plus brefs délais.",
  },
  en: {
    title: "Contact Request",
    subtitle: "Fill out this form and we will contact you quickly",
    fields: {
      name: "Full name *",
      email: "Email *",
      phone: "Phone *",
      company: "Company",
      serviceType: "Service type *",
      location: "Location *",
      contactPreference: "Contact preference *",
      message: "Message *",
    },
    serviceTypes: {
      firefighting: "Fire Equipment",
      ppe: "PPE & Safety",
      maintenance: "Maintenance & Inspection",
      training: "Training",
      consulting: "Consulting & Studies",
      waveplus: "WAVE PLUS",
      emergency: "Emergency Intervention",
    },
    locations: {
      sfax: "Sfax",
      tunis: "Tunis",
      other: "Other region",
    },
    contactPreferences: {
      phone: "Phone",
      email: "Email",
      visit: "Site visit",
    },
    placeholders: {
      name: "Your full name",
      email: "your.email@example.com",
      phone: "+216 XX XXX XXX",
      company: "Your company name",
      message: "Describe your need or project...",
    },
    submit: "Send request",
    success: "Your request has been sent successfully!",
    successMessage: "We will contact you as soon as possible.",
  },
}

export function ContactForm({ currentLang }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    location: "",
    contactPreference: "",
    message: "",
  })

  const t = formContent[currentLang]

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
      <div className="bg-background p-8 lg:p-12 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="flex items-center justify-center w-16 h-16 bg-chart-3/20 rounded-full mb-6 mx-auto">
            <CheckCircle className="h-8 w-8 text-chart-3" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-chart-3">{t.success}</h3>
          <p className="text-muted-foreground mb-6">{t.successMessage}</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            {currentLang === "fr" ? "Nouvelle demande" : "New request"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background p-8 lg:p-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
        <p className="text-muted-foreground mb-8 text-pretty">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{t.fields.name}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t.placeholders.name}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">{t.fields.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.placeholders.email}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{t.fields.phone}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t.placeholders.phone}
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="company">{t.fields.company}</Label>
              <Input
                id="company"
                type="text"
                placeholder={t.placeholders.company}
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label>{t.fields.serviceType}</Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
              <SelectTrigger>
                <SelectValue placeholder={currentLang === "fr" ? "Sélectionnez un service" : "Select a service"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="firefighting">{t.serviceTypes.firefighting}</SelectItem>
                <SelectItem value="ppe">{t.serviceTypes.ppe}</SelectItem>
                <SelectItem value="maintenance">{t.serviceTypes.maintenance}</SelectItem>
                <SelectItem value="training">{t.serviceTypes.training}</SelectItem>
                <SelectItem value="consulting">{t.serviceTypes.consulting}</SelectItem>
                <SelectItem value="waveplus">{t.serviceTypes.waveplus}</SelectItem>
                <SelectItem value="emergency">{t.serviceTypes.emergency}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>{t.fields.location}</Label>
            <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
              <SelectTrigger>
                <SelectValue placeholder={currentLang === "fr" ? "Sélectionnez une région" : "Select a region"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sfax">{t.locations.sfax}</SelectItem>
                <SelectItem value="tunis">{t.locations.tunis}</SelectItem>
                <SelectItem value="other">{t.locations.other}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>{t.fields.contactPreference}</Label>
            <RadioGroup
              value={formData.contactPreference}
              onValueChange={(value) => handleInputChange("contactPreference", value)}
              className="flex flex-wrap gap-6 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-pref" />
                <Label htmlFor="phone-pref">{t.contactPreferences.phone}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-pref" />
                <Label htmlFor="email-pref">{t.contactPreferences.email}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="visit" id="visit-pref" />
                <Label htmlFor="visit-pref">{t.contactPreferences.visit}</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="message">{t.fields.message}</Label>
            <Textarea
              id="message"
              placeholder={t.placeholders.message}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {currentLang === "fr" ? "Envoi..." : "Sending..."}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                {t.submit}
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
