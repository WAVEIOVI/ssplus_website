import { Mail, Linkedin } from "lucide-react"

interface TeamProfilesProps {
  currentLang: "fr" | "en"
}

const teamContent = {
  fr: {
    title: "Notre Équipe",
    subtitle: "Des experts passionnés au service de votre sécurité",
    members: [
      {
        name: "Karim Ben Salem",
        position: "Gérant",
        expertise: "Plus de 25 ans d'expérience dans la sécurité incendie",
        description:
          "Fondateur et visionnaire de SS PLUS, Karim a développé l'entreprise depuis sa création en 2002. Expert reconnu dans le domaine de la sécurité incendie en Tunisie.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Najla Ben Salem",
        position: "Co-Gérante",
        expertise: "Plus de 20 ans d'expérience dans la sécurité incendie",
        description:
          "Responsable de la qualité et de la performance de l'entreprise, Najla supervise tous nos activités de SS PLUS.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Mohamed Chrayti",
        position: "Responsable Commercial et Technique",
        expertise: "Spécialiste en solutions de sécurité pour l'industrie",
        description:
          "Expert en développement commercial, Mohamed accompagne nos clients dans le choix des meilleures solutions de sécurité.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Mohamed Ali Lenda",
        position: "Responsable Financier",
        expertise: "Expert-comptable, spécialiste en gestion financière",
        description:
          "Responsable de la gestion financière et comptable de l'entreprise, Mohamed Ali assure la stabilité financière de SS PLUS.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Hela Daoud",
        position: "Responsable RH",
        expertise: "Spécialiste en ressources humaines et développement organisationnel",
        description:
          "Responsable du développement des talents et de la gestion des ressources humaines, Hela contribue à la croissance de l'équipe SS PLUS.",
        email: "#",
        linkedin: "#",
      },
    ],
  },
  en: {
    title: "Our Team",
    subtitle: "Passionate experts serving your safety",
    members: [
      {
        name: "Karim Ben Salem",
        position: "General Manager",
        expertise: "Over 25 years of experience in fire safety",
        description:
          "Founder and visionary of SS PLUS, Karim has developed the company since its creation in 2002. Recognized expert in fire safety in Tunisia.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Najla Ben Salem",
        position: "Co-General Manager",
        expertise: "Over 20 years of experience in fire safety",
        description:
          "Responsible for quality and company performance, Najla supervises all SS PLUS activities.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Mohamed Chrayti",
        position: "Commercial and Technical Manager",
        expertise: "Specialist in security solutions for industry",
        description:
          "Commercial development expert, Mohamed supports our clients in choosing the best security solutions.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Mohamed Ali Lenda",
        position: "Financial Manager",
        expertise: "Chartered accountant, financial management specialist",
        description:
          "Responsible for financial and accounting management of the company, Mohamed Ali ensures SS PLUS financial stability.",
        email: "#",
        linkedin: "#",
      },
      {
        name: "Hela Daoud",
        position: "HR Manager",
        expertise: "Human resources and organizational development specialist",
        description:
          "Responsible for talent development and human resources management, Hela contributes to SS PLUS team growth.",
        email: "#",
        linkedin: "#",
      },
    ],
  },
}

export function TeamProfiles({ currentLang }: TeamProfilesProps) {
  const t = teamContent[currentLang]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.members.map((member, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                  <p className="text-sm text-muted-foreground text-pretty mb-4">{member.description}</p>

                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
