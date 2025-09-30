import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react"

interface ContactInfoProps {
  currentLang: "fr" | "en"
}

const contactContent = {
  fr: {
    title: "Informations de Contact",
    emergency: {
      title: "Urgence 24/7",
      phone: "+216 74 453 027",
      description: "Intervention d'urgence disponible 24h/24 et 7j/7 pour tous vos besoins critiques.",
    },
    offices: {
      title: "Nos Bureaux",
      sfax: {
        name: "Siège Social - Sfax",
        address: "Route de Gabes Km 3.5, Sfax 3000, Tunisie",
        phone: "+216 74 453 027",
        email: "sfax@ssplus.tn",
        hours: "Lun-Ven: 8h00-17h30, Sam: 8h00-12h00",
      },
      tunis: {
        name: "Bureau de Tunis",
        address: "Raoued Ariana 2088, Tunisie",
        phone: "+216 74 453 027",
        email: "contact@ssplus.tn",
        hours: "Lun-Ven: 8h00-17h30",
      },
    },
    general: {
      title: "Contact Général",
      email: "contact@ssplus.tn",
      website: "www.ssplus.tn",
    },
    response: {
      title: "Temps de Réponse",
      emergency: "Urgence: < 2 heures",
      quote: "Devis: 24-48 heures",
      general: "Demande générale: 24 heures",
    },
  },
  en: {
    title: "Contact Information",
    emergency: {
      title: "24/7 Emergency",
      phone: "+216 74 453 027",
      description: "Emergency intervention available 24/7 for all your critical needs.",
    },
    offices: {
      title: "Our Offices",
      sfax: {
        name: "Headquarters - Sfax",
        address: "Gabes Road Km 3.5, Sfax 3000, Tunisia",
        phone: "+216 74 453 027",
        email: "contact@ssplus.tn",
        hours: "Mon-Fri: 8:00-17:30, Sat: 8:00-12:00",
      },
      tunis: {
        name: "Tunis Office",
        address: "Raoued Ariana 2088, Tunisia",
        phone: "+216 74 453 027",
        email: "contact@ssplus.tn",
        hours: "Mon-Fri: 8:00-17:30",
      },
    },
    general: {
      title: "General Contact",
      email: "contact@ssplus.tn",
      website: "www.ssplus.tn",
    },
    response: {
      title: "Response Time",
      emergency: "Emergency: < 2 hours",
      quote: "Quote: 24-48 hours",
      general: "General inquiry: 24 hours",
    },
  },
}

export function ContactInfo({ currentLang }: ContactInfoProps) {
  const t = contactContent[currentLang]

  return (
    <div className="bg-muted/50 p-8 lg:p-12">
      <h2 className="text-2xl font-bold mb-8">{t.title}</h2>

      {/* Emergency Contact */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
            <AlertTriangle className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-primary">{t.emergency.title}</h3>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Phone className="h-4 w-4 text-primary" />
          <a href={`tel:${t.emergency.phone}`} className="font-semibold text-primary hover:underline">
            {t.emergency.phone}
          </a>
        </div>
        <p className="text-sm text-muted-foreground text-pretty">{t.emergency.description}</p>
      </div>

      {/* Offices */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">{t.offices.title}</h3>
        <div className="space-y-6">
          {/* Sfax Office */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="font-semibold mb-3">{t.offices.sfax.name}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{t.offices.sfax.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${t.offices.sfax.phone}`} className="text-muted-foreground hover:text-primary">
                  {t.offices.sfax.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${t.offices.sfax.email}`} className="text-muted-foreground hover:text-primary">
                  {t.offices.sfax.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{t.offices.sfax.hours}</span>
              </div>
            </div>
          </div>

          {/* Tunis Office */}
          <div className="bg-card p-4 rounded-lg border">
            <h4 className="font-semibold mb-3">{t.offices.tunis.name}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{t.offices.tunis.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${t.offices.tunis.phone}`} className="text-muted-foreground hover:text-primary">
                  {t.offices.tunis.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${t.offices.tunis.email}`} className="text-muted-foreground hover:text-primary">
                  {t.offices.tunis.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{t.offices.tunis.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Contact */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">{t.general.title}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a href={`mailto:${t.general.email}`} className="text-muted-foreground hover:text-primary">
              {t.general.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 text-muted-foreground">🌐</span>
            <span className="text-muted-foreground">{t.general.website}</span>
          </div>
        </div>
      </div>

      {/* Response Times */}
      <div>
        <h3 className="text-lg font-semibold mb-4">{t.response.title}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-destructive rounded-full" />
            <span className="text-muted-foreground">{t.response.emergency}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-muted-foreground">{t.response.quote}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-chart-3 rounded-full" />
            <span className="text-muted-foreground">{t.response.general}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
