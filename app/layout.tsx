import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
  title: "SS PLUS | Sécurité Services Plus",
  description:
    "SS PLUS - Expert en sécurité incendie et protection au travail. Vente, installation et maintenance d'équipements de sécurité.",
  keywords: [
    "sécurité incendie",
    "protection au travail",
    "équipements de sécurité",
    "extincteurs",
    "formation incendie",
    "WAVE PLUS",
  ],
  alternates: {
    languages: {
      en: "/en",
      fr: "/fr",
    },
  },
  openGraph: {
    title: "SS PLUS | Sécurité Services Plus",
    description:
      "Expert en sécurité incendie et protection au travail. Vente, installation et maintenance d'équipements de sécurité.",
    url: "https://ssplus.tn",
    siteName: "SS PLUS",
    locale: "fr_TN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#e63946" />
      </head>
      <body className="min-h-screen">
        <LanguageProvider>
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  )
}
